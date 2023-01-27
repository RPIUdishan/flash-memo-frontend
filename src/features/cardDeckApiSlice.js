import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getAllCardDecksApi = createApi({
    reducerPath: 'getAllCardDecksApi',
    baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:5000' }),
    endpoints: (builder) => ({
        getAllCardDecks: builder.query({
            query: () => '/api/flashCardsDeck'
        }),
    }),
})

export const { useGetAllCardDecksQuery } = getAllCardDecksApi