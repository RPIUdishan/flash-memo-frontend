import React from 'react'

const Card = () => {
    return (
        <>
            <div className='container w-auto  my-20 ml-20 mr-20'>
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
        </>
    )
}

export default Card