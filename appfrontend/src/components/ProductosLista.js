import React, { Component } from 'react'
import axios from 'axios'
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { getAuth } from "firebase/auth";

export default class ProductosLista extends Component {



    
    render() {
        return (
            <div>
                PRODUCTOS LISTA
            </div>
        )
    }
}