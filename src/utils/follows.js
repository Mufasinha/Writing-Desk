import { db } from './firebase';
import { doc, updateDoc, increment, getDoc } from 'firebase/firestore';

const Follow = async (uid, authUid) => {
    const userRef = doc(db, 'users', uid);
    const userAuthRef = doc(db, 'users', authUid);

    // Atualiza o perfil acessado, não autenticado
    await updateDoc(userRef, {
        followers: increment(1),
        followersUid: [authUid]
    });

    // Atualiza o perfil do usuário autenticado
    await updateDoc(userAuthRef, {
        following: increment(1),
        followingUid: [uid]
    });
}

export { Follow };