import React, { Component } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { getAuth } from "firebase/auth";

export default class UsuariosLista extends Component {
    render() {
        return (
            <div>
                USUARIO LISTA
            </div>
        )
    }
}
