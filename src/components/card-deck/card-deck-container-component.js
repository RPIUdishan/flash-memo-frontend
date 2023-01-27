import React from 'react'
import {  useGetAllCardDecksQuery  } from '../../features/cardDeckApiSlice'
import CardDeck from './card-deck'

const CardDeckContainer = () => {

    const dataa = [
        {
            cardName: 'Test 01',
            cardSubject: 'Mathematics',
            cardColor: '#349eeb'
        },
        {
            cardName: 'Test 02',
            cardSubject: 'Science',
            cardColor: '#815bf5'
        },
        {
            cardName: 'Test 03',
            cardSubject: 'Geology',
            cardColor: '#5db068'
        },
        {
            cardName: 'Test 04',
            cardSubject: 'Information Technology',
            cardColor: '#e8254f'
        },
        {
            cardName: 'Test 05',
            cardSubject: 'Business Science',
            cardColor: '#fac905'
        }
    ]

 const { data, error, isError, isLoading } = useGetAllCardDecksQuery();

    return (
        <>
        {console.log("on the app", isError)}
            <div className=''>
                <div className="grid grid-cols-5 gap-20 m-4">
                    { 
                        data &&  data.map((cardDeck) => (
                            <div key={cardDeck._id}>
                                <CardDeck cardName={cardDeck.title} cardSubject={cardDeck.subject} cardColor={cardDeck.color} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CardDeckContainer