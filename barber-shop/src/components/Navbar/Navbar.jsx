import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <ul>
          <li><Link to='/treatments'>TRATAMENTOS</Link></li>
          <li><Link to='/abount'>SOBRE</Link></li>
        </ul>

        <h1>Barbearia "Nome"</h1>

        <div className="navbar-buttons">
          <button>LOGIN</button>
          <button id="register-now">AGENDE AGORA</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar