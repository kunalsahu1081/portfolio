import styles from "./index.module.scss";
import React, {useEffect} from "react";
import {LinkButton} from "../tech-stack/stackButton.tsx";


const OtherProjects = () => {

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(document.getElementById('project2'));

    }, []);

    return <>

        <section id={'project2'} className={styles.PSection}>

            <div className={styles.pHeader}>
                Other Notable Projects
            </div>

            <div className={styles.OProjectContainer} >

                <OtherProjectCard url={'/project-images/project-3.png'} title={'Snake And Ladder'} github={'https://github.com/kunalsahu1081/SnakeandLadder'} netlify={'https://snakeandladdergame.netlify.app/'} />

                <OtherProjectCard url={'/project-images/project-4.png'} title={'Comment Widget'} github={'https://github.com/kunalsahu1081/comment-widget'} netlify={'https://comment-widget-2.netlify.app/'} />
                {/*<OtherProjectCard />*/}

                {/*<OtherProjectCard />*/}

            </div>

        </section>

    </>

}


const OtherProjectCard = ({url, netlify, github, title }) => {

    const [width, setWidth] = React.useState(null);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return <>

        <div className={styles.OCard} >

            <img src={url} className={styles.OCardImage} />

            <div className={styles.ODescription} >

                <div className={styles.Otitle} >
                    {title}
                </div>

                <div className={styles.Obuttons} >

                    {netlify && width > 900 ? <LinkButton style={{padding: '4px 16px'}} to={netlify}>
                        Netlify
                    </LinkButton> : null}

                    {github ? <LinkButton style={{padding: '4px 16px'}} to={github}>
                        Github
                    </LinkButton> : null}

                </div>

            </div>

        </div>

    </>
}

export default OtherProjects;