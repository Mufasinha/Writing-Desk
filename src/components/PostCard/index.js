import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PostCard(props){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        if(props.data===null){
            return;
        }
        else{
            setPosts(props.data);
        }
    }, [props]);

    return(
        <div>
            {posts.map((post) => (
                <Link href={`/${post.uid}/posts/${post.id}`} key={post.id}>
                    <a className='bg-white hover:bg-secondary hover:outline-white outline outline-gray-200 drop-shadow-lg rounded-lg mt-5 ml-20 px-4 mr-4 mt-3 py-1.5 note-height cursor-pointer'>
                        <div className='flex'>
                            <h1 className='text-lg font-semibold'>{post.title}</h1>
                            <span className='mx-2'>-</span>
                            <Link href={`/${post.uid}`}>
                                <a className='w-1/2 truncate lg:w-fit'>
                                    { post?.owner
                                        ? <p className='my-auto truncate hover:underline'>@{post.owner}</p>
                                        : <p className='my-auto truncate hover:underline'>@{post.uid}</p> 
                                    }
                                    
                                </a>
                            </Link>
                        </div>
                        <p>{post.content}</p>
                    </a>
                </Link>
            ))
            }
        </div>
    );
}