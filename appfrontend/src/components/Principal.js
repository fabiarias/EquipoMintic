import React, { Component } from 'react'
import logo from '../Arquitectura.png';
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { getAuth } from "firebase/auth";


export default class Principal extends Component {
    

    render() {
        return (
            <div>
                <div className="card-header">
                    <h1 className="text-center text-black-50"> SISTEMA DE VENTAS MINTECH.3</h1>
                </div>
                <div className="text-lg-center">
                    <h2 className="text-black-50"> Aquitectura de desarrollo</h2>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="card-footer">
                    <h3 className="text-center text-black-50">
                        <text>
                        Desarrollado por:<br/>
                        Armando Valencia Monsalve<br/>
                        Julián Camilo Escobar Ortiz<br/>
                        Wilson Suárez Velasco<br/>
                        Jhonathan Mejia<br/>
                        Fabian arias Muñoz
                        </text>


                    </h3>
                </div>
            </div>
        )
    }
}
