import Header from './components/header';
import Slides from "./components/slides";
import Who from "./components/who";
import What from "./components/what";
import Why from "./components/why";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header/>
      <Slides/>
      <Who/>
      <br/><br/>
      <What/>
      <br/><br/>
      <Why/>
      <br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
