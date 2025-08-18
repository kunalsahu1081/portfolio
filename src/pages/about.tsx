import React, {useEffect} from "react";
import "../styles/about.css";
import {changeTheme, ThemeType} from "../utils/changeTheme.ts";
import ExperienceScroll from "../components/projects/experience-scroll.tsx";

const About = () => {


    useEffect(() => {
        changeTheme(ThemeType.light);
    }, []);

    return (
        <>
            <div className="aboutText">
                Full-stack developer with 2+ years of experience delivering
                scalable web and mobile applications. Proficient in React, React
                Native, Node.js, Express, and PostgreSQL.
            </div>

            <ExperienceScroll />

            <div style={{height: '100vh'}}></div>
        </>
    );
};

export default React.memo(About);
