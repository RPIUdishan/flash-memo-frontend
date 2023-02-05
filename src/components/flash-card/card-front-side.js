import React from 'react'

import Question from './question'
import Answer from './answer'

const cardFrontSide = () => {
    return (
        <>
            <div className='w-1/3 h-96 bg-slate-50 border border-solid border-slate-900 mb-10'>
                <div>
                    <div>
                        <Question question='If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill.' />
                    </div>
                    <div>
                        <div>
                            <Answer answer='answer 1' />
                        </div>
                        <div>
                            <Answer answer='answer 2' />
                        </div>
                        <div>
                            <Answer answer='answer 3' />
                        </div>
                        <div>
                            <Answer answer='answer 4' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cardFrontSide;