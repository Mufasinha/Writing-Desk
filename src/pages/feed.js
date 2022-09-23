import { useEffect } from 'react';
import { VerifyAuth, Signout } from '../utils/userAuth';
import { useRouter } from 'next/router';
import PostCard from '../components/PostCard';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';

Feed.title = 'Início'

export default function Feed(){

    const router = useRouter();

    useEffect(() => {
        VerifyAuth(router.pathname);
    }, [router.pathname]);

    return(
        <div className='static'>
            <Navbar />
            <div className='flex flex-col items-end lg:items-center'>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <div className='bg-primary rounded-lg border border-gray-600 mb-1 px-4 py-1.5 lg:w-1/2 w-72 mt-3 mx-3 note-height cursor-pointer'>
                    <div className='flex'>
                        <h1 className='text-xl font-semibold'>titulo</h1>
                        <p className='my-auto'><span className='mx-2'>-</span>@criador</p>
                    </div>
                    <p>conteudo</p>
                </div>
                <Modal />
            </div>
        </div>
    );
}