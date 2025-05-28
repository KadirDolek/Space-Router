import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import vehiculeImg from '../../assets/technology/image-launch-vehicle-portrait.jpg'


export default function Vehicules(){



     return(

            <div id="tech">
                <Navbar/>
                <div id="listePlanet">
                    <Link to="/tech/capsule">Capsule</Link>
                    <Link to="/tech/space">Space</Link>
                    <Link to="/tech/vehicules">Vehicules</Link>
                </div>
                <div style={{width:'100%', paddingLeft:'10%', paddingRight:'10%', display:'flex'}}>
                    <span style={{width:'50%', marginTop:'10%', color:'white', display:'flex', alignItems:'center', flexDirection:'column'}}>
                        <p style={{fontSize:'25px'}}>
                            Vehicules: <br /> <br />
                        </p>
                              The terminology...
                                Launch vehicle

                                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                                payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                                WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                                it's quite an awe-inspiring sight on the launch pad!
                    </span>
                    <p style={{width:'50%', marginTop:'10%', display:'flex', justifyContent:'center'}}>
                        <img id='euro' src={vehiculeImg} alt="" />
                    </p>
                </div>
            </div>
    )
}