import Navbar from "../../sous-pages/Navbar/Navbar"

import imgEngineer from '../../assets/crew/image-anousheh-ansari.png'
import { NavLink } from "react-router-dom"



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
                            <p style={{fontSize:'60px', marginTop:'15%' }}>
                               <p style={{marginBottom:'0'}}>
                                Flight Engineer
                                </p>
                                <p style={{marginTop:'0'}}>
                                    Anousheh Ansari
                                </p>
                            </p>

                                Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                                Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                                fly to the ISS, and the first Iranian in space.
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
                            <img id='people' src={imgEngineer} alt="" />
                        </p>
                    </div>
                </div>
            </div>
    )
}