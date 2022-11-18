import { userAuth } from './firebase';
import
{
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    signInWithEmailAndPassword
}
from 'firebase/auth';
import { db } from './firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import Router from 'next/router';

const auth = userAuth;

// Entra com email e senha
const SignInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
        SaveUserData(user.displayName, user.email, user.uid, user.metadata.creationTime, user.phoneNumber, user.photoURL);
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
        SaveUserData(user.displayName, user.email, user.uid, user.metadata.creationTime, user.phoneNumber, user.photoURL);
        console.log(user);
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

// Salva os dados no firestore
const SaveUserData = async (displayName, email, uid, creationTime, phoneNumber, photoURL) => {
    await setDoc(doc(db, 'users', uid), {
        displayName,
        email,
        uid,
        creationTime,
        phoneNumber,
        photoURL,
        bio: '',
        following: 0,
        followers: 0
    });
}

// Obtém os dados do perfil atual
const getUserInfo = async (uid) => {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log('Document data:', docSnap.data());
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
    }

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

export { CreateUser, VerifyAuth, getUserInfo, CreateGoogleUser, Signout, SignInWithEmail };