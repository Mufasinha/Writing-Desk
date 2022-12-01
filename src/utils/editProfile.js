import { userAuth, db } from './firebase';
import { updateProfile, updateEmail } from 'firebase/auth';

const auth = userAuth;

const changeDisplayName = (newDisplayName) => {
    updateProfile(auth.currentUser, {
        displayName: newDisplayName
    })
    .then(() => {
        console.log(auth.currentUser.displayName);
    })
    .catch((error) => {
        console.log(error);
    });
}

const changeEmail = (newEmail) => {
    updateEmail(auth.currentUser, newEmail)
    .then(() => {
        console.log(auth.currenUser.email);
    })
    .catch((error) => {
        console.log(error);
    });
}

const changePhotoURL = (newPhoto) => {
    updateProfile(auth.currentUser, {
        photoURL: newPhoto
    })
    .then(() => {
        console.log(auth.currentUser.photoURL);
    })
    .catch((error) => {
        console.log(error);
    });
}

const changeProfile = async (userDisplayName, userEmail, userPhotoURL) => {
    if(userDisplayName && userEmail && userPhotoURL){
        changeDisplayName(userDisplayName);
        changeEmail(userEmail);
        changePhotoURL(userPhotoURL);
    }
    if(userDisplayName && !userEmail && userPhotoURL){
        changeDisplayName(userDisplayName);
        changeEmail(userEmail);
        changePhotoURL(userPhotoURL);
    }
    if(userDisplayName && userEmail && !userPhotoURL){
        changeDisplayName(userDisplayName);
        changeEmail(userEmail);
        changePhotoURL(userPhotoURL);
    }
}

export { changeProfile };