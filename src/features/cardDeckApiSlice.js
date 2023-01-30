import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardDecksApi = createApi({
    reducerPath: 'cardDecksApi',
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:5000' }),

    endpoints: (builder) => ({
        getAllCardDecks: builder.query({
            query: () => '/api/flashCardsDeck'
        }),

        createCardDeck: builder.mutation({
            query: (initialTransaction) => ({
               url:  'api/flashCardDeck/create',
               method: 'POST',
               body: initialTransaction
            })
        })
    }),
});


export const { useGetAllCardDecksQuery } = cardDecksApi;