import React from "react";
import "../styles/about.css";

const About = () => {
    return (
        <>
            <div className="aboutText">
                Full-stack developer with 2+ years of experience delivering
                scalable web and mobile applications. Proficient in React, React
                Native, Node.js, Express, and PostgreSQL.
            </div>
        </>
    );
};

export default React.memo(About);
