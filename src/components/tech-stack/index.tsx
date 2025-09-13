import styles from './index.module.scss'
import StackButton from "./stackButton.tsx";
import React from "react";


const TechStack = () => {


    return <>


        <section className={styles.stackContainer}>

            <div className={styles.stackHeader}>
                Tech Stack
            </div>

            <div className={styles.experienceRow}>

                <StackButton>
                    React.js
                </StackButton>

                <StackButton>
                    React Native
                </StackButton>

                <StackButton>
                    Node.js
                </StackButton>

                <StackButton>
                    Express
                </StackButton>

                 <StackButton>
                    PostgreSQL
                </StackButton>
            </div>

            <div className={styles.experienceRow}>

                <StackButton>
                    RabbitMQ
                </StackButton>

                <StackButton>
                    GraphQL
                </StackButton>

                <StackButton>
                    Next.js
                </StackButton>

                <StackButton>
                    Typescript
                </StackButton>

            </div>

        </section>


    </>


}

export default TechStack