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
                    isError && error ?
                        <div className='w-full h-fit flex justify-center items-center'>
                            <div className="w-1/2 flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-400 dark:border-red-800" role="alert">
                                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Info</span>
                                <div>
                                    <span className="font-medium">Error:</span> Cannot fetch your card decks infomation
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
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