import React from 'react'
import './About.css'
function About() {
    return <section className="about">
        <div className="about__text">
            <h2 className='about__heading'>About</h2>            
            <p className='about__para1'>I am a Nigerian based UI/UX Designer, Front-end and Mobile Developer.</p>
            <p className='about__para2'>For the past few years I have been building awesome digital projects mostly for myself <span aria-label='wink' role='img'>😉</span> and clients, I am a goal-driven person who ensures client satisfaction while advising them on the proper step to take to achieve more productivity in their businesses.</p>
        </div>
        <hr/>  
        <div className="about__skillsPart">
            <h2 className='about__skills'>Skills</h2>
            <p className='about__skills-p'>CSS</p>
            <p className='about__skills-p'>Figma(Design Tool)</p>
            <p className='about__skills-p'>Firebase</p>
            <p className='about__skills-p'>Flutter</p>
            <p className='about__skills-p'>HTML</p>
            <p className='about__skills-p'>Javascript(ES6)</p>
            <p className='about__skills-p'>React.js</p>
        </div>
        
    </section>
    
}




export default About