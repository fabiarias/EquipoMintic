import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class FacturasLista extends Component {

    state = {
        facturas: [] 
    }
    
    async componentDidMount() {
        this.getFacturas();
    }


    async getFacturas() {
        const res = await axios.get('http://localhost:4000/api/facturas');
        this.setState({ facturas: res.data });
    }
    deleteFacturas = async (facturaId) => {
        const response = window.confirm('Está seguro de eliminar el registro?');
        if (response) {
            await axios.delete('http://localhost:4000/api/facturas/' + facturaId);
            this.getFacturas();
        }
    }


    render() {
        return (
            <div>
                <h1 className="card-header text-center">LISTADO DE FACTURAS</h1>
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

                                    this.state.facturas.map((dato)=>
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
                                                <button className="btn btn-primary"
                                                >
                                                Editar</button>
                                                {" "}
                                                <button className="btn btn-warning"
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