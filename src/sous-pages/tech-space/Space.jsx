import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import spaceImg from '../../assets/technology/image-spaceport-portrait.jpg'


export default function Space(){



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
                            Space: <br /> <br />
                        </p>
                           The terminology...
                            Spaceport

                            A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                            by analogy to the seaport for ships or airport for aircraft. Based in the 
                            famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                            of the Earth’s rotation for launch.
                    </span>
                    <p style={{width:'50%', marginTop:'10%', display:'flex', justifyContent:'center'}}>
                        <img id='euro' src={spaceImg} alt="" />
                    </p>
                </div>
            </div>
    )
}
