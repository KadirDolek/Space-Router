import Navbar from "../../sous-pages/Navbar/Navbar"
import { Outlet, Link } from "react-router-dom"
import titanImg from '../../assets/destination/image-titan.png'

export default function Titan(){



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
                            Titan: <br /> <br />
                        </p>
                            The only moon known to have a dense atmosphere other than Earth, Titan 
                            is a home away from home (just a few hundred degrees colder!). As a 
                            bonus, you get striking views of the Rings of Saturn.

                            Avg. distance
                            1.6 bil. km

                            Est. travel time
                            7 years
                    </span>
                    <p style={{width:'50%', marginTop:'10%', display:'flex', justifyContent:'center'}}>
                        <img id='euro' src={titanImg} alt="" />
                    </p>
                </div>
            </div>
    )
}