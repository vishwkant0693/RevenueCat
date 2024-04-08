import React from 'react'

const Subscribe = () => {
    return (
        <>
            <div className=" bg-slate-200">
                <div className="w-4/5 mx-auto flex flex-wrap p-5 flex-row max-md:flex-col items-center">
                    <div className="w-1/2 max-md:w-full py-2">
                        <div className="rounded-lg overflow-hidden">
                            <h1 className='text-2xl font-semibold'>Subscribe to our monthly newsletter</h1>
                        </div>
                    </div>
                    <div className="w-1/2 max-md:w-full py-2">
                        <div className="rounded-lg overflow-hidden">
                            <div className="relative">
                                <div className="w-full">
                                    <input type="text" id="full-name" name="full-name" placeholder='Your email address...' className="w-full py-3 px-6 bg-gray-100 bg-white bg-opacity-50 rounded-full drop-shadow-xl border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <button className='absolute right-5 bg-blue-600 top-2 text-white px-4 py-2 rounded-full'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe