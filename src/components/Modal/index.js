import { useState } from 'react';

export default function Modal(){
    const [isOpen, setIsOpen] = useState(false);

    if(!isOpen){
        return(
            <button
                onClick={() => setIsOpen(true)}
                className='fixed bg-primary rounded-lg p-2 border border-2 self-end border-gray-600 mr-4 mt-1 lg:mt-5'
            >
                OPEN
            </button>
        );
    }
    else{
        return(
            <div className='w-screen h-screen fixed self-center content-center mt-28 lg:w-1/2'>
                <div className='bg-primary mx-5 rounded-lg border border-2 p-3 h-96 border-gray-600 flex flex-col'>
                    <div className='flex justify-between mx-2'>
                        <h1 className='text-lg font-semibold'>Publicar</h1>
                        <button
                            onClick={() => setIsOpen(false)}
                            className='px-2 py-1 mb-3 hover:bg-red-700 text-white rounded-lg bg-red-600 w-fit self-end'
                        >
                            X
                        </button>
                    </div>
                    <textarea
                        className='h-full mb-3 p-3 border border-2 border-gray-600 rounded'
                    />
                    <button
                        className='bg-blue-500 text-white rounded-lg hover:bg-blue-600 p-2 w-1/2 mx-auto lg:mx-0 lg:w-1/4'
                    >
                        Publicar
                    </button>
                </div>
            </div>
        )
    }
}