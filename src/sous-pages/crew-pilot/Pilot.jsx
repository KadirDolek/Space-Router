import Navbar from "../../sous-pages/Navbar/Navbar"
import { Link } from "react-router-dom"
import imgPilot from '../../assets/crew/image-victor-glover.png'



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
                           Pilot: <br /> <br />
                        </p>
                             
                            Victor Glover

                            Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                            International Space Station. Glover is a commander in the U.S. Navy where 
                            he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                            station systems flight engineer. 
                    </span>    
                    <p style={{width:'50%', marginTop:'10%', display:'flex', justifyContent:'center'}}>
                        <img id='people' src={imgPilot } alt="" />
                    </p>
                </div>
            </div>
    )
}