import React from 'react'
import CardItems from './CardItems'
import './portfolio.css'

function Portfolio() {
    return <section className='portfolio'>
        <h2 className='portheading'>Portfolio</h2>
        <div className="container">
            {CardItems.map((item, index) => {
                return (
                    <div className="in-container" key={index}>
                        <img className='in-img' src={item.src} alt="Product" />
                        <h3 className="in-header">{item.title}</h3>
                        <hr/>
                        <p className="in-para">{item.para}</p>
                        <span className="in-nav"><a href={item.nav}>{item.status}</a></span>
                    </div>
                )
            })}

        </div>

    </section>

}

export default Portfolio