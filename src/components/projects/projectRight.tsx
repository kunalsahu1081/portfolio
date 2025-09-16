import styles from './index.module.scss'
import {LinkButton} from "../tech-stack/stackButton.tsx";
import React from "react";


const ProjectRight = () => {

    return <>

        <div className={styles.projectCard}>

            <div className={styles.descriptionSection}>

                <div className={styles.projectTitle}>
                    Draw and Extrude
                </div>

                <div style={{right: '-40px'}} className={styles.projectDescription}>
                    A WebGL project to draw 2d shapes and extrude it to 3d webgl graphics. Made with Next.js and WebGL
                </div>

                <div className={styles.projectStack}>

                    <div className={styles.stackValue}>Next.js</div>
                    <div className={styles.stackValue}>WebGL</div>
                    <div className={styles.stackValue}>Typescript</div>

                </div>

                <div className={styles.projectLinks}>

                    <LinkButton to={'https://3ddraw.netlify.app/'}>
                        Netlify
                    </LinkButton>

                    <LinkButton to={'https://github.com/kunalsahu1081/webgl-practice'}>
                        Github
                    </LinkButton>


                </div>

            </div>

            <img  className={styles.projectImage} src={'/project-images/project-2.png'} alt={''}/>

        </div>

    </>

}

export default ProjectRight;