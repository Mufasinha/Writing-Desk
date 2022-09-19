import { Signout } from '../../utils/userAuth';

export default function Navbar(){

    const exitUser = () => {
        Signout();
    }

    return(
        <div className='flex flex-col justify-between w-16 h-screen bg-white border-r fixed 3xl left'>
            <div>
                <div className='inline-flex items-center justify-center w-16 h-16'>
                    <span className='block w-10 h-10 bg-gray-200 rounded-lg'></span>
                </div>
        
                <div className='border-t border-gray-100'>
                    <nav className='flex flex-col p-2'>
                        <ul className='pt-4 border-t border-gray-100 space-y-1'>
                            <li>
                                <a
                                    href='../feed/index.html'
                                    className='flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='w-5 h-5 opacity-75'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                                        />
                                    </svg>
            
                                    <span
                                        className='absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'
                                    >
                                        Início
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='../gallery/index.html'
                                    className='relative group flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='w-5 h-5 opacity-75'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                        />
                                    </svg>
                                    <span
                                        className='absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'
                                    >
                                        Galeria
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        
            <div className='sticky inset-x-0 bottom-0 p-2 bg-white border-t border-gray-100'>
                <form>
                    <button
                        type='button'
                        className='flex justify-center w-full px-2 py-1.5 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 group relative'
                        onClick={exitUser}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5 opacity-75'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                            
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                            />
                        </svg>
            
                        <span
                            className='absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'
                        >
                            Logout
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
}