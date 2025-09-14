import React from "react";
import styles from './index.module.scss'

const StackButton = ({children}) => {


    return <>

        <div
            role={"button"}
            className={styles.stackButton}
            style={{display: 'flex', transform: `rotate(${Math.floor(Math.random() * 21) - 10}deg)`}}
        >
            <p style={{fontFamily: 'vangard', flexShrink: 0, display: 'flex'}}> {children} </p>

        </div>

    </>

}

export const LinkButton = ({children, to}) => {


    return <>

        <a
            href={to}
            target={"_blank"}
            className={styles.stackButton}
            style={{display: 'flex'}}
            rel="noopener noreferrer"
        >
            <p style={{fontFamily: 'vangard', flexShrink: 0, display: 'flex'}}> {children} </p>

        </a>

    </>

}

export default StackButton;