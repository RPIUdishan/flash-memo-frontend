import React from 'react'
import { useGetAllCardDecksQuery } from '../../features/cardDeckApiSlice'
import CardDeck from './card-deck'

import HashLoader from "react-spinners/HashLoader";

const CardDeckContainer = () => {

    const { data, error, isError, isLoading } = useGetAllCardDecksQuery();

    return (
        <>
            <div className='container'>
                <div className='m-4'>
                    <div>
                        <p className="text-4xl  font-body text-blue-900">Your Card Decks</p>
                    </div>
                    <div className='flex mx-20'>
                        <div className='mt-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M3.479 11.167V8.812h13.042v2.355Z" /></svg>
                        </div>
                        <div>
                            <p className='text-xl italic font-quotes text-blue-900 mx-1 mt-5'>Practice Makes You Perfect</p>
                        </div>
                    </div>
                </div>
                {
                    isLoading ?
                        <div className='w-full flex justify-center items-center'>
                            <HashLoader
                                color="#36d7b7"
                            />
                        </div> : null
                }
                <div className="grid grid-cols-5 gap-20 m-4">
                    {
                        data && data.map((cardDeck) => (
                            <div key={cardDeck._id}>
                                <CardDeck cardName={cardDeck.title} cardSubject={cardDeck.subject} cardColor={cardDeck.color} noOfCards={cardDeck.noOfCards} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CardDeckContainer