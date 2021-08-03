import "./App.css";
import Header from './components/header';
import Slides from "./components/slides";
import Who from "./components/who";
import What from "./components/what";
import Why from "./components/why";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Slides/>
      <Who/>
      <What/>
      <Why/>
      <Footer/>
    </div>
  );
}

export default App;
