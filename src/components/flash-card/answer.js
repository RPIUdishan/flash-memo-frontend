import React, { useState } from 'react'

const Answer = ({ number, answer, isCorrect }) => {

    const [selectAnswer, setSelectAnswer] = useState(false);

    const correctionChecking = () => {
        console.log("clicked")
        setSelectAnswer(true)
        if (isCorrect === true) {
            console.log("Is Correct true")
        }
        else {
            console.log("Is correct false")
        }
        console.log("set select anser true")
    }

    return (
        <>
            <div className='m-4'>
                <div className="flex items-center">
                    <div className="flex items-center h-5">
                        <p>{number}</p>
                    </div>
                    <div
                        className="ml-2 text-sm border-slate-400 border border-solid rounded-full p-2 w-full h-fit flex items-center cursor-pointer hover:border-slate-800 hover:duration-700"
                        style={{
                            borderColor: selectAnswer && isCorrect ? "#09ff00" : null,
                            backgroundColor: selectAnswer && isCorrect ? "#c8f5c6" : null,
                        }}
                        onClick={correctionChecking}
                    >
                        <div>
                            <p>{answer}</p>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        selectAnswer && !isCorrect ?
                            <p className='text-[10px] ml-10 text-red-400'>Incorrect Answer</p>
                            : null
                    }
                </div>
            </div>
        </>
    )
}

export default Answer