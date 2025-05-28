import Navbar from "../../sous-pages/Navbar/Navbar"
import { Link } from "react-router-dom"
import imgCommander from '../../assets/crew/image-douglas-hurley.png'
import './Commander.css'


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
                           Commander: <br /> <br />
                        </p>
                            Douglas Hurley

                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                            and former NASA astronaut. He launched into space for the third time as 
                            commander of Crew Dragon Demo-2.
                    </span>    
                    <p style={{width:'50%', marginTop:'10%', display:'flex', justifyContent:'center'}}>
                        <img id='people' src={imgCommander } alt="" />
                    </p>
                </div>
            </div>
    )
}