import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About"
import Service from "./components/Service"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Service}/>
          <Route path="/projects" component={Project}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
