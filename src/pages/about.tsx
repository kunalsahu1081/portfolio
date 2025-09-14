import React, {useEffect} from "react";
import "../styles/about.css";
import {changeTheme, ThemeType} from "../utils/changeTheme.ts";
import TechStack from "../components/tech-stack";
import Experience from "../components/Experience";
import Projects from "../components/projects";

const About = () => {


    useEffect(() => {
        changeTheme(ThemeType.light);
    }, []);

    return (
        <>
            <div className="aboutText">
                Hi, my name is,

                <div className="aboutName">
                    Kunal Sahu
                </div>

                <div className='aboutDesctiption'>
                    I’m a full-stack developer with <span>2.5+</span> years of experience in building <br/> Fast, Scalable, and user-friendly applications.
                    From sleek web platforms to powerful mobile apps, <br/> I turn ideas into seamless digital experiences.
                    Passionate about clean code and modern design.
                </div>

            </div>

            <TechStack />

            <Experience />

            <Projects />

            <div style={{height: '100vh'}}></div>
        </>
    );
};

export default React.memo(About);
