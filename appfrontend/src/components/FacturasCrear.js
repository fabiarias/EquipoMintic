import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class FacturasCrear extends Component {


    state = {
        idfactura:'',
        fecha:new Date(),
        identificacion:'',
        nombre:'',
        direccion:'',
        telefono:'',
        idproducto:'',
        vendedor:'',
        cantidad:'',
        precio:'',
        userSelected: '',
        users: [],
        editing: false,
        _id: ''
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        if (res.data.length > 0) {
            this.setState({
                users: res.data.map(user => user.nombres),
                userSelected: res.data[0].nombres
            })
        }
        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)
            const res = await axios.get('http://localhost:4000/api/facturas/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                idfactura: res.data.idfactura,
                fecha: new Date(res.data.fecha),
                identificacion: res.data.identificacion,
                nombre: res.data.nombre,
                direccion:res.data.direccion,
                telefono:res.data.telefono,
                idproducto:res.data.idproducto,
                //vendedor:this.data.vendedor,
                cantidad:res.data.cantidad,
                precio:res.data.precio,
                userSelected:res.data.vendedor,
                _id: res.data._id,
                editing: true
           });
        }
    }



    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedFactura = {
                idfactura: this.state.idfactura,
                fecha: this.state.fecha,
                identificacion: this.state.identificacion,
                nombre: this.state.nombre,
                direccion: this.state.direccion,
                telefono: this.state.telefono,
                idproducto: this.state.idproducto,
                vendedor:this.state.userSelected,
                cantidad: this.state.cantidad,
                precio: this.state.precio

            };
            await axios.put('http://localhost:4000/api/facturas/' + this.state._id, updatedFactura);

        } else {
            const newFactura = {
                idfactura: this.state.idfactura,
                fecha: this.state.fecha,
                identificacion: this.state.identificacion,
                nombre: this.state.nombre,
                direccion: this.state.direccion,
                telefono: this.state.telefono,
                idproducto: this.state.idproducto,
                vendedor:this.state.userSelected,
                cantidad: this.state.cantidad,
                precio: this.state.precio
            };
            axios.post('http://localhost:4000/api/facturas', newFactura);

        }
        window.location.href = '/facturaslista';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = fecha => {
        this.setState({ fecha });
    }


    render() {
        return (
            <div className="col-md-12">
                <div className="card card-body">
                    <h4>CREAR FACTURAS </h4>
                    {/** SELECCIONE VENDEDOR */}
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label for="vendedor">Vendedor</label>
                            <select className="form-control"
                                value={this.state.userSelected}
                                onChange={this.onInputChange}
                                name="userSelected" id="userSelected" required>
                                {
                                    this.state.users.map(user => (
                                        <option key={user} value={user}>
                                            {user}
                                        </option>
                                    ))
                                }

                            </select>
                        </div>

                        <div class="form-group">
                            <label for="factura">Factura</label>
                            <input type="text" class="form-control" name="idfactura"
                                value={this.state.idfactura}
                                onChange={this.onInputChange}
                                id="factura"
                                required />
                        </div>

                        <div class="form-group">
                            <label for="fecha">Fecha</label>
                            <DatePicker
                                className="form-form-control" selected={this.state.fecha} onChange={this.onChangeDate} />
                        </div>

                        <div class="form-group">
                            <label for="identificacion">identificación</label>
                            <input type="text" class="form-control" name="identificacion"
                                value={this.state.identificacion}
                                onChange={this.onInputChange}
                                id="identificacion"
                                required />
                        </div>

                        <div class="form-group">
                            <label for="nombre">Nombre Cliente</label>
                            <input type="text" class="form-control" name="nombre"
                                value={this.state.nombre}
                                onChange={this.onInputChange}
                                id="nombre"
                                required />
                        </div>

                        <div class="form-group">
                            <label for="direccion">Dirección</label>
                            <input type="text" class="form-control" name="direccion"
                                value={this.state.direccion}
                                onChange={this.onInputChange}
                                id="direccion"
                                required />
                        </div>

                        <div class="form-group">
                            <label for="telefono">Teléfono</label>
                            <input type="text" class="form-control" name="telefono"
                                value={this.state.telefono}
                                onChange={this.onInputChange}
                                id="telefono"
                                required />
                        </div>

                        <div class="form-group">
                            <label for="idproducto">ID Producto</label>
                            <input type="text" class="form-control" name="idproducto"
                                value={this.state.idproducto}
                                onChange={this.onInputChange}
                                id="idproducto"
                                required />
                        </div>

                        <div class="form-group">
                            <label for="cantidad">Cantidad</label>
                            <input type="text" class="form-control" name="cantidad"
                                value={this.state.cantidad}
                                onChange={this.onInputChange}
                                id="cantidad"
                                required />
                        </div>

                        <div class="form-group">
                            <label for="precio">Precio de venta</label>
                            <input type="text" class="form-control" name="precio"
                                value={this.state.precio}
                                onChange={this.onInputChange}
                                id="precio"
                                required />
                        </div>




                        <button type="submit" className="btn btn-primary">
                            Grabar Factura
                        </button>

                    </form>
                </div>

            </div>
        )
    }
}