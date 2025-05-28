import Navbar from "../../sous-pages/Navbar/Navbar"
import { Link } from "react-router-dom"
import imgSpec from '../../assets/crew/image-mark-shuttleworth.png'



export default function Moon(){



     return(

            <div id="crew">
                <Navbar/>
                <div id="listePlanet">
                    
                    <Link to="/crew/commander">Commander</Link>
                    <Link to="/crew/engineer">Engineer</Link>
                    <Link to="/crew/pilot">Pilot</Link>
                    <Link to="/crew/spec">Spec</Link>
                </div>
                <div style={{width:'100%', paddingLeft:'10%', paddingRight:'10%', display:'flex'}}>
                    <span style={{width:'50%', marginTop:'10%', color:'white', display:'flex', alignItems:'center', flexDirection:'column'}}>
                        <p style={{fontSize:'25px'}}>
                          Mission Specialist: <br /> <br />
                        </p>
                              
                        Mark Shuttleworth

                        Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                        the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                        African to travel to space as a space tourist.
                    </span>    
                    <p style={{width:'50%', marginTop:'10%', display:'flex', justifyContent:'center'}}>
                        <img id='people' src={imgSpec} alt="" />
                    </p>
                </div>
            </div>
    )
}