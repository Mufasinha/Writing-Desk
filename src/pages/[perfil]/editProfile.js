import { useState } from 'react';
import { changeProfile } from '../../utils/editProfile';
import Navbar from '../../components/Navbar';

EditProfile.title = 'Editar perfil'

export default function EditProfile(){

    const [newUser, setNewUser] = useState({
        newDisplayName: '',
        newEmail: '',
        newPhotoURL: ''
    });

    const valueInput = e => setNewUser({...newUser, [e.target.name]: e.target.value});

    const changeUserProfile = () => {
        try{
            changeProfile(newUser.newDisplayName, newUser.newEmail, newUser.newPhotoURL);
            Router.reload(window.location.pathname);
        }
        catch(error){
            console.log(error);
        }
    } 
    
    return(
        <div className='static pb-5'>
            <Navbar />
            <div className='flex flex-col'>
                <div className='ml-20 pt-2'>
                    <h1 className='text-black drop-shadow-primary text-2xl font-bold'>Editar perfil</h1>
                    <div className='flex justify-center'>
                        <div className='bg-white rounded-2xl w-9/12 h-full mr-4 mt-5 p-5'>
                            <label>Nome de usuário</label>
                            <input
                                className='w-full outline outline-gray-200 rounded border-gray-600 p-1 pl-2 mt-2 mb-3' 
                                placeholder='novouser'
                                maxLength={20}
                                type='text'
                                name='newDisplayName'
                                onChange={valueInput}
                                value={newUser.newDisplayName}
                            />
                            <label>Email</label>
                            <input
                                className='w-full outline outline-gray-200 rounded border-gray-600 p-1 pl-2 mt-2 mb-3' 
                                placeholder='exemplo@exemplo.com'
                                type='email'
                                name='newEmail'
                                onChange={valueInput}
                                value={newUser.newEmail}
                            />
                            <label>Foto de perfil</label>
                            <input
                                className='w-full outline outline-gray-200 rounded border-gray-600 p-1 pl-2 mt-2 mb-3'
                                placeholder='URL'
                                type='text'
                                name='newPhotoURL'
                                onChange={valueInput}
                                value={newUser.newPhotoURL}
                            />
                            <button
                                className='bg-blue-500 text-white rounded-lg hover:bg-white hover:text-black hover:outline hover:outline-blue-500 p-2 w-1/2 mx-auto lg:mx-0 lg:w-1/6'
                                onClick={changeUserProfile}
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}