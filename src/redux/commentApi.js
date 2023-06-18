import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/comments';
const BASE_URL = "https://6481f74629fa1c5c5032636a.mockapi.io";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
    }),
    addComment: builder.mutation({
      query: (body) => ({
        url: API_ENDPOINT,
        method: "POST",
        body,
      }),
    }),
    updateCommentCount: builder.mutation({
      query: (id, body) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation, useUpdateCommentCountMutation } =
  commentApi;
