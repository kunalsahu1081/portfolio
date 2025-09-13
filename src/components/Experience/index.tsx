import styles from './index.module.scss'
import {useEffect} from "react";

const Experience = () => {


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

                <img src={'/project-images/exp1.png'} className={styles.bannerSection}>


                </img>

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
                </div>


            </div>


        </section>

    </>

}

export default Experience;