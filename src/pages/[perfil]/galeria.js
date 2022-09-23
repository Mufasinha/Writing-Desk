import Link from 'next/link';
import { useRouter } from 'next/router';
import Modal from '../../components/Modal';

export default function Galeria(){

    const route = useRouter();

    return(
        <div>
            <h1>Usuário atual: {route.query.perfil}</h1>
            <Link href='/feed'>
                <a className='hover:text-blue-600 hover:underline'>Voltar para o feed</a>
            </Link>
        </div>
    );
}