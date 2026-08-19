import {useState} from 'react';
import icon from '../images/icon.png'

export default function Header(){
    const resumLink = "https://drive.google.com/uc?export=download&id=1GeEOFPqewsdrNmGvwXFQIrldhEDI_bXP";
    //https://drive.google.com/file/d/1GeEOFPqewsdrNmGvwXFQIrldhEDI_bXP/view?usp=sharing

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="header-container">
            <img src={icon} alt="Logo" className="logo not_rotating-animation" loading="lazy" ></img>
            
            <div className='top-right-corner'>
            <button onClick={() => window.open(resumLink, "_blank")} className="download-button" aria-label="Download Resume in a new tab">Resume ⤓</button>
        
            <nav className="navdiv" aria-label="Main Navigation">
                <button onClick={() => setIsOpen((!isOpen))} className="navOpenButton" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="navigation-overlay">
                    <i className="fa-solid fa-grip-lines"></i>
                </button>
                {isOpen && (
                    <div className="watermark  cover-right">
                    <div className="overlay cover-right">
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks" aria-label="Close navigation menu"><i className="fa-solid fa-xmark" aria-hidden="true"></i></button>
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><a href="#about">About</a></button>
                        <button onClick={() => window.open(resumLink, "_blank")} className="navlinks" rel="noreferrer" aria-label="Download Resume in a new tab">Resume ⤓</button>
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><a href="#skills">Skills</a></button>
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><a href="#projects">Projects</a></button>
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><a href="#experience">Experience</a></button>
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><a href="#certificates">Certificates</a></button>
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><a href="#contact">Contact</a></button>
                    </div>
                    </div>
                )}
            </nav>
            </div>
        </div>
    )
}
