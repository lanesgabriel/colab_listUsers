/* Este service contém o endpoint da API como baseURL, 
e é responsável por fazer o fetch dos dados na API através do getUsers. */

import { RandomUserResult } from '../../interfaces/IUsers'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const randomUserApi = createApi({
  reducerPath: 'randomUserApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://randomuser.me/api/'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<RandomUserResult, number>({
      query: (numberOfUsers) => `?results=${numberOfUsers}`,
    }),
  }),
})

// Este export será usado na página de ListUser para fazer o fetch dos dados.
export const { useGetUsersQuery } = randomUserApi
