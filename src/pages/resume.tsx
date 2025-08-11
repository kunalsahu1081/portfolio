import React, { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker?worker";
import "pdfjs-dist/web/pdf_viewer.css";
import ButtonCard from "../components/global/button-card.tsx";

// Set worker
pdfjsLib.GlobalWorkerOptions.workerPort = new pdfWorker();

const Resume = () => {
    const containerRef = useRef<any>(null);

    useEffect(() => {
        const root = document.documentElement;
        setTimeout(() => {
            root.style.setProperty("--border-color", "white");
        }, 200);

        setTimeout(() => {
            root.style.setProperty("--header-background", "black");
             root.style.setProperty("--primary-text-color", "white");
        }, 200);

        root.style.setProperty("--scale", "1");

        const renderPDF = async () => {
            const loadingTask = pdfjsLib.getDocument("/kunal_sahu_resume.pdf"); // Must be in /public
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);

            const scale = 1.5;
            const dpr = window.devicePixelRatio || 1;
            const viewport = page.getViewport({ scale });

            const container = containerRef.current;
            container.innerHTML = "";
            container.style.position = "relative";

            // Canvas
            const canvas = document.createElement("canvas");
            const context: any = canvas.getContext("2d");
            canvas.width = viewport.width * dpr;
            canvas.height = viewport.height * dpr;
            canvas.style.width = `${viewport.width}px`;
            canvas.style.height = `${viewport.height}px`;
            context.setTransform(dpr, 0, 0, dpr, 0, 0);
            container.appendChild(canvas);
            await page.render({ canvasContext: context, viewport }).promise;

            // Link Layer
            const annotations = await page.getAnnotations({
                intent: "display",
            });
            annotations.forEach((annotation) => {
                if (annotation.subtype === "Link" && annotation.url) {
                    const linkEl = document.createElement("a");
                    linkEl.href = annotation.url;
                    linkEl.target = "_blank";
                    linkEl.style.position = "absolute";
                    linkEl.style.zIndex = "10";

                    // Convert PDF coordinates to DOM (top-left)
                    const rect = pdfjsLib.Util.normalizeRect(annotation.rect);
                    const [x1, y1, x2, y2] = rect;

                    const left = x1 * scale;
                    const top = viewport.height - y2 * scale;
                    const width = (x2 - x1) * scale;
                    const height = (y2 - y1) * scale;

                    linkEl.style.left = `${left}px`;
                    linkEl.style.top = `${top}px`;
                    linkEl.style.width = `${width}px`;
                    linkEl.style.height = `${height}px`;
                    linkEl.style.background = "rgba(0,0,0,0)"; // transparent clickable area

                    containerRef.current.appendChild(linkEl);
                }
            });
        };

        renderPDF();

        return () => {
            const root = document.documentElement;
            root.style.setProperty("color-scheme", "none");
            root.style.setProperty("--border-color", "black");
            root.style.setProperty("--header-background", "white");
            root.style.setProperty("--primary-text-color", "black");
            root.style.setProperty("--scale", "0");
        };
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "80px",
            }}
        >
            <ButtonCard style={{ margin: "32px auto" }}>
                <p style={{ fontFamily: "vangard" }}>Download</p>
            </ButtonCard>
            {/*<button*/}
            {/*    style={{*/}
            {/*        margin: "32px auto",*/}
            {/*        padding: "8px 20px",*/}
            {/*        cursor: "pointer",*/}
            {/*        background: "none",*/}
            {/*        fontFamily: "vangard",*/}
            {/*        borderRadius: "4px",*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Download*/}
            {/*</button>*/}

            <div
                ref={containerRef}
                style={{
                    position: "relative",
                    width: "fit-content",
                    margin: "auto",
                }}
            />
        </div>
    );
};

export default React.memo(Resume);
