import Navbar from "../../sous-pages/Navbar/Navbar"
import { Outlet, Link, NavLink } from "react-router-dom"
import titanImg from '../../assets/destination/image-titan.png'

export default function Moon(){
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
                        <img id='euro' src={titanImg} alt="" />
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
                            TITAN<br /> <br />
                        </h2>

                                The only moon known to have a dense atmosphere other than Earth, Titan 
                                is a home away from home (just a few hundred degrees colder!). As a 
                                bonus, you get striking views of the Rings of Saturn.

                                Avg. distance
                                1.6 bil. km

                            <hr style={{color:'white', width:'400px'}} />

                            </p>
                                Est. travel time <br />
                                <p>
                                
                                7 years
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