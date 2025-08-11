import PHeader from "../header/header";

const PLayout = () => {
    return (
        <>
            <PHeader>

                <PHeader.title>KUNAL SAHU</PHeader.title>

                <PHeader.navMenu>
                    <PHeader.navMenuItem title="About" to="/about" />
                    <PHeader.navMenuItem title="Projects" to="/projects" />
                    <PHeader.navMenuItem title="Experience" to="/experience" />
                    <PHeader.navMenuItem title="Resume" to="/resume" />
                </PHeader.navMenu>

            </PHeader>
        </>
    );
};

export default PLayout;
