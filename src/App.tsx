import trinityLogo from "./assets/trinity-logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Welcome to Trinity 2.0</h1>
        <img className="logo" src={trinityLogo} alt="img" />
      </div>
    </>
  );
}

export default App;
