import React, { useState } from 'react'
import { useCreateCardDeckMutation } from '../../features/cardDeckApiSlice';
import HashLoader from "react-spinners/HashLoader";

const AddCard = () => {

    const [deckName, setDeckName] = useState("");
    const [subject, setSubject] = useState("");
    const [color, setColor] = useState("");


    const [createCardDeck] = useCreateCardDeckMutation();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);



    const postCardDeck = async () => {

        let data = {
            title: deckName,
            subject: subject,
            color: color,
            noOfCards: 25
        }

        setLoading(true)
        try {

            if (!data) return {}
            await createCardDeck(data).unwrap()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
       window.location.reload(false);
    }

    const setClose = () => {
        setOpen(false)
    }


    return (
        <>

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
                                        <label htmlFor="first_name" className="block mb-0.5 ml-1 text-sm font-body text-gray-900">Card Deck Name</label>
                                        <input
                                            type="text"
                                            id="deckName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-1.5"
                                            placeholder="My Cards"
                                            required
                                            onChange={(e) => setDeckName(e.currentTarget.value)}
                                        />
                                    </div>
                                </div>
                                <div className='mx-5 my-3'>
                                    <div>
                                        <label htmlFor="first_name" className="block mb-0.5 ml-1 text-sm font-body text-gray-900">Subject</label>
                                        <input
                                            type="text"
                                            id="deckSubject"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-1.5"
                                            placeholder="Science"
                                            required
                                            onChange={(e) => setSubject(e.currentTarget.value)}
                                        />
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
                                            id='deckColor'
                                            className="w-20 h-10 cursor-pointer"
                                            onChange={(e) => setColor(e.currentTarget.value)}
                                        />
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <div className='flex justify-around'>
                                        <div
                                            className='w-48 h-10 bg-blue-900 rounded-md flex items-center justify-center focus:ring-1 focus:ring-blue-900 cursor-pointer'
                                            onClick={postCardDeck}
                                        >
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
                            {
                                loading ?
                                    <div className='w-full h-fit flex items-center justify-center my-5'>
                                        <HashLoader
                                            color="#36d7b7"
                                        />
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                    :
                    null
            }
        </>
    )
}

export default AddCard
