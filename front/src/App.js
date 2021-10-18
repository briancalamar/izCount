import './App.css';
import NavBar from "./components/NavBar/NavBar";

import  { Route } from "react-router"
import ContainerProduct from './components/admin/Products/ContainerProduct';

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar}/>
      <Route exact path="/productos" component={ContainerProduct}/>
    </div>
  );
}

export default App;
