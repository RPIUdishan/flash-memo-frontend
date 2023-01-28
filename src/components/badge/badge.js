import React from 'react'

const badge = ({noOfCards} )=> {
    return (
        <>
            <div className='w-7 h-7 rounded-full bg-red-500 p-3 flex items-center justify-center'>
                <p className='font-body text-white font-bold'>
                    {noOfCards}
                </p>
            </div>
        </>
    )
}

export default badge