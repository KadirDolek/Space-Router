import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/shared/logo.svg' // <-- importe le logo


export default function Navbar(){



    return(
        <>
            <div id='navbargroup'>
                <div id='logoHome'>
                    <img src={logo} alt="Logo" />
                </div>
                <hr className="nav-separator" />
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
                            <NavLink 
                                to="/" 
                                className={({isActive}) => 
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                style={({isActive}) => ({
                                    color: 'white',
                                    fontWeight: 'bold',
                                    borderBottom: isActive ? '2px solid white' : 'none'
                                })}
                            >
                                00 Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/destination" 
                                className={({isActive}) => 
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                style={({isActive}) => ({
                                    color: 'white',
                                    fontWeight: 'bold',
                                    borderBottom: isActive ? '2px solid white' : 'none'
                                })}
                            >
                                01 Destination
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to="/crew" 
                                className={({isActive}) => 
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                style={({isActive}) => ({
                                    color: 'white',
                                    fontWeight: 'bold',
                                    borderBottom: isActive ? '2px solid white' : 'none'
                                })}
                            >
                                02 Crew
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                to ='/tech' 
                                className={({isActive}) => 
                                    isActive ? "nav-link active" : "nav-link"
                                }
                                style={({isActive}) => ({
                                    color: 'white',
                                    fontWeight: 'bold',
                                    borderBottom: isActive ? '2px solid white' : 'none'
                                })}
                            >
                                03 Tech
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>

        </>
    )
}