import { userAuth } from './firebase';
import
{
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
}
from 'firebase/auth';
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import Router from 'next/router';

const auth = userAuth;

// Salva os dados no firestore
const SaveUserData = async (displayName, email, uid) => {
    await setDoc(doc(db, 'users', uid), {
        displayName,
        email,
        uid
    });
}

// Faz uma série de verificações para saber se o usuário está logado ou não
const VerifyAuth = (props) => {
    onAuthStateChanged(auth, (user) => {
        if(!user && props==='/feed'){
            // Não está logado e estiver no feed, vai ser redirecionado para o index.js
            Router.push('/');
        }
        if(user && props==='/' || props==='/register'){
            // Está logado, mas acessou a página de login ou de cadastro, vai ser redirecionado para o feed
            Router.push('/feed');
        }
        if(user && props==='/feed'){
            // Está logado e está no feed. Não faz nada
            return;
        }
        else{
            return;
        }
    });
}

// Cria um novo usuário com email e senha
const CreateUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        SaveUserData(user.displayName, user.email, user.uid);
        // console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
}

// Cria um novo usuário com a conta Google
const CreateGoogleUser = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
        // Retorna um Token para ser usado com a API do Google
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        // Dados do usuário registrado
        const user = result.user;
        // console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        
        // O email já está sendo usado
        const email = error.customData.email;
        // console.log(email);

        const credential = GoogleAuthProvider.credentialFromError(error);
        // console.log(credential);
    });
}

// Desloga o usuário
const Signout = () => {
    signOut(auth)
    .then(() => {
        // Sign-out successful.
        // console.log('Deslogado');
    }).catch((error) => {
        // An error happened.
        console.log(error);
    });
}

export { CreateUser, VerifyAuth, CreateGoogleUser, Signout };