import React from 'react'

import AddCard from "../../components/add-card-deck/add-card-deck-component";
import CardDeckContainer from '../../components/card-deck/card-deck-container-component'

const HomePage = () => {
    return (
        <div className="mx-5">
            <AddCard />
            <CardDeckContainer />
        </div>
    )
}

export default HomePage