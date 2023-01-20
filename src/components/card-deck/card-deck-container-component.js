import React from 'react'
import CardDeck from './card-deck'

const CardDeckContainer = () => {

    const data = [
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

    return (
        <>
            <div className=''>
                <div className="grid grid-cols-5 gap-20 m-4">
                    {
                        data.map(cardDeck => (
                            <div>
                                <CardDeck cardName={cardDeck.cardName} cardSubject={cardDeck.cardSubject} cardColor={cardDeck.cardColor} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CardDeckContainer