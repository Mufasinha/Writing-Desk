import Navbar from '../components/Navbar';

Search.title = 'Pesquisar'

export default function  Search(){
    return(
        <div className='static pb-5'>
            <Navbar />
            <div className='flex flex-col'>
                <h1 className='text-black drop-shadow-primary text-2xl ml-20 pt-3 font-bold'>Pesquisar</h1>
                <div className='ml-20 mr-4 mt-3'>
                    <input className='bg-white py-2 pl-3 w-10/12 rounded-full outline outline-gray-200 border-gray-600 ' />
                    <button
                        className='bg-white hover:bg-secondary hover:outline-white rounded-full px-3 py-2 h-fit outline outline-gray-200 border-gray-600 ml-4'
                    >
                        Pesquisar
                    </button>
                </div>
            </div>
        </div>
    );
}