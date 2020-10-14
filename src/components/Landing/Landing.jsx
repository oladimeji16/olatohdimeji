import React from 'react'
import {Button} from '../button/Button'
import './Landing.css'
import me from './images/me.png' 


function Landing() {

    return <section className='section'>
        <div className='landing-text'>
        <h1 className='landing-header'><strong>UX/UI Designer, Front-End & Mobile Developer from Lagos, Nigeria.</strong></h1>
        <p className='landing-para'>
        Hi there, I am <strong>MUSTAPHA ABDULLAH OLADIMEJI</strong>, I Design and Build intuitive and user-friendly interfaces.
        </p>
        <Button className="btn">Learn More</Button>
        </div>
        <div className="img">
            <img src={me} alt="Me" className='img'/>
        </div>
    </section>
    
}


export default Landing
