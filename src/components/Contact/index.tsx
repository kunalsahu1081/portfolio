import styles from "../projects/index.module.scss";
import styles2 from './index.module.scss';
import {LinkButton} from "../tech-stack/stackButton.tsx";
import {useEffect} from "react";

const Contact = () => {

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(document.getElementById('contact'));

    }, []);

    return <>

        <section id={'contact'} className={styles.PSection}>

            <div className={styles.pHeader}>

                Contact

            </div>

            <div className={styles2.contactCard} >

                <div className={styles2.message} >

                    Dear Visitor, I’m currently open to both full-time roles and freelance opportunities. Feel free to reach out to me via email or connect with me on LinkedIn.

                </div>

                <div className={styles2.contactOptions} >

                    <LinkButton to={'mailto:kunalsahu1081@gmail.com'}>
                        kunalsahu1081@gmail.com
                    </LinkButton>

                    <LinkButton to={'tel:+916232652579'}>
                        6232652579
                    </LinkButton>

                    <LinkButton to={'https://www.linkedin.com/in/kunal-sahu-2a8a49200/'} >
                        LinkedIn
                    </LinkButton>

                </div>

            </div>

        </section>

    </>

}

export default Contact;