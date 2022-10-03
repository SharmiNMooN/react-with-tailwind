import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-6xl underline">This ia a big big header</h1>
      <p>This is just a paragraph</p>
    </div>
  );
}

export default App;
