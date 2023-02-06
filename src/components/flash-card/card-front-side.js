import React from 'react'

import Question from './question'
import Answer from './answer'

const cardFrontSide = () => {
    const answers = [
        {
            number:1,
            answer: "answer 1",
            isCorrect: false
        },
        {
            number:2,
            answer: "answer 2",
            isCorrect: false
        },
        {
            number:3,
            answer: "answer 3",
            isCorrect: true
        },
        {
            number:4,
            answer: "answer 4",
            isCorrect: false
        },
    ]
    return (
        <>
            <div className='w-1/3 h-96 bg-slate-50 border border-solid border-slate-600 rounded-2xl'>
                <div>
                    <div>
                        <Question question='If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill.' />
                    </div>
                    <div>
                        <div>
                            {
                                answers.map((answer) => (
                                    <div>
                                        <Answer number={answer.number} answer={answer.answer} isCorrect={answer.isCorrect} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cardFrontSide;