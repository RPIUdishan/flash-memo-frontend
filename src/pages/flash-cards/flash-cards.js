import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CardContainer from '../../components/flash-card/card-container'

const FlashCardsPage = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const returnToMain = () => {
    navigate('/')
  }

  return (
    <>
      <div className='w-full h-fit'>
        <div className='flex justify-end mr-10 my-10'>
          <div className='mx-2 flex justify-evenly items-center border-red-500 border-solid border w-48 h-10 hover:bg-red-500 hover:text-white rounded-lg hover:fill-white hover:duration-500 cursor-pointer'
            onClick={returnToMain}
          >
            <div className='mx-1'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M8.925 17.225 3.725 12l5.2-5.225.65.675L5.5 11.525h13.875v-3.95h.925v4.875H5.5l4.075 4.1Z" /></svg>
            </div>
            <div className='mx-1'>
              <p>Return </p>
            </div>
          </div>
          <div className='mx-2 flex justify-evenly items-center border-green-500 border-solid border w-48 h-10 hover:bg-green-500 hover:text-white rounded-lg hover:fill-white hover:duration-700 cursor-pointer'>
            <div className='mx-1'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M4.7 18.85q-.65 0-1.1-.437-.45-.438-.45-1.088V6.65q0-.625.45-1.075.45-.45 1.1-.45h14.6q.65 0 1.1.45.45.45.45 1.075v4.475H4.075v6.2q0 .225.188.425.187.2.437.2h8.425v.9Zm-.625-9.975h15.85V6.65q0-.225-.187-.412-.188-.188-.438-.188H4.7q-.25 0-.437.188-.188.187-.188.412ZM19.55 21.45v-3h-3v-.925h3v-3h.925v3h3v.925h-3v3Zm-15.475-3.5V6.05v11.9Z" /></svg>
            </div>
            <div className='mx-1'>
              <p>Add</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-10'>
        <div>
          <div>
            <div>
              <p className='text-3xl font-body font-medium text-slate-800'>My Card Deck</p>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-md font-light text-slate-800'>Subject</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className='hover:fill-red-500 hover:duration-500 cursor-pointer' height="24" width="24"><path d="M7.65 19.85q-.625 0-1.075-.45-.45-.45-.45-1.1V6.05H5.15v-.925h3.875v-.75h5.95v.75h3.9v.925H17.9V18.3q0 .65-.45 1.1-.45.45-1.1.45Zm9.325-13.8H7.05V18.3q0 .275.175.45t.425.175h8.7q.225 0 .425-.187.2-.188.2-.438Zm-7.1 10.9h.925V8.025h-.925Zm3.325 0h.925V8.025H13.2ZM7.05 6.05v12.875-.625Z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-screen h-fit'>
        <div className='flex item-center justify-center'>
          <div className='flex-col'>
            <div className='bg-blue-900 w-fit h-fit py-0.2 px-1 rounded-tl-md rounded-tr-md'>
              <p className='font-body text-white'>Select Your Way to Memorize</p>
            </div>

            <div className='border border-solid border-black mb-1 rounded-md px-96 py-5 rounded-tl-none hover:bg-[#2596be] hover:border-[#2596be] hover:border hover:border-solid hover:duration-500 hover:text-white cursor-pointer'>
              <p className='font-body text-lg'>One by One Cards</p>
            </div>
            <div className='border border-solid border-black mt-1 rounded-md px-96 py-5 rounded-tl-none hover:bg-[#2596be] hover:border-[#2596be] hover:border hover:border-solid hover:duration-500 hover:text-white cursor-pointer'>
              <p className='font-body text-lg'>Random Card</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <CardContainer />
      </div>
    </>
  )
}

export default FlashCardsPage  