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
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const cardObj = {
        deckName: deckName,
        subject: subject,
        color: color
    }


    const clearForm = () => {
        setDeckName("");
        setSubject("");
        setColor("");
    }

    const addCardDeckf = () => {
        setCardDeckObj(cardObj);
        clearForm();
        // console.log(cardDeckObj);
    }

    const setClose = () => {
        setOpen(false)
    }

    console.log('obj', cardObj)
    return (
        <>
            {/* <div className='flex items-center justify-center'>
                <Popup
                    modal={true}
                    trigger={
                        <button>
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
                        </button>
                    }
                    position="right bottom"
                   overlayStyle={true}

                >
                    <div>
                        <div className="w-[300] h-auto bg-white border-black border-2 border-dashed px-10 py-2 ring-2 ring-blue-500 ring-offset-2 rounded-xl">
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
                                            <label className="block tracking-wide text-gray-700 text-xs font-bold">
                                                Select a Preferred Color
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                type={'color'}
                                                className="w-20 h-10 cursor-pointer"
                                                onChange={(e) => setColor(e.currentTarget.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex justify-around'>
                                        <div className='flex justify-center items-center mt-8'>
                                            <button
                                                type='button'
                                                className='w-36 h-12 bg-blue-900 rounded-lg flex justify-center items-center cursor-pointer'
                                                onClick={() => addCardDeckf && dispatch(addCardDeck(cardDeckObj))}
                                            >
                                                <p className='text-white'>Add Card Deck</p>
                                            </button>
                                        </div>
                                        <div className='flex justify-center items-center mt-8'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Popup>
            </div> */}
            <div className='w-full flex justify-center items-center'>
                <div className='container w-auto my-20 ml-20 mr-20'>
                    <div className="w-96 h-64 ring-offset-2 ring bg-white border-black border-dashed border-2 rounded-xl" onClick={() => setOpen(!open)}>
                        <div className="flex items-center justify-center h-full cursor-pointer">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                open ?
                    <div className='flex items-center justify-center' >
                        <div className="w-1/2 h-80 bg-white -mt-80 ring-2 rounded-xl">
                            <div className='divide-y-2 w-full  my-5'>
                                <div className='ml-5 flex justify-between'>
                                    <div>
                                        <p className='font-body text-lg text-gray-900 font-bold'>Add Your Card Deck</p>
                                    </div>
                                    <div className='mr-5 p-0.5 mb-1 cursor-pointer duration-700 ease-in-out hover:bg-blue-100'
                                        onClick={setClose}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='text-gray-900'>
                                            <path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div>
                                <div className='mx-5'>
                                    <div>
                                        <label for="first_name" className="block mb-0.5 ml-1 text-sm font-body text-gray-900">Card Deck Name</label>
                                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-1.5" placeholder="My Cards" required />
                                    </div>
                                </div>
                                <div className='mx-5 my-3'>
                                    <div>
                                        <label for="first_name" className="block mb-0.5 ml-1 text-sm font-body text-gray-900">Subject</label>
                                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-1.5" placeholder="Science" required />
                                    </div>
                                </div>

                                <div className='flex justify-around items-center'>
                                    <div className=''>
                                        <p className=" text-gray-900 text-sm font-body">
                                            Select a Preferred Color
                                        </p>
                                    </div>
                                    <div>
                                        <input
                                            type={'color'}
                                            className="w-20 h-10 cursor-pointer"
                                            onChange={(e) => setColor(e.currentTarget.value)}
                                        />
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <div className='flex justify-around'>
                                        <div className='w-48 h-10 bg-blue-900 rounded-md flex items-center justify-center focus:ring-1 focus:ring-blue-900 cursor-pointer'>
                                            <p className='font-body text-white'>Add Card</p>
                                        </div>
                                        <div className='w-48 h-10 bg-white border-blue-900 cursor-pointer border-solid border-2 rounded-md flex items-center justify-center hover:bg-red-500 hover:transition hover:duration-300 hover:ease-in hover:from-neutral-50 hover:border-white'
                                            onClick={setClose}
                                        >
                                            <p className='font-body text-blue-900 hover:text-white'>Cancel</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
        </>
    )
}

export default AddCard