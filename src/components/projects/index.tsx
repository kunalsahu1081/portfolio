import styles from './index.module.scss'
import ProjectLeft from "./projectLeft.tsx";
import {useEffect} from "react";

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

        observer.observe(document.getElementById('project'));

    }, []);

    return <>

        <section id={'project'} className={styles.PSection}>

            <div className={styles.pHeader}>
                Projects
            </div>

            <ProjectLeft />

        </section>

    </>

}

export default Projects;