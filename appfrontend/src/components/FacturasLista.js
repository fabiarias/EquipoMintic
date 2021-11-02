import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { getAuth } from "firebase/auth";

export default class FacturasLista extends Component {

    state = {
        facturas: [],
        facturaBackup:[],
        textoBuscar:''
    }

    async componentDidMount() {
        this.getFacturas();
    }


    async getFacturas() {
        const res = await axios.get('http://localhost:4000/api/facturas');
        this.setState({ 
            facturas: res.data,
            facturaBackup:res.data
         });
    }

    deleteFacturas = async (facturaId) => {
        const response = window.confirm('Está seguro de eliminar el registro?');
        if (response) {
            await axios.delete('http://localhost:4000/api/facturas/' + facturaId);
            this.getFacturas();
        }

    }

    filter(event){

        var text=(event.target.value);
        const data=this.state.facturaBackup;

        const newData=data.filter(function(item){
            const itemIDFactura=item.idfactura
            const itemIdentificacion=item.identificacion.toUpperCase()

            const itemData=itemIDFactura+" " + itemIdentificacion.toUpperCase()
            const textData=text.toUpperCase()
            return itemData.indexOf(textData)>-1
        })
        this.setState({
            facturas:newData,
            textoBuscar:text,
        })
    }



    render() {
        return (
            <div>
                <h1 className="card-header text-center">LISTADO DE FACTURAS</h1>

                <div className="card-header">
                    <input type="search" className="form-form-control"
                        placeholder="Busqueda por N° de Factura o Identificación de Cliente...."
                        name="busqueda" id="busqueda" value={this.state.text}
                        //onChange={e=>setTerm(e.target.value)}
                        onChange={(text) => this.filter(text)}
                        size="100"
                    />

                </div>

                <div className="row">
                    <div className="-col-md-12">
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr >
                                    <th>ID Factura</th>
                                    <th>Fecha</th>
                                    <th>identificación</th>
                                    <th>Nombre</th>
                                    <th>Ciudad</th>
                                    <th>Telefono</th>
                                    <th>Total Factura</th>
                                    <th>Vendedor</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="table-secondary">
                                {

                                    this.state.facturas.map((dato) =>
                                        <tr key={dato._id}>
                                            <td >{dato.idfactura}</td>
                                            <td >{dato.fecha}</td>
                                            <td>{dato.identificacion}</td>
                                            <td>{dato.nombre}</td>
                                            <td>{dato.ciudad}</td>
                                            <td>{dato.telefono}</td>
                                            <td>{dato.precio}</td>
                                            <td>{dato.vendedor}</td>
                                            <td>
                                                <Link className="btn btn-primary"
                                                    to={"/facturas/" + dato._id}
                                                >
                                                    Editar</Link>

                                                {" "}
                                                <button className="btn btn-warning"
                                                    onClick={() => this.deleteFacturas(dato._id)}
                                                >
                                                    Borrar</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}