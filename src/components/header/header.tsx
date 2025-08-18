import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./header.module.scss";
import { GithubLink, LinkedInIcon } from "../header-icon-transition/headerIcon";

let prevScrollTop = window.pageYOffset || document.documentElement.scrollTop;
const prevScrollDirection: string = "";
let timeout: number = 0;

const PHeader = ({ children }: { children: React.ReactNode }) => {

    const location = useLocation();
    const [position, set_position] = useState("fixed");

    // scroll handler to hide header when scrolled down
    const onScroll = () => {
        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (
                st > prevScrollTop &&
                prevScrollDirection !== "down"
            ) {
                // down scroll absolute
                set_position("absolute");
            } else if (st < prevScrollTop && prevScrollDirection !== "up") {
                // up scroll fixed
                set_position("fixed");
            }
            prevScrollTop = st <= 0 ? 0 : st; // for Mobile or negative scrolling
        }, 100);
    };

    useEffect(() => {
        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <>
            <section
                style={{
                    height: position == "absolute" ? "0" : undefined,
                }}
                role="banner"
                className={styles.PHeader}
            >
                {children}

                <div style={{ display: "flex" }}>
                    <LinkedInIcon />
                    <GithubLink />
                </div>
            </section>
        </>
    );
};

PHeader.title = React.memo(({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <a href={"/"} className={styles.HTitle}>
                {children}
            </a>
        </>
    );
});


export default PHeader;
