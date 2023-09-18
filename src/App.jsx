
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.scss"
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import { Value } from "./components/Value/Value";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header/>
        <Hero/>
        <Companies />
        <Residencies />
        <Value />
      </div>
      <span>Footer</span>
    </div>
  );
}

export default App;
