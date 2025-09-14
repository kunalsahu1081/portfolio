import styles from './index.module.scss'
import {LinkButton} from "../tech-stack/stackButton.tsx";
import React, {useEffect} from "react";


const ProjectLeft = () => {

    return <>

        <div className={styles.projectCard}>

            <img className={styles.projectImage} src={'/project-images/project-1.png'} alt={''} />

            <div className={styles.descriptionSection}>

                <div className={styles.projectTitle}>
                    Text Editor
                </div>

                <div className={styles.projectDescription} >
                    A minimal Text Editor Build on Lexical, with rich text Editing Features like Lists, Checkbox and more Keyboard Control, Available on npm
                </div>

                <div className={styles.projectStack}>

                    <div className={styles.stackValue}>React</div>
                    <div className={styles.stackValue}>Lexical</div>
                    <div className={styles.stackValue}>Vite</div>
                    <div className={styles.stackValue}>Typescript</div>

                </div>

                <div className={styles.projectLinks} >

                    <LinkButton to={'https://github.com/kunalsahu1081/wysiwyg-editor'}>
                        Github
                    </LinkButton>

                    <LinkButton to={'https://github.com/kunalsahu1081/wysiwyg-editor'}>
                        npm
                    </LinkButton>

                </div>

            </div>

        </div>

    </>

}

export default ProjectLeft;