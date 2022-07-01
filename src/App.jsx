import logo from './logo.svg';
import './css/App.css';
import Logo from './components/Logo.jsx'
import Tarea from './components/Tarea.jsx'
import Form from './components/Form.jsx'
import { useState, useEffect } from 'react';


function App() {


  //Creamos un hook para definir la lista de tareas. El estado inicial será un array vacio. Con setTareas actualizamos el valor del array.
  const [listaTareas, setListaTareas] = useState(
    JSON.parse(localStorage.getItem('TAREAS')) || []
  );

  
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('TAREAS'));
    if (tareasGuardadas) {
      setListaTareas(tareasGuardadas);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('TAREAS', JSON.stringify(listaTareas))
  }, [listaTareas]);


  //Creamos una funcion para agregar una tarea. Recibimos la tarea como parametro.
  const agregarTarea = tarea => {
    if (tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();

      const listadoActualizado = [tarea, ...listaTareas];
      setListaTareas(listadoActualizado);
    }
  }


  //Creamos una funcion para eliminar una tarea de nuestro array.
  //Recibe como parametro un id. 
  const eliminarTarea = id =>{
    //Creamos un nuevo array actualizado donde excluimos a aquella tarea que tenga un id igual al id que recibimos como parametro.
    const listadoActualizado = listaTareas.filter(tarea => tarea.id !== id);
    setListaTareas(listadoActualizado);
  }


  //Creamos una funcion para marcar una tarea como completada.
  //Recibe como parametro un id. 
  const completarTarea = id => {
    const listadoActualizado = listaTareas.map((tarea) => {
      if (tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea
    })
    setListaTareas(listadoActualizado);
  }


  //Guardar tareas en localStore
  // const guardarTareas = () => {
  //     localStorage.setItem('tareas', JSON.stringify(listaTareas))
  //   };

  // const obtenerTareas = () => {
  //   if (localStorage.getItem('tareas') === null) {
  //     localStorage.setItem('tareas', JSON.stringify([]));      
  //   } else {
  //     let tareasLocales = JSON.parse(localStorage.getItem('tareas'));
  //     setListaTareas(tareasLocales);
  //   }
  // }


  return (
    <div className="App">
      <h1 className='title'>REMINDERS</h1>
      <Logo />
      <Form onSubmit={agregarTarea} />
      {
        listaTareas.map((tarea) => //tarea representa cada uno de los objectos del array listaTareas. La función map() recorre todo el array y por cada tarea (objeto), crea un componente Tarea.
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto = {tarea.texto}
            completada = {tarea.completada}  
            completar = {completarTarea}          
            eliminar = {eliminarTarea}
            
           />
          )
      }
    </div>
  );
}

export default App;
