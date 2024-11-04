import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../model/types";
import { IUserCardType } from "../../../entities/user/model/types";

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => 'users',
      providesTags: ['Users'],
      transformResponse: (response: IUser[]) => 
        response.map(({id, username, name, email}: IUserCardType) => ({
          id,
          username,
          name,
          email
      }))
    })
  })
})

export const { useGetAllUsersQuery } = usersApi;
