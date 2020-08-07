import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDlImGIQr9-rhZMaygRQZMAH71YCzy6wYY",
    authDomain: "crwn-db-956fd.firebaseapp.com",
    databaseURL: "https://crwn-db-956fd.firebaseio.com",
    projectId: "crwn-db-956fd",
    storageBucket: "crwn-db-956fd.appspot.com",
    messagingSenderId: "428082537670",
    appId: "1:428082537670:web:66edd715878aec0b6363c7"
  };
  
firebase.initializeApp(config);

export const createUserProfileDocument =  async(userAuth,additionalData)=>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName,email} =userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
      console.log('error creating user', error.message);
    }
  }
  console.log(userRef);
  return userRef;
  
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;