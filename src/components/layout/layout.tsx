import PHeader from "../header/header";
import {NavMenu, NavMenuItem} from "../header/headerMenu.tsx";

const PLayout = () => {
    return (
        <>
            <PHeader>

                <PHeader.title>KUNAL SAHU</PHeader.title>

                <NavMenu>
                    <NavMenuItem title="Projects" to="/projects" />
                    <NavMenuItem title="Experience" to="/experience" />
                    <NavMenuItem title="Resume" to="/resume" />
                    <NavMenuItem title="About" to="/about" />
                </NavMenu>

            </PHeader>
        </>
    );
};

export default PLayout;
