import Navbar from "../../sous-pages/Navbar/Navbar"
import { Outlet, Link } from "react-router-dom"
import './Euro.css'
import europaImg from '../../assets/destination/image-europa.png'

export default function Euro(){



    return(

            <div id="destination">
                <Navbar/>
                <div id="listePlanet">
                    <Link to="/destination/euro">Europa</Link>
                    <Link to="/destination/mars">Mars</Link>
                    <Link to="/destination/moon">Moon</Link>
                    <Link to="/destination/titan">Titan</Link>
                </div>
                <div style={{width:'100%', paddingLeft:'10%', paddingRight:'10%', display:'flex'}}>
                    <span style={{width:'50%', marginTop:'10%', color:'white', display:'flex', alignItems:'center', flexDirection:'column'}}>
                        <p style={{fontSize:'25px'}}>
                            Europa: <br /> <br />
                        </p>

                        The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                        winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                        ice skating, curling, hockey, or simple relaxation in your snug 
                        wintery cabin.

                        Avg. distance
                        628 mil. km

                        Est. travel time
                        3 years
                    </span>
                    <p style={{width:'50%', marginTop:'10%', display:'flex', justifyContent:'center'}}>
                        <img id='euro' src={europaImg} alt="" />
                    </p>
                </div>
            </div>
)
}