import React from 'react'
import hero_img from './assets/hero_img.png'
import profile from './assets/profile.png'

const Hero = () => {
    return (
        <>
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:max-w-fit lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={hero_img} />
                </div>
                <div className="lg:flex-grow md:w-1/2 w-5/6 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <button className=' rounded-full px-3 py-1 border-solid border-2 border-green-600 text-green-600'>Latest Post</button>
                    <h1 className="title-font sm:text-4xl text-3xl mt-3 mb-4 font-bold text-gray-900"> A Practical Guide to Apple Search Ads
                    </h1>
                    <p className="mb-8 leading-relaxed">Why it's a channel worth exploring to grow your app.</p>
                    <div className="flex justify-center gap-6">
                        <img src={profile} alt="profile" width={50} />
                        <div className="flex flex-col">
                            <h1 className=' font-medium'>Thomas Petit</h1>
                            <p className=' font-light'>June 20, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero