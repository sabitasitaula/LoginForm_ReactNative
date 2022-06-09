import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {apiRoutes, BASE_URL} from '../config/configRoute';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getLogin: builder.mutation({
      query: data => {
        console.log(data,BASE_URL, apiRoutes.getLogin)
        return {
          url: apiRoutes.getLogin,
          method: 'POST',
          body: {...data},
        };
      },
    }),
  }),
});

export const {useGetLoginMutation} = loginApi;
