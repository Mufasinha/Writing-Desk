import { useEffect } from 'react';
import { VerifyAuth, Signout } from '../utils/userAuth';
import { useRouter } from 'next/router';
import PostCard from '../components/PostCard';
import Navbar from '../components/Navbar';

Feed.title = 'Início'

export default function Feed(){

    const router = useRouter();

    useEffect(() => {
        VerifyAuth(router.pathname);
    }, [router.pathname]);

    const exitUser = () => {
        Signout();
    }

    return(
        <div>
            <Navbar />
            <PostCard />
            <button
                className='bg-red-600 px-4 py-2 ml-52'
                onClick={exitUser}
                type='button'
            >
                Sair
            </button>
        </div>
    );
}