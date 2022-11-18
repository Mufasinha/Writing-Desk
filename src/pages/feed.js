import { useEffect, useState } from 'react';
import { VerifyAuth } from '../utils/userAuth';
import { useRouter } from 'next/router';
import PostCard from '../components/PostCard';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import { getPost } from '../utils/posts';

Feed.title = 'Início'

export default function Feed(){
    const router = useRouter();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        VerifyAuth(router.pathname);
        const res = async () => {
            const data = await getPost();
            setPosts(data);
        }
        res();
    }, [router.pathname]);

    return(
        <div className='static pb-5'>
            <Navbar />
            <div className='flex flex-col'>
                <h1 className='text-black drop-shadow-primary text-2xl ml-20 pt-3 font-bold'>Feed</h1>
                <PostCard data={posts} />
                <Modal />
            </div>
        </div>
    );
}