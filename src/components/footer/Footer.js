import React from "react";
import './Footer.css'


function Footer() {
    let d = new Date();
    
    return <footer className='footer'>
        <p className='foo'> Every Inch designed and developed by me <a href="mailto:olatohdimeji16@gmail.com" className='twit'>Mustapha Abdullah</a></p>
        <p className="foo">"Every of your dream can come to fuition"</p>
        <p className='foo'> &copy; {d.getFullYear()}, MA</p>

    </footer>
    
}


export default Footer