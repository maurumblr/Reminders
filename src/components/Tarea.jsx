import { AiOutlineCloseCircle } from "react-icons/ai";
import '../css/Tarea.css'

function Tarea( {id, texto, completada, completar, eliminar}){
  // props: 
  //       id: identificador para cada tarea, es necesaria para createRenderer, eliminar y completar cada tarea.
  //       texto: es el texto que vamos a recibir del input del formulario.
  //       completada: True or False, lo vamos a utilizar para cambiar la clase de CSS.
  //       completar: funcion para marca la tarea como completada.
  //       eliminar: funcion para eliminar la tarea.  
  return(
    <div className={ completada ? 'tarea-contenedor complete' : 'tarea-contenedor'} >
      <div 
        className="tarea-texto"
        onClick={() => completar(id)}>
        <p>{texto}</p>
      </div>
      <div className="tarea-icono"
        onClick={() => eliminar(id)}>
          <AiOutlineCloseCircle className="icon"/>
      </div>
    </div>
  )
}

export default Tarea;