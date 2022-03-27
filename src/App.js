
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import AboutMe from "./Components/AboutMe/AboutMe";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<MainPage/>}></Route>
              <Route exact path="*" element={<MainPage/>}></Route>
              <Route exact path="/aboutme" element={<AboutMe/>}></Route>
              <Route exact path="/resume" element={<Resume/>}></Route>
              <Route exact path="/projects" element={<Projects/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
