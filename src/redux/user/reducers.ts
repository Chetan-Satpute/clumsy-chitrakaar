import {PayloadAction} from '@reduxjs/toolkit';
import {UserSlice} from './slice';
import {FirebaseUserProfile} from './types';

export function updateUserProfileReducer(
  state: UserSlice,
  action: PayloadAction<FirebaseUserProfile | null>,
) {
  state.profile = action.payload;
}
