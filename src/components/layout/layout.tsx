import PHeader from "../header/header";
import {NavMenu, NavMenuItem} from "../header/headerMenu.tsx";

const PLayout = () => {
    return (
        <>
            <PHeader>

                <PHeader.title>K</PHeader.title>

                <NavMenu>

                    <NavMenuItem title="About" to="about" />
                    <NavMenuItem title="Experience" to="experience" />
                    <NavMenuItem title="Projects" to="projects" />
                    <NavMenuItem title="Contact" to="contact" />
                    <NavMenuItem title="Resume" to="/resume" />

                </NavMenu>

            </PHeader>
        </>
    );
};

export default PLayout;
