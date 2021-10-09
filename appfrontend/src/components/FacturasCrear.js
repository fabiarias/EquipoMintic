import React, { Component } from 'react'
import axios from 'axios'

export default class FacturasCrear extends Component {

    state = {
        idfactura: '',
        fecha: new Date(),
        identificacion: '',
        nombre: '',
        ciudad:'',
        telefono:'',
        idproducto:'',
        cantidad:'',
        precio:'',
        vendedores: [],
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
                nombre:res.data
                _id: res.data._id,
                editing: true
            });
        }
    }


    render() {
        return (
            <div>
                FACTURAS CREAR
            </div>
        )
    }
}