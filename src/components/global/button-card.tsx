import React from "react";
import "../../styles/button.css";

const ButtonCard = ({
    children,
    is_active = false,
    style,
}: {
    children: React.ReactNode;
    is_active?: boolean;
    style: any;
}) => {
    return (
        <>
            <div
                role={"button"}
                style={style}
                className={is_active ? "activeButton norButton" : "norButton"}
            >
                {children}
            </div>
        </>
    );
};

export default React.memo(ButtonCard);
