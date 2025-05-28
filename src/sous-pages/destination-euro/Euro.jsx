import Navbar from "../../sous-pages/Navbar/Navbar"
import { Outlet, Link, NavLink } from "react-router-dom"
import './Euro.css'
import europaImg from '../../assets/destination/image-europa.png'


export default function Euro(){


    return(
        <div id="destination">
            <Navbar/>
            
            <div style={{width:'100%', paddingLeft:'10%', paddingRight:'10%', display:'flex', flexDirection:'column'}}>
                <h1 style={{
                    color: 'white',
                    marginBottom: '70px',
                    marginTop:'30px'
                }}>
                   01. Pick Your Destination
                </h1>
                
                <div style={{display:'flex'}}>
                    <p style={{width:'50%', display:'flex', justifyContent:'center', marginTop:'5%'}}>
                        <img id='euro' src={europaImg} alt="" />
                    </p>
                    
                    <div id="listePlanet" style={{display:'flex', flexDirection:'column', width:'50%'}}>
                        <div style={{display:'flex', gap:'5%', justifyContent:'center'}}>
                            <NavLink to="/destination/euro">Europa</NavLink>
                            <NavLink to="/destination/mars">Mars</NavLink>
                            <NavLink to="/destination/moon">Moon</NavLink>
                            <NavLink to="/destination/titan">Titan</NavLink>
                        </div>
                        <span style={{width:'50%', marginTop:'5%', color:'white', display:'flex', alignItems:'center', flexDirection:'column', marginLeft:'auto', marginRight:'auto'}}>
                        <p>
                        <h2 style={{fontSize:'75px' }}>
                            EUROPA <br /> <br />
                        </h2>

                                The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                                winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                                ice skating, curling, hockey, or simple relaxation in your snug 
                                wintery cabin.

                                Avg. distance
                                628 mil. km

                            <hr style={{color:'white', width:'400px'}} />

                            </p>
                                Est. travel time <br />
                                <p>
                                
                                3 days
                                </p>
                                
                            <p>
                        </p>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    )
}