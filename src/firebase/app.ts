import {initializeApp} from 'firebase/app';
import {
  getAuth,
  User,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDlP9wsJ80tNhttO3QcB9yuLd-r1RuEe5A',
  authDomain: 'clumsy-chitrakaar-preprod.firebaseapp.com',
  projectId: 'clumsy-chitrakaar-preprod',
  storageBucket: 'clumsy-chitrakaar-preprod.firebasestorage.app',
  messagingSenderId: '39121355148',
  appId: '1:39121355148:web:e7b383ca3994e65af356a9',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export type FirebaseUser = User;

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log('[Firebase] Login user:', result.user);
  } catch (error) {
    console.error(error);
  }
}

export async function signOut() {
  return auth.signOut();
}
