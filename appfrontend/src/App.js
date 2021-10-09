import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Principal from './components/Principal';
import FacturasCrear from './components/FacturasCrear';
import FacturasLista from './components/FacturasLista';
import ProductosCrear from './components/ProductosCrear';
import ProductosLista from './components/ProductosLista';
import UsuariosLista from './components/UsuariosLista';
import UsuariosCrear from './components/UsuariosCrear';





function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={Principal}/>
        <Route path="/productos" exact component={ProductosCrear}/>
        <Route path="/productosedit/:id" exact component={ProductosCrear}/>
        <Route path="/users" exact component={UsuariosCrear} />
        <Route path="/users/:id" exact component={UsuariosCrear} />
        <Route path="/facturas/" exact component={FacturasCrear} />
        <Route path="/facturas/:id" exact component={FacturasCrear} />
        <Route path="/facturaslista" exact component={FacturasLista}/>
      </div>


    </Router>
  );
}

export default App;
