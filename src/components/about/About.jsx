import React from 'react'
import { Button } from '../button/Button'
import './About.css'
function About() {
    return <section className="about">
        <div className="about-text">
            <h2 className='heading'>About</h2>            
            {/* <p><hr/></p> */}
            <p className='para1'>I am a Nigerian based UI/UX Designer, Front-end and Mobile Developer.</p>
            <p className='para2'>For the past few years I have been building awesome digital projects mostly for myself 😉 and clients, I am a goal-driven person who ensures client satisfaction while advising them on the proper step to take to achieve more productivity in their businesses.</p>
            <Button className='btn'>Contact Me</Button>
        </div>    
        <div className="skills-part">
            <h2 className='skills'>Skills</h2>
            <p className='skills-p'>CSS</p>
            <p className='skills-p'>Figma(Design Tool)</p>
            <p className='skills-p'>Firebase</p>
            <p className='skills-p'>Flutter</p>
            <p className='skills-p'>HTML</p>
            <p className='skills-p'>Javascript(ES6)</p>
            <p className='skills-p'>React.js</p>
        </div>
    </section>
    
}




export default About