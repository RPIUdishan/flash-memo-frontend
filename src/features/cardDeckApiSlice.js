import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardDecksApi = createApi({
    reducerPath: 'cardDecksApi',
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:5000' }),

    endpoints: (builder) => ({
        getAllCardDecks: builder.query({
            query: () => '/api/flashCardsDeck'
        }),
        
        createCardDeck: builder.mutation({
            query: (initialCardDeckData) => ({
                url:  '/api/flashCardsDeck/create',
                method: 'POST',
                body: {
                    ...initialCardDeckData
                },           
            })
        })
    }),
});


export const { useGetAllCardDecksQuery } = cardDecksApi;
export const { useCreateCardDeckMutation } = cardDecksApi;