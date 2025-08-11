import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";
import { GithubLink, LinkedInIcon } from "../header-icon-transition/headerIcon";

let prevScrollTop = window.pageYOffset || document.documentElement.scrollTop;
const prevScrollDirection: string = "";
let timeout: number = 0;

const PHeader = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const [position, set_position] = useState("fixed");

    const onScroll = () => {
        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (
                st > prevScrollTop &&
                prevScrollDirection !== "down" &&
                location.pathname?.includes("resume")
            ) {
                // downscroll code here
                set_position("absolute");
            } else if (st < prevScrollTop && prevScrollDirection !== "up") {
                // upscroll code
                set_position("fixed");
            }
            prevScrollTop = st <= 0 ? 0 : st; // for Mobile or negative scrolling
        }, 100);
    };

    useEffect(() => {
        document.addEventListener("scroll", onScroll);

        return () => {
            document.addEventListener("scroll", onScroll);
        };
    });

    return (
        <>
            <section
                style={{
                    //     position: position,
                    height: position == "absolute" ? "0" : "5vw",
                }}
                role="banner"
                className={"PHeader"}
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
            <a href={"/"} className="HTitle">
                {children}
            </a>
        </>
    );
});

PHeader.navMenu = React.memo(({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div role="navigation" className={"PNavigation"}>
                <ul>{children}</ul>
            </div>
        </>
    );
});

PHeader.navMenuItem = React.memo(
    ({ title, to }: { title: string; to: string }) => {
        return (
            <>
                <li>
                    <NavLink
                        className={({ isActive, isPending }) =>
                            isPending
                                ? "navItem"
                                : isActive
                                ? "navItem active"
                                : "navItem"
                        }
                        to={to}
                    >
                        {" "}
                        {title}
                        <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                            width="12px"
                            height="12px"
                            viewBox="0 0 24.00 24.00"
                            stroke="#000000"
                            stroke-width="2.4"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke="#CCCCCC"
                                stroke-width="0.576"
                            />

                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fill="black"
                                    d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"
                                />
                            </g>
                        </svg>
                    </NavLink>
                </li>
            </>
        );
    }
);

export default PHeader;
