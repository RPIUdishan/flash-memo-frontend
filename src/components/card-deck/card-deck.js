import React from 'react'
import Badge from '../badge/badge'

const CardDeck = ({ cardName, cardSubject, cardColor, noOfCards }) => {

    return (
        <>
            <div className='my-3'>
                <div className='absolute -mt-3 -ml-2 justify-items-end'>
                    <Badge noOfCards={noOfCards} />
                </div>
                <div className='w-52 h-64 rounded-lg cursor-pointer' style={{ backgroundColor: cardColor }}>
                    <div className='w-52 h-64 rounded-bl-lg rounded-br-lg rounded-tr-lg rounded-tl-full ring-2 bg-white'>
                        <div className='flex-col pt-48 ml-2'>
                            <div>
                                <p className='text-2xl font-semibold'>{cardName}</p>
                            </div>
                            <div>
                                <p>{cardSubject}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDeck