import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import spaceImg from '../../assets/technology/image-spaceport-portrait.jpg'


export default function Capsule(){
     return(
            <div id="crew">
                <Navbar/>
                <div style={{width:'100%', paddingLeft:'10%', paddingRight:'10%', display:'flex', flexDirection:'column'}}>
                    <h1 style={{
                        color: 'white',
                        marginBottom: '40px',
                        marginTop:'30px',
                        textAlign: 'left',
                        fontSize:'40px'
                    }}>
                        <span style={{opacity: '0.25'}}>03.</span> Space Your Launch
                    </h1>

                    <div style={{display:'flex', flexWrap:'wrap', marginRight:'30px'}}>
                        <div id="linkCrew" style={{
                            display: 'flex',
                            flexDirection: 'column', 
                            gap: '20px',             
                            marginRight: '60px',
                            marginTop: '80px',
                            justifyContent:'flex-start',
                            alignItems:'center'     
                        }}>
                            <NavLink to="/tech/capsule" className={({isActive}) => 
                                                            isActive ? "tech-link active" : "tech-link"
                                                        }>1</NavLink>
                                                        <NavLink to="/tech/space" className={({isActive}) => 
                                                            isActive ? "tech-link active" : "tech-link"
                                                        }>2</NavLink>
                                                        <NavLink to="/tech/vehicules" className={({isActive}) => 
                                                            isActive ? "tech-link active" : "tech-link"
                                                        }>3</NavLink>
                                                    </div>
                            
                                                    <span style={{
                                                        width:'500px', 
                                                        color:'white', 
                                                        display:'flex',
                                                        flexDirection:'column',
                                                        alignItems:'flex-start',
                                                        marginLeft: '0',       
                                                        marginRight: 'auto'    
                                                    }}>
                                                        <p style={{fontSize:'30px', marginTop:'15%' }}>
                                                            <p style={{marginTop:'0'}}>
                                                               The terminology...
                                                            </p>
                                                        </p>
                                                            <p style={{fontSize:'60px'}}>
                                                                Spaceport
                                                            </p>
                            
                                                            A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                                                            by analogy to the seaport for ships or airport for aircraft. Based in the 
                                                            famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                                                            of the Earth’s rotation for launch.
                                                        
                                                    </span>
                            
                                                    <p style={{
                                                        width:'500px', 
                                                        display:'flex', 
                                                        justifyContent:'center', 
                                                        marginLeft:'auto', 
                                                        marginRight:'auto'
                                                    }}>
                                                        <img id='people' src={spaceImg} alt="" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                )
                            }
