import React from 'react'

import people from '../../assets/images/people.png'
import google from '../../assets/images/google.png'
import logo from '../../assets/images/logo.png'

const SignIn = () => {
  return (
    <>
      <div className="bg-[url('https://i.im.ge/2023/02/01/alJKyL.bg.jpg')] w-screen h-screen px-36 py-24" >
        <div className='w-full h-full bg-white'>
          <div className='grid grid-cols-2 w-full h-full'>
            <div className='flex items-center justify-center p-12 '>
              <div className='w-full h-full rounded-xl' >

                <div className='flex justify-end'>
                  <div className='flex -mt-10 items-center'>
                    <div className='mx-1'>
                      <p className='text-xs text-slate-400'>If you don't have an account</p>
                    </div>
                    <div className='mx-1'>
                      <div className='w-24 h-8 bg-white border-blue-900 border border-solid rounded-full flex items-center justify-center cursor-pointer hover:text-white hover:bg-blue-900 hover:duration-500 hover:ease-linear'>
                        <p className='text-xs'>Sign Up</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className='mt-4'>
                  <div>
                    <img src={logo} alt='logo'  className='w-10 h-10 rounded-md'/>
                  </div>
                  <div>
                    <p className='text-2xl font-semibold'>Welcome to FlashMemo</p>
                  </div>
                  <div>
                    <p className='font-medium text-slate-400'>Login to Your Account</p>
                  </div>
                </div>

                <div className='mt-28'>

                  <div>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke="white" stroke-width="0.5" fill='#ffffff' height="24" width="24"><path d="M12 20.575q-1.8 0-3.375-.662Q7.05 19.25 5.9 18.1q-1.15-1.15-1.812-2.725Q3.425 13.8 3.425 12q0-1.825.663-3.387Q4.75 7.05 5.9 5.9q1.15-1.15 2.725-1.813Q10.2 3.425 12 3.425q1.825 0 3.387.662Q16.95 4.75 18.1 5.9q1.15 1.15 1.813 2.713.662 1.562.662 3.387v.825q0 1.2-.812 1.987-.813.788-1.988.788-1.025 0-1.675-.513-.65-.512-.925-1.387-.525.825-1.212 1.362-.688.538-1.963.538-1.525 0-2.562-1.038Q8.4 13.525 8.4 12t1.038-2.575q1.037-1.05 2.562-1.05t2.575 1.05q1.05 1.05 1.05 2.575v.825q0 .875.613 1.512.612.638 1.537.638.925 0 1.55-.638.625-.637.625-1.512V12q0-3.25-2.35-5.6-2.35-2.35-5.6-2.35-3.25 0-5.588 2.35Q4.075 8.75 4.075 12q0 3.25 2.337 5.587Q8.75 19.925 12 19.925h4.975v.65Zm0-5.6q1.25 0 2.113-.862.862-.863.862-2.113t-.862-2.113Q13.25 9.025 12 9.025q-1.225 0-2.1.862-.875.863-.875 2.113 0 1.225.862 2.1.863.875 2.113.875Z" /></svg>
                      </span>
                      <input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 " placeholder="abc@gmail.com" />
                    </div>
                  </div>

                  <div className='my-2'>
                    <div class="flex">
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke="white" stroke-width="0.5" fill='#ffffff' height="24" width="24"><path d="M7.05 13.175q-.5 0-.837-.35-.338-.35-.338-.825 0-.5.338-.838.337-.337.837-.337.475 0 .825.35t.35.825q0 .5-.35.837-.35.338-.825.338Zm0 3.725q-2.025 0-3.462-1.438Q2.15 14.025 2.15 12q0-2.025 1.438-3.463Q5.025 7.1 7.05 7.1q1.5 0 2.725.837Q11 8.775 11.55 10.1h9.225l1.9 1.9-3.075 3.05-1.725-1.3-1.8 1.35-1.75-1.2H11.55q-.55 1.325-1.775 2.162-1.225.838-2.725.838Zm0-.925q1.45 0 2.488-.888 1.037-.887 1.337-2.112H14.6l1.45.975 1.85-1.325 1.65 1.225L21.4 12l-1-.975h-9.525q-.3-1.25-1.337-2.125Q8.5 8.025 7.05 8.025q-1.65 0-2.812 1.163Q3.075 10.35 3.075 12t1.163 2.812Q5.4 15.975 7.05 15.975Z" /></svg>
                      </span>
                      <input type="password" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 " placeholder="******" />
                    </div>
                  </div>

                  <div className='mt-10 flex justify-center items-center'>
                    <div className='flex items-center  justify-center w-96 h-10'>
                      <button className='bg-blue-900 h-full w-full rounded-3xl  hover:bg-yellow-400 hover:duration-500 hover:ease-linear '>
                        <div className='hover:text-black'>
                          <p className='text-white'>Login</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className='mt-5 flex justify-center items-center'>
                    <div className='flex items-center  justify-center w-96 h-10'>
                      <button className='bg-slate-300 w-full h-full rounded-3xl hover:bg-yellow-400 hover:duration-500 hover:ease-linear'>
                        <div className='flex items-center justify-center'>
                          <div className='w-5 h-5 mx-1'>
                            <img src={google} alt={"Google"} />
                          </div>
                          <div className='mx-1'>
                            <div>
                              <p>Login with Google</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="bg-[url('https://i.im.ge/2023/02/01/aruG8F.17973908.jpg')] flex-col items-center justify-center">
              <div className='flex items-center justify-center'>
                <div className=''>
                  <p className='font-quotes text-3xl mt-16'>Practice Make You Perfect</p>
                </div>
              </div>
              <div className=''>
                <img src={people} alt='adsd' className=''/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn