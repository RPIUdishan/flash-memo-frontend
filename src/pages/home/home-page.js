import React from 'react'

import AddCardDeck from "../../components/add-card-deck/add-card-deck-component";
import CardDeckContainer from '../../components/card-deck/card-deck-container-component'
import AddCard from '../../components/flash-card/add-card';

const HomePage = () => {
    return (
        <div className="mx-5">
            <AddCardDeck />
            <CardDeckContainer />
            <AddCard />
        </div>
    )
}

export default HomePage