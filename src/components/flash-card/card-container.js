import React from 'react'
import MockCard from './mock-card'

const CardContainer = () => {

    const cards = [
        {
            cardNumber: 1
        },
        {
            cardNumber: 2
        },
        {
            cardNumber: 3
        },
        {
            cardNumber: 4
        },
        {
            cardNumber: 5
        },
        {
            cardNumber: 6
        },
        {
            cardNumber: 7
        },
        {
            cardNumber: 8
        },
        {
            cardNumber: 9
        },
        {
            cardNumber: 10
        },
        {
            cardNumber: 11
        },
        {
            cardNumber: 12
        },
        {
            cardNumber: 13
        },
        {
            cardNumber: 14
        }
    ]

    return (
        <>
            <div className='w-screen h-fit flex justify-center items-center'>
                <div className="grid grid-cols-5  gap-2  items-center justify-center">
                    {
                        cards.map(card =>
                            <div id={card.cardNumer}>
                                <MockCard cardNumber={card.cardNumber} />
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default CardContainer