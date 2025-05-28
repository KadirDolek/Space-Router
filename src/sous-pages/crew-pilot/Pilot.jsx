import Navbar from "../../sous-pages/Navbar/Navbar"
import { NavLink } from "react-router-dom"
import imgPilot from '../../assets/crew/image-victor-glover.png'



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
                                Pilot
                                </p>
                                <p style={{marginTop:'0'}}>
                                    Victor Glover
                                </p>
                            </p>       
                                Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                                International Space Station. Glover is a commander in the U.S. Navy where 
                                he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                                station systems flight engineer. 
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
                            <img id='people' src={imgPilot} alt="" />
                        </p>
                    </div>
                </div>
            </div>
    )
}