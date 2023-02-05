import React from 'react'

const Question = ({question}) => {
  return (
    <>
    <div className='w-fit p-2'>
        <p className='text-md text-slate-900'>{question}</p>
    </div>
    </>
  )
}

export default Question