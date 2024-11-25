import {createSlice} from '@reduxjs/toolkit';
import {updateUserProfileReducer} from './reducers';
import {FirebaseUserProfile} from './types';

export interface UserSlice {
  profile: FirebaseUserProfile | null;
}

const initialState: UserSlice = {
  profile: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserProfile: updateUserProfileReducer,
  },
});

export const {updateUserProfile} = userSlice.actions;
