import Navbar from "../../sous-pages/Navbar/Navbar"

import imgEngineer from '../../assets/crew/image-anousheh-ansari.png'
import { NavLink } from "react-router-dom"



export default function Engineer(){
     return(

            <div id="crew">
                <Navbar/>
                <div style={{width:'100%', paddingLeft:'10%', paddingRight:'10%', display:'flex', flexWrap:'wrap'}}>
                    <h1 style={{
                    color: 'white',
                    marginBottom: '70px',
                    marginTop:'30px'
                }}>
                   02. Meet your crew
                </h1>
                    <span style={{width:'500px', marginTop:'10%', color:'white', display:'flex', alignItems:'center', flexDirection:'column', marginLeft:'auto', marginRight:'auto'}}>
                        <p style={{fontSize:'65px' }}>
                           <p style={{marginBottom:'0'}}>
                            Commander:
                            </p>
                            <p style={{marginTop:'0'}}>
                                Douglas Hurley
                            </p>
                        </p>
                            

                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                            and former NASA astronaut. He launched into space for the third time as 
                            commander of Crew Dragon Demo-2.
                            <div id="linkCrew">
                                <NavLink to="/crew/commander">O</NavLink>
                                <NavLink to="/crew/engineer">O</NavLink>
                                <NavLink to="/crew/pilot">O</NavLink>
                                <NavLink to="/crew/spec">O</NavLink>
                            </div>
                    </span>   
                     
                    
                    <p style={{width:'500px', marginTop:'7%', display:'flex', justifyContent:'center', marginLeft:'auto', marginRight:'auto'}}>
                        <img id='people' src={imgEngineer} alt="" />
                    </p>
                
                </div>
            </div>
    )
}