import { useState, useEffect } from 'react';
import { CreateUser, VerifyAuth, CreateGoogleUser } from '../utils/userAuth';
import { useRouter } from 'next/router';
import Link from 'next/link';

Home.title = 'Cadastro';

export default function Home(){

	const router = useRouter();

	const [user, setUser] = useState({
		email: '',
		password: '',
		checkPassword: ''
	});

	useEffect(() => {
		VerifyAuth(router.pathname);
	});

	const valueInput = e => setUser({...user, [e.target.name]: e.target.value});

	const createNewUser = (e) => {
		e.preventDefault();
		if(user.password !== user.checkPassword){
			alert('Verifique as senhas');
			return
		}
		try{
			CreateUser(user.email, user.password);
		}
		catch(error){
			console.log(error);
		}
	}

	const createNewGoogleUser = () => {
		CreateGoogleUser();
	}

	return(
		<div className='bg-primary h-screen flex justify-center grid grid-cols-1 place-items-center'>
			<form
				className='grid lg:w-1/3 py-10 bg-slate-100 w-11/12 h-fit p-5 rounded-lg text-center shadow-2xl'
				onSubmit={createNewUser}
			>
				<h1 className='text-2xl font-semibold'>Entrar</h1>
				<h2 className='text-xl font-semibold'>Use sua conta Google</h2>
				<button
					className='bg-blue-600 text-slate-100 py-2 px-5 w-fit justify-self-center rounded-md shadow-xl'
					type='button'
					onClick={createNewGoogleUser}
				>
					Google
				</button>
				<div className='grid gap-6 mt-6'>
					<input
						className='bg-slate-100 border-2 border-gray-400 rounded-md p-2'
						placeholder='Email'
						type='email'
						name='email'
						onChange={valueInput}
						value={user.email}
					/>
					<input
						className='bg-slate-100 border-2 border-gray-400 rounded-md p-2'
						placeholder='Senha'
						type='password'
						name='password'
						onChange={valueInput}
						value={user.password}
					/>
					<input
						className='bg-slate-100 border-2 border-gray-400 rounded-md p-2'
						placeholder='Confirme a senha'
						type='password'
						name='checkPassword'
						onChange={valueInput}
						value={user.checkPassword}
					/>
					<Link href='/'>
						<a className='underline'>ou entre com sua conta</a>
					</Link>
					<button
						className='bg-blue-600 text-slate-100 py-2 px-5 w-fit justify-self-end rounded-md shadow-xl'
						type='submit'
					>
						Entrar
					</button>
				</div>
			</form>
		</div>
	);
}