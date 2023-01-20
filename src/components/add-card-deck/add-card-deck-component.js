import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    addCardDeck
} from '../../features/cardDeckSlice';
import Popup from 'reactjs-popup'

const AddCard = () => {

    const [deckName, setDeckName] = useState("");
    const [subject, setSubject] = useState("");
    const [color, setColor] = useState("");

    const [cardDeckObj, setCardDeckObj] = useState({});

    const dispatch = useDispatch();

    const cardObj = {
        deckName: deckName,
        subject: subject,
        color: color 
    }


    const clearForm = () =>{
        setDeckName("");
        setSubject("");
        setColor("");
    }
    
    const addCardDeckf = () => {
        setCardDeckObj(cardObj);
        clearForm();
        // console.log(cardDeckObj);
    }

    console.log('obj', cardObj)
    return (
        <>
            <Popup
                trigger={<button>
                    <div className='container w-auto my-20 ml-20 mr-20'>
                        <div className="w-52 h-64 ring-offset-2 ring bg-white border-black border-dashed border-2 rounded-xl">
                            <div className="flex items-center justify-center h-full cursor-pointer">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>}
                position="right bottom"
                closeOnDocumentClick={false}

            >
                <div>
                    <div className="w-[300] h-auto bg-white border-black border-2 border-dashed px-10 py-2 -mt-96 ring-2 ring-blue-500 ring-offset-2 rounded-xl">
                        <div className='divide-y-2'>
                            <div className='my-5'>
                                <p className="text-xl text-center">Add Your Card Deck Information</p>
                            </div>
                            <div>
                                <div className="flex flex-row my-4">
                                    <div className="flex justify-center items-center mr-3">
                                        <label
                                            className="block tracking-wide text-gray-700 text-xs font-bold">
                                            Name
                                        </label>
                                    </div>
                                    <div className="ml-2.5">
                                        <input
                                            className="appearance-none block w-96 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="My Deck"
                                            onChange={(e) => setDeckName(e.currentTarget.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-row my-4">
                                    <div className="flex justify-center items-center mr-3">
                                        <label
                                            className="block tracking-wide text-gray-700 text-xs font-bold">
                                            Subject
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            className="appearance-none block w-96 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-last-name"
                                            type="text"
                                            placeholder="Science"
                                            onChange={(e) => setSubject(e.currentTarget.value)}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-row justify-evenly'>
                                    <div className='flex justify-center items-center'>
                                        <lable className="block tracking-wide text-gray-700 text-xs font-bold">
                                            Select a Preferred Color
                                        </lable>
                                    </div>
                                    <div>
                                        <input
                                            type={'color'}
                                            className="w-20 h-10 cursor-pointer"
                                            onChange={(e) => setColor(e.currentTarget.value)}
                                        />
                                    </div>
                                </div>
                                <div className='flex justify-center items-center mt-16'>
                                    <button
                                        type='button'
                                        className='w-36 h-12 bg-blue-900 rounded-lg flex justify-center items-center cursor-pointer'
                                        onClick={() => addCardDeckf && dispatch(addCardDeck(cardDeckObj))}
                                    >
                                        <p className='text-white'>Add Card Deck</p>
                                    </button>
                                </div>
                                <div className='my-1 flex justify-end'>
                                    <p className='text-xs'>Click <span className='ring-2 ring-slate-400 py-1 px-2 rounded-sm'>esc</span> to close popup</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default AddCard