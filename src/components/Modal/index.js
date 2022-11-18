import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { userAuth } from '../../utils/firebase';
import { addPost } from '../../utils/posts';
import Router from 'next/router';

export default function Modal(){
    const [isOpen, setIsOpen] = useState(false);
    const [post, setPost] = useState({
        title: '',
        content: '',
        displayName: '',
        uid: ''
    });

    useEffect(() => {
        onAuthStateChanged(userAuth, (user) => {
            if(user){
                // Obter os dados do usuário logado
                setPost({
                    displayName: user.displayName,
                    uid: user.uid
                });
            }
        });
    }, []);

    const valueInput = e => setPost({...post, [e.target.name]: e.target.value});

    const newPost = async () => {
        try{
            await addPost(post.title, post.content, post.displayName, post.uid);
            Router.reload(window.location.pathname);
        }
        catch(error){
            console.log(error);
        }
    } 

    if(!isOpen){
        return(
            <button
                onClick={() => setIsOpen(true)}
                className='fixed bg-white hover:bg-secondary hover:outline-white rounded-lg py-2 px-3 outline outline-gray-200 self-end border-gray-600 mr-4 mt-3'
            >
                <i className='fa-solid fa-pen-to-square'></i>
            </button>
        );
    }
    else{
        return(
            <div className='w-screen h-screen grid place-items-center backdrop-blur-sm fixed self-center content-center'>
                <div className='bg-primary w-96 lg:w-1/2 mx-5 rounded-lg outline outline-gray-500 p-3 h-96 border-gray-600 flex flex-col'>
                    <div className='flex justify-between mx-2'>
                        <h1 className='text-lg font-semibold'>Publicar</h1>
                        <button
                            onClick={() => setIsOpen(false)}
                            className='px-3 py-1 mb-3 hover:text-black hover:outline hover:outline-red-600 hover:bg-white text-white rounded-lg bg-red-600 w-fit self-end'
                        >
                           <i className='fa-solid fa-xmark'></i>
                        </button>
                    </div>
                    <input
                        className='mb-3 outline outline-gray-200 rounded border-gray-600 p-1 pl-2'
                        placeholder='Título'
                        maxLength={30}
                        type='text'
                        name='title'
                        onChange={valueInput}
                        value={post.title}
                    />
                    <textarea
                        className='h-full mb-3 p-3 outline outline-gray-200 border-gray-600 rounded'
                        placeholder='Resenha'
                        maxLength={1024}
                        name='content'
                        onChange={valueInput}
                        value={post.content}
                    />
                    <button
                        className='bg-blue-500 text-white rounded-lg hover:bg-white hover:text-black hover:outline hover:outline-blue-500 p-2 w-1/2 mx-auto lg:mx-0 lg:w-1/4'
                        onClick={newPost}
                    >
                        Publicar
                    </button>
                </div>
            </div>
        )
    }
}