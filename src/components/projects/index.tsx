import styles from './index.module.scss'
import ProjectLeft from "./projectLeft.tsx";
import {useEffect} from "react";
import ProjectRight from "./projectRight.tsx";

const Projects = () => {

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(document.getElementById('projects'));

    }, []);

    return <>

        <section id={'projects'} className={styles.PSection}>

            <div className={styles.pHeader}>
                Projects
            </div>

            <ProjectLeft />

            <ProjectRight />

        </section>

    </>

}

export default Projects;