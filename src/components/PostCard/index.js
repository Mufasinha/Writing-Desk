import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getPost } from '../../utils/database';

export default function PostCard(){

    const [notes, setNotes] = useState([])

    useEffect(() => {
        const res = async () => {
            const note = await getPost();
            setNotes(note);
        }
        res();
    }, []);

    return(
        <div>
            {notes.map((post) => (
                <Link href={`/${post.owner}/posts/${post.id}`} key={post.id} passHref>
                    <div className='bg-primary rounded-lg mb-5 px-4 py-1.5 ml-20 note-height cursor-pointer'>
                        <div className='flex'>
                            <h1 className='text-xl font-semibold'>{post.title}</h1>
                            <p className='my-auto'><span className='mx-2'>-</span>@{post.owner}</p>
                        </div>
                        <p>{post.content}</p>
                    </div>
                </Link>
            ))
            }
        </div>
    );
}