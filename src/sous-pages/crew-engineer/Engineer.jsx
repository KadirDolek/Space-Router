import Navbar from "../../sous-pages/Navbar/Navbar"
import { Link } from "react-router-dom"
import imgEngineer from '../../assets/crew/image-anousheh-ansari.png'



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
                           Engineer: <br /> <br />
                        </p>
                            
                            Flight Engineer
                            Anousheh Ansari

                            Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                            Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                            fly to the ISS, and the first Iranian in space. 
                    </span>    
                    <p style={{width:'50%', marginTop:'10%', display:'flex', justifyContent:'center'}}>
                        <img id='people' src={imgEngineer } alt="" />
                    </p>
                </div>
            </div>
    )
}