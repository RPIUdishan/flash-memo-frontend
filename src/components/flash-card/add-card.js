import React from 'react'

const AddCard = () => {
    return (
        <>
            <div className='fixed inset-0 bg-opacity-30 backdrop-blur-md flex justify-center items-center'>
                <div className='w-1/2 h-auto divide-y-2 rounded-lg bg-white ring-2 pb-4'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='py-2 mx-2 font-body text-xl font-bold text-slate-900'>Add a Flash Card</p>
                        </div>
                        <div className='mr-1'>
                            <div className='hover:bg-blue-400 hover:duration-700 rounded-md cursor-pointer p-0.5 hover:fill-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-center mt-5'>
                            <label className='text-xs'>Your Question</label>
                            <input
                                type="text"
                                id="question"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-4/5 p-1.5 mx-5"
                                placeholder="Who has the crown in 1990 ?"
                                required
                            />
                        </div>
                        <div className='flex items-center justify-center my-5'>
                            <table class="table-auto border-separate border-spacing-2 border border-white border-spacing-4">
                                <thead className='my-2'>
                                    <tr>
                                        <th className='text-xs font-normal'>#</th>
                                        <th className='text-xs font-normal'>Answer</th>
                                        <th className='text-xs font-normal'>Correctness <br /> (is answer correct put a tick on the checkbox)</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    <tr className="mt-2">
                                        <td>01</td>
                                        <td>
                                            <input
                                                type="text"
                                                id="question"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-52 p-1.5 mx-5"
                                                placeholder="answer 1"
                                                required
                                            />
                                        </td>
                                        <td className='flex items-center justify-center'>
                                            <input
                                                id="inline-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        </td>
                                    </tr>
                                    <tr className="mt-2">
                                        <td>02</td>
                                        <td>
                                            <input
                                                type="text"
                                                id="question"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-52 p-1.5 mx-5"
                                                placeholder="answer 2"
                                                required
                                            />
                                        </td>
                                        <td className='flex items-center justify-center'>
                                            <input
                                                id="inline-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        </td>
                                    </tr>
                                    <tr className="mt-2">
                                        <td>03</td>
                                        <td>
                                            <input
                                                type="text"
                                                id="question"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-52 p-1.5 mx-5"
                                                placeholder="answer 3"
                                                required
                                            />
                                        </td>
                                        <td className='flex items-center justify-center'>
                                            <input
                                                id="inline-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        </td>
                                    </tr>
                                    <tr className="mt-2">
                                        <td>04</td>
                                        <td>
                                            <input
                                                type="text"
                                                id="question"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-52 p-1.5 mx-5"
                                                placeholder="answer 4"
                                                required
                                            />
                                        </td>
                                        <td className='flex items-center justify-center'>
                                            <input
                                                id="inline-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='flex justify-end'>
                            <div className='w-40 h-fit bg-white border border-red-500 hover:bg-red-500 hover:text-white hover:duration-700 cursor-pointer border-solid py-2 mx-2 flex items-center justify-center rounded-md'>
                                <p className=' font-body text-md '>Cancel</p>
                            </div>
                            <div className='w-40 h-fit bg-blue-400 py-2 mx-2 flex items-center justify-center rounded-md cursor-pointer'>
                                <p className='text-white font-body text-md '>Add</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCard