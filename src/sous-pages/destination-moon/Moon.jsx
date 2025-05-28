import Navbar from "../../sous-pages/Navbar/Navbar"
import { Outlet, Link } from "react-router-dom"
import moonImg from '../../assets/destination/image-moon.png'


export default function Moon(){



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
                            Moon: <br /> <br />
                        </p>
                            See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                            regain perspective and come back refreshed. While you’re there, take in some history 
                            by visiting the Luna 2 and Apollo 11 landing sites.

                            Avg. distance
                            384,400 km

                            Est. travel time
                            3 days
                    </span>
                    <p style={{width:'50%', marginTop:'10%', display:'flex', justifyContent:'center'}}>
                        <img id='euro' src={moonImg} alt="" />
                    </p>
                </div>
            </div>
    )
}