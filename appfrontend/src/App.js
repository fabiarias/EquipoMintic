import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Navigation from './components/Navigation';
import Principal from './components/Principal';
import FacturasCrear from './components/FacturasCrear';
import FacturasLista from './components/FacturasLista';
import ProductosCrear from './components/ProductosCrear';
import UsuariosCrear from './components/UsuariosCrear';

import Login from './components/Login/Login'
import Reset from './components/Reset/Reset';
import Register from './components/Register/Register';
import PaginaNoEncontrada from './components/PaginaNoEncontrada/PaginaNoEncontrada';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';





function App() {
  return (
    <Router>
      
       <div className="container p-4">
       <Header />
       <br/>
        <Route path="/inicio" exact component={Principal}/>
        <Route path="/productos" exact component={ProductosCrear}/>
        <Route path="/productosedit/:id" exact component={ProductosCrear}/>
        <Route path="/users" exact component={UsuariosCrear} />
        <Route path="/users/:id" exact component={UsuariosCrear} />
        <Route path="/facturas/" exact component={FacturasCrear} />
        <Route path="/facturas/:id" exact component={FacturasCrear} />
        <Route path="/facturaslista" exact component={FacturasLista}/>

        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/Login" component={Login} />

      <Footer />
    </div>

    </Router>
  );
}

export default App;
