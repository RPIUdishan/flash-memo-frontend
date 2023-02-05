import React from 'react'

const Answer = ({ answer, isCorrect, clarification }) => {
    return (
        <>
            <div className='my-4'>
                <div className="flex">
                    <div className="flex items-center h-5">
                        <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                    </div>
                    <div className="ml-2 text-sm">
                        <label for="helper-radio" className="font-medium text-gray-900 ">{answer}</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Answer