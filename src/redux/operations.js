import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65cd48bfdd519126b840524a.mockapi.io',
  }),
  tagTypes: ['Adverts'],
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `/adverts?page=${page}&limit=12`,
      providesTags: ['Adverts'],
    }),
    getAdverts: builder.query({
      query: () => '/adverts',
      providesTags: ['Adverts'],
    }),
  }),
});

export const { useGetCarsByPageQuery, useGetAdvertsQuery } = carsApi;
