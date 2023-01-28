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
                        <div className='flex justify-between pt-48 ml-2'>
                            <div>
                                <div>
                                    <p className='text-2xl font-semibold'>{cardName}</p>
                                </div>
                                <div>
                                    <p>{cardSubject}</p>
                                </div>
                            </div>
                            <div className='mt-7 mr-1'>
                                <div className='flex items-center justify-center bg-red-500 rounded-full p-1 hover:scale-125'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" ><path fill='#ffffff' d="M7.3 20.5q-.75 0-1.275-.525Q5.5 19.45 5.5 18.7V6h-1V4.5H9v-.875h6V4.5h4.5V6h-1v12.7q0 .75-.525 1.275-.525.525-1.275.525ZM17 6H7v12.7q0 .125.088.213.087.087.212.087h9.4q.1 0 .2-.1t.1-.2ZM9.4 17h1.5V8H9.4Zm3.7 0h1.5V8h-1.5ZM7 6V19v-.3Z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDeck