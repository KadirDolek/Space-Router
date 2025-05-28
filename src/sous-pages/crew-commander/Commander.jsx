import Navbar from "../../sous-pages/Navbar/Navbar"
import { NavLink } from "react-router-dom"
import imgCommander from '../../assets/crew/image-douglas-hurley.png'
import './Commander.css'


export default function Commander(){
     return(
            <div id="crew">
                <Navbar/>
                <div style={{width:'100%', paddingLeft:'10%', paddingRight:'10%', display:'flex', flexDirection:'column'}}>
                    <h1 style={{
                        color: 'white',
                        marginBottom: '40px',
                        marginTop:'30px',
                        textAlign: 'left',
                        fontSize:'60px'
                    }}>
                        <span style={{opacity: '0.25'}}>02.</span> Meet your crew
                    </h1>

                    <div style={{display:'flex', flexWrap:'wrap'}}>
                        <span style={{
                            width:'500px', 
                            color:'white', 
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'flex-start',
                            marginLeft: '0',       
                            marginRight: 'auto'    
                        }}>
                            <p style={{fontSize:'65px', marginTop:'15%' }}>
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

                        <p style={{
                            width:'500px', 
                            display:'flex', 
                            justifyContent:'center', 
                            marginLeft:'auto', 
                            marginRight:'auto'
                        }}>
                            <img id='people' src={imgCommander} alt="" />
                        </p>
                    </div>
                </div>
            </div>
    )
}