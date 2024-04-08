import React from 'react'
import name from '../assets/name.png'

const Header = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
                        <img src={name} alt="" />
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap font-medium items-center text-base justify-center">
                        <select name="product" className='mr-5 hover:text-gray-900' id="product-select">
                            <option value="">Product</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                        </select>
                        <select name="docs" className='mr-5 hover:text-gray-900' id="docs-select">
                            <option value="">Docs</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                        </select>
                        <a className="mr-5 hover:text-gray-900" href='/'>Customers</a>
                        <a className="mr-5 hover:text-gray-900" href='/'>Pricing</a>
                        <a className="mr-5 hover:text-gray-900" href='/'>Blog</a>
                    </nav>
                    <div className="inline-flex items-baseline gap-5">
                        <button className="font-semibold border-b-2 border-gray-700 text-base mt-4 md:mt-0">LOGIN</button>
                        <button className='btn px-5 py-2 bg-blue-600 rounded-full text-white font-semibold' href="/sign-up">SIGN UP</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header