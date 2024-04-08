import React from 'react'
import card_img from './assets/card_img.png'
import profile from './assets/profile.png'

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
        tag: 'Company',
        title: "Here at RevenueCat, Employees are Customers To",
        description: "Sharing App building ideas with our Employee App Club",
        imageAlt: "Company",
        profileSrc: profile,
        name: "Will Taylor",
        date: "May 31, 2022"
    },
    {
        id: 3,
        imageSrc: card_img,
        tag: 'Company',
        title: "Here at RevenueCat, Employees are Customers To",
        description: "Sharing App building ideas with our Employee App Club",
        imageAlt: "Company",
        profileSrc: profile,
        name: "Will Taylor",
        date: "May 31, 2022"
    }
]

const Extra = () => {
    return (
        <>
            <div className="container mx-auto p-5">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
                    {cards.map((card) => (
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
                </div>
            </div>
        </>
    )
}

export default Extra