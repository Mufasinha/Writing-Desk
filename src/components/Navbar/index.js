import { Signout } from '../../utils/userAuth';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { userAuth } from '../../utils/firebase';
import Link from 'next/link';

export default function Navbar(){

    const [user, setUser] = useState({
        displayName: '',
        email: '',
        uid: '',
        userPhotoURL: ''
    });

    const exitUser = () => {
        Signout();
    }

    useEffect(() => {
        onAuthStateChanged(userAuth, (user) => {
            setUser({
                displayName: user.displayName,
                email: user.email,
                uid: user.uid,
                userPhotoURL: user.photoURL
            });
        });
    }, []);
    
    return(
        <div className='flex flex-col justify-between w-16 h-screen bg-white border-r fixed 3xl left'>
            <div>
                <Link href={`/${user.uid}`}>
                    <a>
                        <div className='inline-flex items-center justify-center w-16 h-16'>
                            <span className='block w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer'></span>
                        </div>
                        </a>
                </Link>
        
                <div className='border-t border-gray-600'>
                    <nav className='flex flex-col p-2'>
                        <ul className='pt-4 border-t border-gray-600 space-y-1'>
                            <li>
                                <Link href='/feed'>
                                    <a
                                        className='flex justify-center px-2 py-1.5 text-gray-700 rounded hover:bg-gray-50 hover:text-gray-500 relative group'
                                    >
                                        <i className='fa-solid fa-users'></i>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${user.uid}/galeria`}>
                                    <a
                                        className='relative group flex justify-center px-2 py-1.5 text-gray-700 rounded hover:bg-gray-50 hover:text-gray-500'
                                    >
                                        <i className='fa-solid fa-user'></i>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        
            <div className='sticky inset-x-0 bottom-0 p-2 bg-white border-t border-gray-600'>
                <form>
                    <button
                        type='button'
                        className='flex justify-center w-full px-2 py-1.5 text-sm text-gray-700 rounded-lg hover:bg-gray-50 hover:text-gray-500 group relative'
                        onClick={exitUser}
                    >
                        <i className='fa-solid fa-arrow-right-from-bracket'></i>
                    </button>
                </form>
            </div>
        </div>
    );
}