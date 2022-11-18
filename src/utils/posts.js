import { db } from './firebase';
import { collection, serverTimestamp, getDocs, setDoc, where, orderBy, query, doc } from 'firebase/firestore';

// Adiciona um novo post
const addPost = async (postTitle, postContent, postOwner, postUid) => {
    const postRef = doc(collection(db, 'posts'))

    await setDoc(postRef, {
        title: postTitle,
        content: postContent,
        owner: postOwner,
        uid: postUid,
        date: serverTimestamp(),
        id: postRef.id
    });
}

const getPost = async () => {
    const q = query(collection(db, 'posts'), orderBy('date', 'desc'))
    const querySnapshot = await getDocs(q);

    let posts = [];
    querySnapshot.forEach((doc) => {
        posts.push(doc.data());
    }) ;
    return posts;
}

// const searchPost = async (search) => {
//     const q = query(collection(db, 'posts'), where('title', '==', search));

//     let posts = [];
//     const querySnapshot = await getDocs(q);
//         querySnapshot.forEach((doc) => {
//         // console.log(doc.id, ' => ', doc.data());
//         posts.push(doc.data());
//     });
//     return posts;
// }

const getUserPosts = async (uid) => {
    const q = query(collection(db, 'posts'), where('uid', '==', uid), orderBy('date', 'desc'));

    const querySnapshot = await getDocs(q);

    let posts = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, ' => ', doc.data());
        posts.push(doc.data());
    });
    return posts;
}

export { addPost, getPost, getUserPosts };