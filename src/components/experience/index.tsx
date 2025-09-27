import styles from './index.module.scss'
import React, {useEffect} from "react";
import StackButton, {LinkButton} from "../tech-stack/stackButton.tsx";

const Experience = () => {

    const [width, setWidth] = React.useState(null);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(document.getElementById('experience'));

    }, []);


    return <>

        <section id={'experience'} className={styles.experienceSection}>


            <div className={styles.experienceTitle}>
                Experience
            </div>

            <div className={styles.overLay}/>

            <div className={styles.experienceCard}>

                <img src={'/project-images/exp1.png'} className={styles.bannerSection}/>

                <div className={styles.descriptionSection}>

                    <div className={styles.descriptionHeader}>
                        <div className={styles.companyName}>
                            LocalWell
                        </div>

                        <div className={styles.timeline}>
                            April 2023 - Present
                        </div>
                    </div>

                    <ul>

                        <li>
                            Built and scaled B2B SaaS apps with Next.js, Express, PostgreSQL, and reusable high-performance components.
                        </li>
                        <li>
                            Optimized a React Native app (v0.72 → v0.77), cutting heap size by 120MB and doubling navigation FPS.
                        </li>
                        <li>
                            Integrated Vision Camera + MLKit for OCR-based product data capture from documents/images.

                        </li>
                        <li>
                            Automated data imports using AWS Textract for invoices, stock, and purchase files.

                        </li>
                        <li>
                            Built real-time order notifications and campaign utilities across TWA & mobile apps.
                        </li>
                        <li>
                            Implemented virtualized UI components for smooth rendering of reports & transactions.
                        </li>
                        <li>
                            Worked on auth, subscription, and event-driven RabbitMQ workflows for reliable order processing.
                        </li>

                    </ul>


                    <div style={{display: 'flex', justifyContent: 'end', gap: '20px', marginTop: '20px', marginRight: '20px'}}>

                        {width > 900 ? <LinkButton to={'https://partners.localwell.in'}>
                            Website
                        </LinkButton> : null}

                        <LinkButton to={'https://play.google.com/store/apps/details?id=com.localwell&hl=en_IN&pli=1'}>
                            App
                        </LinkButton>

                    </div>


                </div>


            </div>


        </section>

    </>

}

export default Experience;