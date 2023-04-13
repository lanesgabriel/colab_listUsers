/* Aqui criei o slice responsável pelo estado incial dos dados, 
   bem como os reducers que serão usados para atualizar o estado da aplicação 
*/

import { RandomUserResult } from '../../interfaces/IUsers'
import { createSlice } from '@reduxjs/toolkit'

interface RandomUserState {
  users: RandomUserResult[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RandomUserState = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    getUsersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})
