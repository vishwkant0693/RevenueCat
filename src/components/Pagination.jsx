import React from 'react'

const Pagination = () => {
    return (
        <>
            <div class="container mx-auto flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                <div class="w-full flex items-center justify-between">
                    <div class="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                    </div>
                    <div class="sm:flex hidden gap-2">
                        <p class="text-sm font-medium rounded-full leading-none cursor-pointer text-gray-600 hover:bg-green-300 py-2 px-3 bg-green-300">1</p>
                        <p class="text-sm font-medium rounded-full leading-none cursor-pointer text-gray-600 hover:bg-green-300 py-2 px-3">2</p>
                        <p class="text-sm font-medium rounded-full leading-none cursor-pointer text-gray-600 hover:bg-green-300 py-2 px-3">...</p>
                        <p class="text-sm font-medium rounded-full leading-none cursor-pointer text-gray-600 hover:bg-green-300 py-2 px-3">8</p>
                    </div>
                    <div class="flex items-center pt-3 text-gray-600 hover:text-green-700 cursor-pointer">
                        <p class="text-sm font-medium leading-none mr-3">Next</p>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Pagination