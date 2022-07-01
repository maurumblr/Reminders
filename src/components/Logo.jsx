import logo from '../images/logo-remind.png'
import estilo from '../css/Logo.css'

function Logo(){
  return(
    <div className="contenedor-logo">
      <img className="logo" src={logo}  alt="Logo Reminders" />
    </div>
  )
}

export default Logo;