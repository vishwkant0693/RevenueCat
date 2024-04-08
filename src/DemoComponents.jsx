import React from 'react'
import Cards from './Cards'
import Hero from './Hero'
import Extra from './Extra'
import Subscribe from './Subscribe'
import Casestudy from './Casestudy'
import Pagination from './components/Pagination'



const DemoComponents = () => {
    return (
        <>
            <section className="body-font">
                <Hero />
                <Cards />
                <Hero />
                <Extra />
                <Subscribe />
                <Extra />
                <Pagination />
                <Casestudy />
            </section>
        </>
    )
}

export default DemoComponents