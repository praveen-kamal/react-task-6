import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Resume />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
