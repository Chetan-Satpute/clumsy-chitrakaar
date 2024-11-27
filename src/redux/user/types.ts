import {FirebaseUser} from '~/firebase/app';

export type FirebaseUserProfile = Pick<
  FirebaseUser,
  'displayName' | 'email' | 'photoURL' | 'emailVerified' | 'uid'
>;
