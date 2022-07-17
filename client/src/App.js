import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import NewProductSection from "./components/NewProductSection";
import PopularSection from "./components/PopularSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <PopularSection />
      <NewProductSection />
    </div>
  );
}

export default App;
