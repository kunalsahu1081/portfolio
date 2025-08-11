import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PLayout from "./components/layout/layout";
import Resume from "./pages/resume";

import "./App.css";
import About from "./pages/about";
import Background from "./components/background/background";
import ExperienceScroll from "./components/projects/experience-scroll.tsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <BrowserRouter>
                <PLayout/>

                <Routes>
                    <Route
                        path="/resume"
                        element={
                            <>
                                <Resume/>
                            </>
                        }
                    ></Route>
                    <Route
                        path="/about"
                        element={
                            <>
                                <About/>
                                <ExperienceScroll />
                                <div style={{height: '100vh'}} />
                            </>
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
