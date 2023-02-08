import React from 'react'

const MockCard = ({cardNumber}) => {
    return (
        <>
            <div className='w-60 h-32 bg-white border-2 border-[#2596be] border-solid hover:border-2 hover:border-solid hover:border-[#063970] rounded-lg flex justify-center item-center hover:duration-500 cursor-pointer'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='rounded-full border-2 border-[#2596be] border-dashed h-10 w-10 flex justify-center items-center '>
                        <p className='font-body text-2xl'>{cardNumber}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MockCard