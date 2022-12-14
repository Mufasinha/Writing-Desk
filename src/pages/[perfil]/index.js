import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import PostCard from '../../components/PostCard';
import Link from 'next/link';
import { getUserPosts } from '../../utils/posts';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUserInfo } from '../../utils/userAuth';
import { onAuthStateChanged } from 'firebase/auth';
import { userAuth } from '../../utils/firebase';

Perfil.title = 'Perfil';

export default function Perfil(){

    const route = useRouter();
    const auth = userAuth;

    const [authUser, setAuthUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({
        bio: '',
        creationTime: '',
        displayName: '',
        email: '',
        phoneNumber: null,
        photoURL: '',
        uid: '',
    });

    useEffect(() => {
        if(!route.isReady) return;

        // Obtém os dados do perfil acessado
        const getUser = async () => {
            const res = await getUserInfo(route.query.perfil);
            setUser({
                bio: res.bio,
                creationTime: res.creationTime,
                displayName: res.displayName,
                email: res.email,
                phoneNumber: res.phoneNumber,
                photoURL: res.photoURL,
                uid: res.uid,
            });
        };

        // Obtém os dados do usuário autenticado
        onAuthStateChanged(auth, (user) => {
            setAuthUser({
                bio: user.bio,
                creationTime: user.creationTime,
                displayName: user.displayName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                photoURL: user.photoURL,
                uid: user.uid,
            });
        });

        const res = async () => {
            const post = await getUserPosts(route.query.perfil)
            setPosts(post);
        }
        res();
        getUser();
    }, [route, auth]);

    return(
        <div className='static pb-5'>
            <Navbar />
            <div className='flex flex-col'>
                <div className='ml-20 pt-2'>
                    <h1 className='text-black drop-shadow-primary text-2xl font-bold'>Perfil</h1>
                    <div className='bg-white rounded-2xl h-full mr-4 mt-5 p-5'>
                        <div className='grid'>
                            <div className='flex justify-between'>
                                <div className='bg-gray-600 h-24 w-24 rounded-full'>
                                </div>
                                { user.uid===authUser.uid
                                    ?   <Link href={`/${authUser.uid}/editProfile`}>
                                            <a className='bg-white hover:bg-secondary hover:outline-white rounded-full px-3 py-2 h-fit outline outline-gray-200 border-gray-600 mr-4 mt-3'>
                                                Editar perfil
                                            </a>
                                        </Link>
                                    :   <div></div>
                                }
                            </div>
                            <div className='mt-5'>
                                { user?.displayName
                                    ? <p className='my-auto truncate font-bold'>@{user.displayName}</p>
                                    : <p className='my-auto truncate'>@{user.uid}</p> 
                                }
                                <p className='break-all'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            </div>
                        </div>
                        <PostCard data={posts} />
                    </div>
                </div>
                <Modal />
            </div>
        </div>
    );
}