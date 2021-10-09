import React, { Component } from 'react'
import axios from 'axios'

export default class ProductosCrear extends Component {

    state = {
        productos: [],
        idproducto: '',
        nombreproducto: '',
        costo: '',
        isediting:false,
        _id:''
    }

    async componentDidMount() {
        this.getProductos();
    }

    async getProductos() {
        const res = await axios.get('http://localhost:4000/api/productos');
        this.setState({ productos: res.data });
    }


    onInputChage = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newProducto = {
            idproducto: this.state.idproducto,
            nombreProducto: this.state.nombreproducto,
            costo: this.state.costo
        };
        if(this.state.isediting){
            await axios.put('http://localhost:4000/api/productos/'+ this.state._id, newProducto)
        }else{
            await axios.post('http://localhost:4000/api/productos', newProducto)
        }       
        this.setState({ idproducto: '' });
        this.setState({ nombreproducto: '' });
        this.setState({ costo: '' });
        this.setState({isediting:false});
        this.setState({_id:''})
        this.getProductos();
        
    }

    deleteProductos = async (userId) => {
        const response = window.confirm('Está seguro de eliminar el registro?');
        if (response) {
            await axios.delete('http://localhost:4000/api/productos/' + userId);
            this.getProductos();
        }
    }

    updateProductos = async (id) => {
        const res = await axios.get('http://localhost:4000/api/productos/'+ id);
        //this.setState({producto:res.data});
        this.setState({idproducto:res.data.idproducto});
        this.setState({nombreproducto:res.data.nombreProducto});
        this.setState({costo:res.data.costo});
        this.setState({isediting:true});
        this.setState({_id:id});
    }



    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="table-dark">
                            <h3>Crear Producto</h3>
                        </div>
                        <div className="card card-body">
                            <form on onSubmit={this.onSubmit}>
                                <div className="form-group">

                                    <label for="idproducto">ID Producto</label>
                                    <input type="text" className="form-control" placeholder="Código del producto"
                                        value={this.state.idproducto}
                                        id="idproducto"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <div className="form-group">

                                    <label for="nombreproducto">Nombre Producto</label>
                                    <input type="text" className="form-control" placeholder="Nombre del Producto"
                                        value={this.state.nombreproducto}
                                        id="nombreproducto"
                                        onChange={this.onInputChage}
                                        required />
                                </div>



                                <div class="form-group">
                                    <label for="costo">Valor de Venta</label>
                                    <input type="text" class="form-control"
                                        value={this.state.costo}
                                        id="costo" placeholder="Ingrese el valor de venta"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Grabar
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="-col-md-9">
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr >
                                    <th>ID Producto</th>
                                    <th>Nombre Producto</th>
                                    <th>Costo</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="table-secondary">
                                {
                                    this.state.productos.map((dato) => (
                                        <tr key={dato._id}>
                                            <td >{dato.idproducto}</td>
                                            <td>{dato.nombreProducto}</td>
                                            <td>{dato.costo}</td>
                                            <td>
                                                <button className="btn btn-primary"
                                                key={dato._id} onClick={() => this.updateProductos(dato._id)}>
                                                Editar</button>
                                                {" "}
                                                <button className="btn btn-warning"
                                                    key={dato._id} onClick={() => this.deleteProductos(dato._id)}>
                                                        Borrar</button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        )
    }
}