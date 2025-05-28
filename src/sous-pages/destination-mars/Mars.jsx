import Navbar from "../../sous-pages/Navbar/Navbar"
import { Outlet, Link } from "react-router-dom"
import marsImg from '../../assets/destination/image-mars.png'

export default function Mars(){


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
                                        Mars: <br /> <br />
                                    </p>
                                        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                                        the tallest planetary mountain in our solar system. It’s two and a half times 
                                        the size of Everest!

                                        Avg. distance
                                        225 mil. km

                                        Est. travel time
                                        9 months
                                </span>
                                <p style={{width:'50%', marginTop:'10%', display:'flex', justifyContent:'center'}}>
                                    <img id='euro' src={marsImg} alt="" />
                                </p>
                            </div>
                        </div>
)
}