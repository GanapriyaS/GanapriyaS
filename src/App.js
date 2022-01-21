import NavBar from "./components/navbar";
import Home from "./components/home";
import Scroll from "./components/scroll";
import Skills from "./components/skills";
import About from "./components/about";
import Blog from "./components/blog";
import Awards from "./components/awards";
import Project from "./components/project";
import Footer from "./components/footer";
import Resume from "./components/resume";
import Repo from "./components/repo";
import Interest from "./components/interest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Canvas from "./components/canvas";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/martialarts" element={<Canvas />}></Route>
          <Route
            exact
            path="/"
            element={
              <main className="main">
                <Home />
                <About />
                <Skills />
                <Awards />
                <Resume />
                <Project />
                <Blog />
                <Interest limit={12} />
                <Repo />
              </main>
            }
          ></Route>
        </Routes>

        <Footer />
        <Scroll />
      </Router>
    </>
  );
}

export default App;
