import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Events from "./components/Events/Events";
import Value from "./components/Value/Value";
import Nmamit from "./components/Nmamit/Nmamit";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/> 
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Events/>
      <Value/>
      <Nmamit/>
      <Register/>
      <Footer/>      
    </div>
  );
}

export default App;
