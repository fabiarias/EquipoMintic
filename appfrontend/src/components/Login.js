import React, { useState } from "react";
import "../Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
        <div className="card-header">
            <h1 className="text-center">BIENVENIDOS AL SISTEMA DE VENTAS</h1>
            <h2 className="text-center">Aplicación Web desarrollada por MINTECH.3</h2>
            <h3 className="text-center">Por favor ingrese sus datos de autenticación para ingresar al sistema</h3>
        </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      <div className="card-img-bottom">
          <h4 className="text-center">Estudiantes ciclo 3 Mintic</h4>
      </div>
    </div>

  );
}