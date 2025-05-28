import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/shared/logo.svg' // <-- importe le logo


export default function Navbar(){



    return(
        <>
            <div id='navbargroup'>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="navbar navbar-expand-lg bg-body-trasnparent center-navbar">
                <div className="container-fluid">
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span  className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/" style={{color:'white', fontWeight:'bold'}} className="nav-link active" aria-current="page" href="#">
                            Home
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/destination" style={{color:'white', fontWeight:'bold'}} className="nav-link" href="#">
                            Destination
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/crew" style={{color:'white', fontWeight:'bold'}} className="nav-link" href="#">
                            Crew
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to ='/tech' style={{color:'white', fontWeight:'bold'}} className="nav-link" href="#">
                            Tech
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>

        </>
    )
}