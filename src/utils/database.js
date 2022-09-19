import { db } from './firebase';
import { collection, serverTimestamp, getDocs, setDoc, where, orderBy, query } from 'firebase/firestore';

// Adiciona um novo post
const addPost = async (postTitle, postContent, postOwner) => {
    const postRef = doc(collection(db, 'posts'))

    await setDoc(postRef, {
        title: postTitle,
        content: postContent,
        owner: postOwner,
        date: serverTimestamp(),
        id: postRef.id
    });
}

const getPost = async () => {
    const q = query(collection(db, 'posts'), orderBy('date', 'desc'))
    const querySnapshot = await getDocs(q);

    let notes = [];
    querySnapshot.forEach((doc) => {
        notes.push(doc.data());
    }) ;
    return notes;
}

export { addPost, getPost };