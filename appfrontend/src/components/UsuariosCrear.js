import React, { Component } from 'react'
import axios from 'axios'
export default class UsuariosCrear extends Component {

    state = {
        users: [],
        identificacion: '',
        login: '',
        nombres: '',
        clave: '',
        email: '',
        perfil: '',
        isediting:false,
        _id:''
    }


    async componentDidMount() {
        this.getUser();
    }

    async getUser() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: res.data });
    }

    onInputChage = (e) => {
        // console.log(e.target.id,e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    onSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            identificacion: this.state.identificacion,
            login: this.state.login,
            nombres: this.state.nombres,
            clave: this.state.clave,
            email: this.state.email,
            perfil: this.state.perfil
        };
        if(this.state.isediting){
            await axios.put('http://localhost:4000/api/users/'  + this.state._id, newUser)
        }
        else{
            await axios.post('http://localhost:4000/api/users', newUser)
        }
        this.setState({ identificacion: '' });
        this.setState({ login: '' });
        this.setState({ nombres: '' });
        this.setState({clave:''});
        this.setState({email:''});
        this.setState({perfil:''});
        this.setState({isediting:false});
        this.setState({_id:''});
        this.getUser();
    }

    deleteUser = async (userId) => {
        const response = window.confirm('Está seguro de eliminar el registro?');
        if (response) {
            await axios.delete('http://localhost:4000/api/users/' + userId);
            this.getUser();
        }
    }

    updateUser = async (id) => {
        const res = await axios.get('http://localhost:4000/api/users/'+ id);
        //this.setState({producto:res.data});
        this.setState({identificacion:res.data.identificacion});
        this.setState({login:res.data.login});
        this.setState({nombres:res.data.nombres});
        this.setState({clave:res.data.clave});
        this.setState({email:res.data.email});
        this.setState({perfil:res.data.perfil});
        this.setState({isediting:true});
        this.setState({_id:id});
    }



    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="table-dark">
                            <h3>Crear Usuario</h3>
                        </div>
                        <div className="card card-body">
                            <form on onSubmit={this.onSubmit}>
                                <div className="form-group">

                                    <label for="identificacion">Identificación</label>
                                    <input type="text" className="form-control" placeholder="Ingrese la identificación"
                                        value={this.state.identificacion}
                                        id="identificacion"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <div class="form-group">
                                    <label for="login">Login o UserName</label>
                                    <input type="text" class="form-control"
                                        value={this.state.login}
                                        id="login" placeholder="Ingrese el login"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <div class="form-group">
                                    <label for="nombres">Nombre Completo</label>
                                    <input type="text" class="form-control"
                                        value={this.state.nombres}
                                        id="nombres" placeholder="Ingrese el login"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <div class="form-group">
                                    <label for="clave">Password</label>
                                    <input type="password" class="form-control"
                                        value={this.state.clave}
                                        id="clave" placeholder="Password"
                                        onChange={this.onInputChage}
                                        required />
                                </div>

                                <div class="form-group">
                                    <label for="email">E-mail</label>
                                    <input type="email" class="form-control"
                                        value={this.state.email}
                                        id="email" aria-describedby="emailHelp" placeholder="Ingrese Email"
                                        onChange={this.onInputChage} />

                                    <small id="emailHelp" class="form-text text-muted">Nunca comparta su usuario o email con nadie.</small>
                                </div>


                                <div class="form-group">
                                    <label for="perfil">Perfil</label>
                                    <select class="form-control"
                                        id="perfil"
                                        onChange={this.onInputChage}>
                                        <option selected>Seleccione Perfil...</option>
                                        <option>Administrador</option>
                                        <option>Vendedor</option>
                                    </select>
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
                                    <th>Identificación</th>
                                    <th>Login</th>
                                    <th>Nombre Completo</th>
                                    <th>E-Mail</th>
                                    <th>Perfil</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="table-secondary">
                                {
                                    this.state.users.map((dato) => (
                                        <tr key={dato._id}>
                                            <td >{dato.identificacion}</td>
                                            <td>{dato.login}</td>
                                            <td>{dato.nombres}</td>
                                            <td>{dato.email}</td>
                                            <td>{dato.perfil}</td>
                                            <td>
                                                <button className="btn btn-primary"
                                                    key={dato._id} onClick={() => this.updateUser(dato._id)}
                                                    >Editar</button>
                                                    {" "}
                                                <button className="btn btn-warning"
                                                    key={dato._id} onClick={() => this.deleteUser(dato._id)}>Borrar</button>
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
