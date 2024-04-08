import React from 'react'
import name from '../assets/name.png'

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-60 h-80 grid grid-cols-1 content-between max-md:h-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href='/'>
              <img src={name} alt="" />
            </a>
            <div className="max-md:hidden">
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="ml-3" href='/'>
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3" href='/'>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-8 h-8" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
              <p className="text-xs text-center sm:text-left">© 2022 RevenueCat
              </p>
            </div>

          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resource</h2>
              <nav className=" flex flex-col gap-5 list-none my-5">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>About Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Blog</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Careers</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Contact</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Customer</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Help Center</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Podcast</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Documentation</h2>
              <nav className=" flex flex-col gap-5 list-none my-5">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Quick Start</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>System Status</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>SDKs</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>API References</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Sample Apps</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Migration Guide</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>View All Docs</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resource</h2>
              <nav className=" flex flex-col gap-5 list-none my-5">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Why RevenueCat?</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Integrations</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>For Engineering Team</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>For Marketing Team</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>For Product Team</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Apple Receipt Checker</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Pricing</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Legal</h2>
              <nav className=" flex flex-col gap-5 list-none my-5">
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Privacy Policy</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Terms & Conditions</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>GDPR</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800" href='/'>Fair Billing Policy</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer