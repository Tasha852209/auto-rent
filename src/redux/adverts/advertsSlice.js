import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const advertsApiSlice = createApi({
  reducerPath: "adverts",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://647dc2cfaf984710854a42ef.mockapi.io",
    baseUrl: "https://65cd48bfdd519126b840524a.mockapi.io/",
  }),
  tagTypes: ["Adverts"],
  endpoints: (builder) => ({
    getAdverts: builder.query({
      query: () => "/adverts",
      providesTags: ["Adverts"],
    }),
    getAdvertById: builder.query({
      query: (id) => `/adverts/${id}`,
      providesTags: ["Adverts"],
    }),
    updateFavoriteAdvertById: builder.mutation({
      query: (fields) => ({
        url: `/adverts/${fields.id}`,
        method: "PUT",
        body: fields,
      }),
      invalidatesTags: ["Adverts"],
    }),
  }),
});

export const {
  useGetAdvertsQuery,
  useGetAdvertByIdQuery,
  useUpdateFavoriteAdvertByIdMutation,
} = advertsApiSlice;
