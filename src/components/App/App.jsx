import "./App.css";
import StudentForm from "../StudentForm/StudentForm.jsx";
import StudentList from "../StudentList/StudentList.jsx";
import {
  HashRouter as Router,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min.js";
import Nav from "../Nav/Nav.jsx";
import About from "../About/About.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>GitHub Student List</h1>
          <Nav />
        </header>
        <Route exact path="/">
          <StudentForm />
        </Route>
        <Route exact path="/students">
          <StudentList />
        </Route>
        <Route exact path="/about">
            <About />
        </Route>
      </Router>
    </div>
  );
}

export default App;
