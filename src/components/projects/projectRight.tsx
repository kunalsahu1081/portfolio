import styles from './index.module.scss'
import {LinkButton} from "../tech-stack/stackButton.tsx";
import React, {useEffect} from "react";


const ProjectRight = () => {

    const [width, setWidth] = React.useState(null);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return <>

        <div style={{marginBottom: 0}} className={styles.projectCard}>
            {width <= 900 ? <img className={styles.projectImage} src={'/project-images/project-2.png'} alt={''}/> : null}

            <div className={styles.descriptionSection}>



                <div className={styles.projectTitle}>
                    Draw and Extrude
                </div>

                <div style={{left:(width > 900 ? '-40px' : null)}} className={styles.projectDescription}>
                    A WebGL project to draw 2d shapes and extrude it to 3d webgl graphics. Made with Next.js and WebGL
                </div>

                <div className={styles.projectStack}>

                    <div className={styles.stackValue}>Next.js</div>
                    <div className={styles.stackValue}>WebGL</div>
                    <div className={styles.stackValue}>Typescript</div>

                </div>

                <div className={styles.projectLinks}>

                    {width > 900 ? <LinkButton to={'https://3ddraw.netlify.app/'}>
                        Netlify
                    </LinkButton> : null}

                    <LinkButton to={'https://github.com/kunalsahu1081/webgl-practice'}>
                        Github
                    </LinkButton>


                </div>

            </div>

            {width > 900 ? <img className={styles.projectImage} src={'/project-images/project-2.png'} alt={''}/> : null}

        </div>

    </>

}

export default ProjectRight;