import { useState } from "react"
import { SiAddthis } from "react-icons/si";
import { v4 as uuidv4} from 'uuid';
import '../css/Form.css'

function Form(props){


  //Hook para definir el estado/valor de la tarea.
  const [inputTarea, setInputTarea] = useState('')


  //Funcion para asignar el nuevo valor de la tarea. 
  //A medida que tipeamos sobre el input, vamos actualizando el valor de la nueva tarea y la asignamos con setTarea.
  const cambioInput = e =>{
    setInputTarea(e.target.value);    
  };


  //Esta funcion crea las tareas cada vez que se presiona el boton agregar (submit).
  //Se recibe como agrunmento un evento (e), este se asigna automaticamente.
  //Pasamos esta funcion al evento onSubmit del formulario. 
  const manejarEnvio = e =>{
    e.preventDefault();


    //Con esta funcion creamos la nueva tarea que debemos pasar al array listaTareas de App.js.
    //La funcion agregarTarea (de App.js) agregara la tarea creada 'nuevaTarea' al array.
    const nuevaTarea = {
      id:  uuidv4(),
      texto: inputTarea,
      completada: false,
    }


    //Esta funcion va a ser un prop y nos la va a pasar App.js
    //Se llama onSubmit como standard, para decir que esto va a ocurrir cuando el formulario se intente enviar.
    props.onSubmit(nuevaTarea);    
    setInputTarea('')
  }


  return(
    <form className="nueva-tarea" onSubmit={manejarEnvio}>
      <input 
        onChange={cambioInput}
        value = {inputTarea}
        className='input-tarea'
        placeholder="Add new task..."
        />
      <button className="btn-agregarTask" type="submit">
        <SiAddthis />
      </button>
    </form>
  )
}

export default Form;