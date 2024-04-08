import React from 'react'
import profile from './assets/profile.png'

const Casestudy = () => {
    return (
        <>
            <div className="flex p-10 md:flex-row flex-col bg-black text-white my-5">
                <div className="w-full mx-auto flex flex-col px-20 justify-center max-md:px-2">
                    <h1 className='text-4xl font-semibold'>Ready to get started?</h1>
                    <div className="flex gap-3 py-5 max-md:flex-col">
                        <button className='bg-blue-600 top-2 text-white px-4 py-2 rounded-full'>SIGN UP FOR FREE</button>
                        <button className='border-b-4 border-stone-800'>TALK TO SALES</button>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-4/5 border rounded-xl p-5 max-md:w-full">
                        <div className='py-2'>
                            <h1 className="text-lg font-semibold">"At any level of scale, RevenueCat just works."</h1>
                        </div>
                        <div className="flex gap-6 py-5 items-center max-md:flex-col">
                            <img src={profile} alt="profile" width={50} className='rounded-full' />
                            <h1 className=' font-xs'>David Smith</h1>
                        </div>
                        <button className='border-b-4 border-stone-800'>READ CASE STUDY</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Casestudy