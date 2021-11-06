import './App.css';
import NavBar from "./components/NavBar/NavBar";

import  { Route } from "react-router"
import ContainerProduct from './components/admin/Products/ContainerProduct';
import FormProduct from './components/admin/Products/FormProduct';

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar}/>
      <Route exact path="/productos" component={ContainerProduct}/>
      <Route exact path="/productos/crear" component={FormProduct} />
    </div>
  );
}

export default App;
