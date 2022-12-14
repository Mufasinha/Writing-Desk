import { useState, useEffect } from 'react';
import { VerifyAuth, SignInWithEmail, CreateGoogleUser } from '../utils/userAuth';
import { useRouter } from 'next/router';
import Link from 'next/link';

Home.title = 'Login';

export default function Home(){

	const router = useRouter();

	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	useEffect(() => {
		VerifyAuth(router.pathname);
	});

	const valueInput = e => setUser({...user, [e.target.name]: e.target.value});

	const signIn = (e) => {
		e.preventDefault();
		try{
			SignInWithEmail(user.email, user.password);
		}
		catch(error){
			console.log(error);
		}
	}

	const signInWithGoogle = () => {
		CreateGoogleUser();
	}

	return(
		<div className='bg-primary h-screen flex justify-center grid grid-cols-1 place-items-center'>
			<form
				className='grid bg-slate-100 w-11/12 lg:w-1/3 h-fit p-5 rounded-2xl text-center shadow-2xl'
				onSubmit={signIn}
			>
				<h1 className='text-2xl font-semibold'>Entrar</h1>
				<h2 className='text-xl font-semibold'>Use sua conta Google</h2>
				<button
					className='bg-blue-600 text-slate-100 py-2 px-5 w-fit justify-self-center rounded-md shadow-xl'
					type='button'
					onClick={signInWithGoogle}
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
					<Link href='cadastro'>
						<a className='underline'>ou crie uma nova conta...</a>
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