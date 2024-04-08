import React, { useState } from 'react'
import card_img from './assets/card_img.png'
import profile from './assets/profile.png'
import play from './assets/play.png'

const cards = [
    {
        id: 1,
        imageSrc: card_img,
        tag: 'Company',
        title: "Here at RevenueCat, Employees are Customers To",
        description: "Sharing App building ideas with our Employee App Club",
        imageAlt: "Company",
        profileSrc: profile,
        name: "Will Taylor",
        date: "May 31, 2022"
    },
    {
        id: 2,
        imageSrc: card_img,
        tag: 'Growth',
        title: "Here at RevenueCat, Employees are Customers To",
        description: "Sharing App building ideas with our Employee App Club",
        imageAlt: "Growth",
        profileSrc: profile,
        name: "Will Taylor",
        date: "May 31, 2022"
    },
    {
        id: 3,
        imageSrc: card_img,
        tag: 'Engineering',
        title: "Here at RevenueCat, Employees are Customers To",
        description: "Sharing App building ideas with our Employee App Club",
        imageAlt: "Engineering",
        profileSrc: profile,
        name: "Will Taylor",
        date: "May 31, 2022"
    },
    {
        id: 4,
        imageSrc: card_img,
        tag: 'Company',
        title: "Here at RevenueCat, Employees are Customers To",
        description: "Sharing App building ideas with our Employee App Club",
        imageAlt: "Company",
        profileSrc: profile,
        name: "Will Taylor",
        date: "May 31, 2022"
    },
    {
        id: 5,
        imageSrc: card_img,
        tag: 'Engineering',
        title: "Here at RevenueCat, Employees are Customers To",
        description: "Sharing App building ideas with our Employee App Club",
        imageAlt: "Engineering",
        profileSrc: profile,
        name: "Will Taylor",
        date: "May 31, 2022"
    }
]

const Cards = () => {
    const [item, setItem] = useState(cards);

    const filterItem = (tag) => {
        if (tag === "all") {
            setItem(cards);
        } else {
            const filteredItems = cards.filter((card) => card.tag === tag);
            setItem(filteredItems);
        }
    };
    return (
        <>
            <div className="container mx-auto p-5">
                <div className="flex justify-between items-center max-md:flex-col text-gray-500 max-md:gap-y-4">
                    <div className="flex gap-5 font-semibold flex-wrap">
                        <button className='px-3 py-1 bg-green-300 text-black rounded-full' onClick={() => filterItem("all")}>All articles</button>
                        <button className='px-3 py-1 bg-green-300 text-black rounded-full' onClick={() => filterItem("Company")}>Company</button>
                        <button className='px-3 py-1 bg-green-300 text-black rounded-full'onClick={() => filterItem("Engineering")}>Engineering</button>
                        <button className='px-3 py-1 bg-green-300 text-black rounded-full'onClick={() => filterItem("Growth")}>Growth</button>
                    </div>
                    <div className="flex items-center">
                        <p>Follow for updates: </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="ml-3" href='/'>
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3" href='/'>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
                    {item.map((card) => (
                        <div key={card.id} className="border group relative rounded-xl">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-xl bg-gray-200 opacity-75 transition-opacity lg:aspect-none group-hover:opacity-100 lg:h-50">
                                <img
                                    src={card.imageSrc}
                                    alt={card.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 px-5">
                                <button className='rounded-full text-sm px-4 border-solid border-2 border-green-600 text-green-600'>{card.tag}</button>
                                <div className='py-2'>
                                    <h3 className="text-lg font-semibold">
                                        {card.title}
                                    </h3>
                                    <p className="mt-5 text-sm">{card.description}</p>
                                </div>
                                <div className="flex gap-6 pt-10 pb-5 items-center">
                                    <img src={profile} alt="profile" width={50} />
                                    <div className="flex flex-col">
                                        <h1 className=' font-medium'>{card.name}</h1>
                                        <p className='text-xs font-light'>{card.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="border group relative rounded-xl bg-black text-white">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border-b-8 border-green-800 rounded-b-full bg-gray-200 opacity-75 transition-opacity lg:aspect-none group-hover:opacity-100 lg:h-50">
                            <img
                                src={card_img}
                                alt=""
                                className="h-full w-full rounded-b-md object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 px-5">
                            <div className=' px-2 py-2'>
                                <h3 className="text-3xl font-semibold">The Sub Club Podcast</h3>
                                <p className="mt-5 text-lg">Interviews and deep dives with the experts behind the bigest app in the world.</p>
                            </div>
                            <button className="flex px-3 py-2 mt-10 mb-5 bg-green-300 items-center rounded-full gap-2">
                                <img src={play} alt="Play" width={20} className='rounded-full' />
                                <p className='text-black text-md font-semibold'>Listen</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards