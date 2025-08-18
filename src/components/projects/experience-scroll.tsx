import ExperienceSection from "./experience-section.tsx";
import {useEffect, useState} from "react";
import "../../styles/experience.css";

let oldScroll = 0;
let scaleScroll = 0;
let initialScroll = 0;

const vwToPx = (vw: number) => (vw / 100) * window.innerWidth;
const pxToVw = (px: number) => (px / window.innerWidth) * 100;

const ExperienceScroll = () => {
    const [old_scroll, set_old_scroll] = useState(vwToPx(-12.5) + 'px');
    const [start_scaling, set_start_scaling] = useState(false);


    const onScroll = () => {
        const prevScroll = oldScroll;

        oldScroll = Math.min(-window.scrollY, 0) - vwToPx(12.5);

        const vw = pxToVw(-oldScroll );

        if (vw >= 18.5) {
            set_start_scaling(true);
            oldScroll = -1 * vwToPx(18.5);

            onScaleScroll();
        } else {
            const element = document.getElementById("nativeCard");

            if (element) {
                element.style.position = `relative`;
                element.style.width = `25vw`;
                element.style.height = `15vw`;
                element.style.left = `0px`;
                element.style.top = "0px";
            }
            scaleScroll = 0;
            initialScroll = 0;
            set_start_scaling(false);
        }

        if (oldScroll <= 0) {
            set_old_scroll(`${oldScroll}px`);
        } else {
            oldScroll = prevScroll;
        }
    };

    const onScaleScroll = () => {
        scaleScroll = !scaleScroll
            ? Math.max(
                document.getElementById("nativeCard")?.getBoundingClientRect()
                    ?.y || 0,
                0
            )
            : scaleScroll;
        initialScroll = !initialScroll ? window.scrollY : initialScroll;

        const scrollDiffScale = (80 - 25) / (scaleScroll + vwToPx(15));

        const scaleDiff = 1 / (scaleScroll + vwToPx(15));

        const scroll_diff = window.scrollY - initialScroll;

        const total_width_increase = Math.min(
            scroll_diff * scrollDiffScale,
            80 - 25
        );

        console.log(
            total_width_increase,
            scroll_diff,
            window.scrollY,
            window.innerHeight
        );

        const width = 25 + total_width_increase;

        const height = 15 + (total_width_increase * 15) / 25;

        const height_str = `min(${vwToPx(height)}px, calc(100vh - ${vwToPx(
            12
        )}px))`;

        let top = scaleScroll;

        if (pxToVw(scroll_diff) > 17) {
            top = top - vwToPx(pxToVw(scroll_diff) - 17);
        }

        if (pxToVw(top) < 8) top = vwToPx(8);

        const element = document.getElementById("nativeCard");

        const root = document.documentElement;

        if (root) {
            let scale = Math.min(
                Math.max(1 - scaleDiff * scroll_diff, 0),
                1
            )?.toString();

            if (parseFloat(scale) < 0.2 || parseFloat(scale) > 0.99) {
                root.style.setProperty("--border-left", "-12px");
                root.style.setProperty("--border-height", "12px");
                scale = "1";
            } else {
                root.style.setProperty("--border-left", "-12px");
                root.style.setProperty("--border-height", "100%");
            }

            root.style.setProperty("--n-scale", scale);
        }

        if (start_scaling && scaleScroll && element) {
            element.style.borderRadius = "0px";
            element.style.position = `fixed`;
            element.style.background = `beige`;
            element.style.left = `${(100 - width) / 2}vw`;
            element.style.top = top + "px";
            element.style.width = `${width}vw`;
            element.style.height = height_str;
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [start_scaling]);

    return (
        <>
            <section className={"ExperienceScroll"}>
                <div
                    style={{left: `${old_scroll}`, position: "relative"}}
                    className={"scrollWrap"}
                >
                    <ExperienceSection/>
                    <ExperienceSection/>

                </div>
            </section>
        </>
    );
};

export default ExperienceScroll;
