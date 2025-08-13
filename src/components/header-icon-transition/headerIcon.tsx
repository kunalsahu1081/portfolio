import React, {useEffect, useState} from "react";
import styles from "./icon.module.scss";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {useLocation} from "react-router-dom";

export const GithubLink = React.memo(() => {

    const location = useLocation();
    const [color, setColor] = useState('black' );


    useEffect(() => {
        setColor(document.documentElement.style.getPropertyValue('--icon-color') == 'black' ? 'white' : 'black')

    }, [location.pathname]);

    return (
        <a
            target="_blank"
            href="https://github.com/kunalsahu1081"
            className={styles.headerIcon}
            style={{maxWidth: '100px'}}
            onMouseEnter={() => setColor(document.documentElement.style.getPropertyValue('--icon-color') == 'black' ? 'white' : 'black')}
            onMouseLeave={() => setColor(document.documentElement.style.getPropertyValue('--icon-color'))}
        >
            <FaGithub size={24} color={color}/>
            <p>github</p>
        </a>
    );
});

export const LinkedInIcon = React.memo(() => {

    const location = useLocation();
    const [color, setColor] = useState('black');

    useEffect(() => {
        setColor(document.documentElement.style.getPropertyValue('--icon-color') == 'black' ? 'white' : 'black')
    }, [location.pathname]);

    return (
        <a
            target="_blank"
            href="https://www.linkedin.com/in/kunal-sahu-2a8a49200/"
            className={styles.headerIcon}
            onMouseEnter={() => setColor(document.documentElement.style.getPropertyValue('--icon-color') == 'black' ? 'white' : 'black')}
            onMouseLeave={() => setColor(document.documentElement.style.getPropertyValue('--icon-color'))}
        >
            <FaLinkedin size={24} color={color}/>
            <p>linked in</p>
        </a>
    );
});

