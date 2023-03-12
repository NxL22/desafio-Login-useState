import Login from './componentes/Login';
import Alert from './componentes/Alert';
import { useState } from 'react';



function App() {

  const [alert, setAlert] = useState({
    mensaje: "",
    color: "",
    shake:"",
    correcto:"",
  });

  return (
    <>

      <Login setAlert={setAlert} />
      <Alert color={alert.color}>{alert.mensaje}</Alert>

    </>
  );
}

export default App;
