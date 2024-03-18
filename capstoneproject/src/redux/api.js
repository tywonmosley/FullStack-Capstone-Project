// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),

tagTypes: [ "Products" ],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (registerUser) => ({
        url: "/auth/register",
        method: "POST",
        body: registerUser,
      }),
    }),
    login: builder.mutation({
      query: (loginUser) => ({
        url: "/auth/login",
        method: "POST",
        body: loginUser,
      }),
    }),
    account: builder.query({
      query: (token) => ({
        url: "/users",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
    items: builder.query({
      query: (token) => ({
        url: "/products",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [ "Products" ],
    }),
    details: builder.query({
      query: ({ token, id }) => ({
        // eslint-disable-next-line no-undef
        url: `/products/${id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [ "Products" ],
    }),
    addItem: builder.mutation({
      query: ({ token, body }) => ({
        url: '/products',
        method:"POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["Products"],
    }),
   editItem: builder.mutation({
    query: ({ token, id, body }) => ({
      url: `/products/${id}`,
      method:"PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
    body, 
    }),
    invalidatesTags: ["Products"],
   }), 
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useAccountQuery,
  useItemsQuery,
  useDetailsQuery,
  useAddItemMutation,
  useEditItemMutation
} = apiSlice;
