import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import PostCard from '../../components/PostCard';
import { getUserPosts } from '../../utils/posts';
import Modal from '../../components/Modal';

export default function Galeria(){

    const [posts, setPosts] = useState([]);

    const route = useRouter();

    useEffect(() => {
        if(!route.isReady) return;
        const res = async () => {
            const post = await getUserPosts(route.query.perfil)
            setPosts(post);
        }
        res();
    }, [route]);

    return(
        <div className='static'>
            <Navbar />
            <div className='flex flex-col'>
                <h1 className='text-black drop-shadow-primary text-2xl ml-20 pt-3 font-bold'>Suas Resenhas</h1>
                <PostCard data={posts} />
                <Modal />
            </div>
        </div>
    );
}