import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import capsuleImg from '../../assets/technology/image-space-capsule-portrait.jpg'


export default function Capsule(){



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
                            Capsule: <br /> <br />
                        </p>
                            Space capsule

                            A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                            capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                            you'll spend your time during the flight. It includes a space gym, cinema, 
                            and plenty of other activities to keep you entertained.
                    </span>
                    <p style={{width:'50%', marginTop:'10%', display:'flex', justifyContent:'center'}}>
                        <img id='euro' src={capsuleImg} alt="" />
                    </p>
                </div>
            </div>
    )
}