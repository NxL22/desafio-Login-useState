// Importamos el hook useState desde React.
import { useState } from "react";

// Declaramos nuestro componente Login, el cual recibe una prop llamada setAlert.
const Login = ({ setAlert }) => {
  // Creamos dos estados con useState: email y password, y les asignamos un valor inicial de una cadena vacía.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Declaramos una función llamada validarLogin, la cual se ejecutará al enviar el formulario.
  const validarLogin = (e) => {
    // Prevenimos el comportamiento por defecto del evento submit.
    e.preventDefault();

    // Comparamos el valor de email y password con los valores "prueba@prueba.com" y "123456" respectivamente.
    if (email.trim() === "prueba@prueba.com" && password.trim() === "123456") {
      // Si los valores coinciden, llamamos a la función setAlert y le pasamos un objeto con dos propiedades: mensaje y color.
      setAlert({
        mensaje:"Sesión Iniciada",
        color:"success",
        shake:" ",
        correcto:"correcto-input",
      });
      // Asignamos una cadena vacía a los estados email y password.
      setEmail("");
      setPassword("");

      // Salimos de la función validarLogin.
      return;
    };

    // Si los valores no coinciden, llamamos a la función setAlert y le pasamos un objeto con dos propiedades: mensaje y color.
    setAlert({
      mensaje: "los datos son incorrectos",
      color:"danger",
      shake:"error-input",
      correcto:" ",
    });
  };

  // Retornamos un formulario que se ejecutará al enviar el formulario.
  return (
    <form onSubmit={validarLogin}>
      {/* Creamos un label y un input para el email */}
      <label htmlFor="email"><span>Email:</span></label>
      <input
        type="email"
        name="email"
        id="email"
        className={`form-control mb-2 ${alert.shake} ${alert.correcto}`}
        placeholder="Ingrese@email.com"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      {/* Creamos un label y un input para el password */}
      <label htmlFor="password"><span>Password:</span></label>
      <input
        type="password"
        name="password"
        id="password"
        className={`form-control mb-2 ${alert.shake} ${alert.correcto}`}
        placeholder="Ingrese su Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      {/* Creamos un botón para enviar el formulario, el cual se deshabilita si email o password están vacíos */}
      <button
        type="submit"
        className="btn btn-dark"
        disabled={!email.trim() || !password.trim()}
      >
        Iniciar Sesión
      </button>
    </form>
  );
};


export default Login;

