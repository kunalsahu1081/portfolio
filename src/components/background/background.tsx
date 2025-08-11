import React from "react";
import "./background.css";

const Background = () => {
    return (
        <>
            <div className="white">
                <div className="squares">
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                    <div className="square" />
                </div>
            </div>

            <div className="grey" />
        </>
    );
};

export default React.memo(Background);
