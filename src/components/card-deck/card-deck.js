import React from 'react'

const CardDeck = ({ cardName, cardSubject, cardColor }) => {

  return (
    <>
    <div className='w-52 h-64 rounded-lg cursor-pointer' style={{backgroundColor: cardColor}}>
        <div className='w-52 h-64 rounded-bl-lg rounded-br-lg rounded-tr-lg rounded-tl-full ring-2 bg-white'>
            <div className='float-right m-2 ring-2 ring-blue-900 rounded-full p-1 bg-blue-900'>
                <p className='text-white font-bold'>25</p>
            </div>
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
    </>
  )
}

export default CardDeck