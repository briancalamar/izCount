import './App.css';
import NavBar from "./components/navBar";

import  { Route } from "react-router"

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar}/>
    </div>
  );
}

export default App;
