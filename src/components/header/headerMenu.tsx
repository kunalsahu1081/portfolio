import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./header.module.scss";
import {IoMdMenu} from "react-icons/io";
import {BiSolidDownArrow} from "react-icons/bi";


export const NavMenu = React.memo(({children}: { children: React.ReactNode }) => {
    return (
        <>
            <div role="navigation" className={styles.PNavigation}>
                <ul>{children}</ul>
            </div>
        </>
    );
});

export const NavMenuItem = React.memo(
    ({title, to}: { title: string; to: string }) => {
        return (
            <>
                <li>
                    <a
                        className={`${styles.navItem}`}
                        href={to}
                        onClick={(e) => {
                            if(!to.includes('resume')) {
                                e.preventDefault();
                                const el = document.getElementById(to);
                                if (el) {
                                    const y = el.getBoundingClientRect().top + window.scrollY - 180; // 80px offset
                                    window.scrollTo({top: y, behavior: "smooth"});
                                }
                            }
                        }}
                    >
                        {title}

                        {/*<BiSolidDownArrow size={16} color={document.documentElement.style.getPropertyValue('--icon-color')} className={styles.icon} />*/}
                    </a>
                </li>
            </>
        );
    }
);

// export const NavMenuMobile = React.memo(({children}) => {
//
//
//     return (
//         <>
//
//             <div className={styles.headerIcon}>
//                 <IoMdMenu color={document.documentElement.style.getPropertyValue('--icon-color')}/>
//             </div>
//
//             <div role="navigation" className={styles.NavMobile}>
//                 <ul>{children}</ul>
//             </div>
//
//         </>
//     )
//
// })