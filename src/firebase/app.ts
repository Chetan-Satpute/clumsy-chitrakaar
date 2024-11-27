import {initializeApp} from 'firebase/app';
import {
  getAuth,
  User,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import {Order, OrderProduct} from '~/redux/order/types';
import {FirebaseUserProfile} from '~/redux/user/types';
import {AddressFormData} from '~/routes/address/schema';

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

const ordersCollection = collection(db, 'orders');

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

export async function getOrders(user: FirebaseUserProfile) {
  const q = query(ordersCollection, where('user.uid', '==', user.uid));
  const querySnapshot = await getDocs(q);

  const orders: Order[] = [];

  querySnapshot.forEach((doc) =>
    orders.push({id: doc.id, ...doc.data()} as Order),
  );

  return orders;
}

export async function saveOrder(
  cart: OrderProduct[],
  address: Required<AddressFormData>,
  images: string[],
  user: FirebaseUserProfile,
) {
  return addDoc(ordersCollection, {
    cart: cart,
    address: address,
    paymentProof: images,
    user: {
      uid: user.uid,
      email: user.email,
    },
  });
}
