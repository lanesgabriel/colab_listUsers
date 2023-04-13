/* Aqui é criado o store da aplicação a partir do configureStore(). 
Dentro dele é utilizado o randomUserApi do services para fazer a chamada a API, 
bem como os reducers do userSlice através do usersSlice.reducer para atualizar o estado da aplicação.*/

import { configureStore } from '@reduxjs/toolkit'
import { usersSlice } from './reducers/userSlice'
import { randomUserApi } from './services/randomUserApi'

export const store = configureStore({
  reducer: {
    [randomUserApi.reducerPath]: randomUserApi.reducer,
    users: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(randomUserApi.middleware),
})
