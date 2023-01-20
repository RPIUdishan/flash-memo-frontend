import React from 'react'
import CardDeck from './card-deck'

const CardDeckContainer = () => {
    return (
        <>
            <div className=''>
                <div className="grid grid-cols-5 gap-20 m-4">
                    <div>
                        <CardDeck />
                    </div>
                    <div>
                        <CardDeck />
                    </div>
                    <div>
                        <CardDeck />
                    </div>

                    <div>
                        <CardDeck />
                    </div>
                    <div>
                        <CardDeck />
                    </div>
                    <div>
                        <CardDeck />
                    </div>

                    <div>
                        <CardDeck />
                    </div>
                    <div>
                        <CardDeck />
                    </div>
                    <div>
                        <CardDeck />
                    </div>
                    <div>
                        <CardDeck />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDeckContainer