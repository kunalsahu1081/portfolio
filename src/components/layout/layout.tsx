import PHeader from "../header/header";
import {NavMenu, NavMenuItem} from "../header/headerMenu.tsx";

import React, {useEffect, useState} from 'react';

const PLayout = () => {

    const [isMobile, setIsMobile] = useState(false);

    const updateSize = () => {
        const size = window.innerWidth;

        if (size < 1024) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", updateSize);

        return () => {
            window.removeEventListener("resize", updateSize);
        }
    }, [])

    return (
        <>
            {!isMobile ? <PHeader>

                <PHeader.title>K</PHeader.title>

                <NavMenu>

                    <NavMenuItem title="About" to="about"/>
                    <NavMenuItem title="Experience" to="experience"/>
                    <NavMenuItem title="Projects" to="projects"/>
                    <NavMenuItem title="Contact" to="contact"/>
                    <NavMenuItem title="Resume" to="/kunal_sahu_resume.pdf"/>

                </NavMenu>


            </PHeader> : <MobileHeader />}
        </>
    );
};



const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <PHeader.title>K</PHeader.title>

                {/* Desktop Navigation */}
                <nav className={`nav-menu ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#about" onClick={closeMenu}>About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#experience" onClick={closeMenu}>Experience</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" onClick={closeMenu}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" onClick={closeMenu}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="/kunal_sahu_resume.pdf" onClick={closeMenu}>Resume</a>
                        </li>
                    </ul>

                </nav>

                {/* Hamburger Menu */}
                <button
                    className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div
                    className="menu-overlay"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}
        </header>
    );
};



export default PLayout;
