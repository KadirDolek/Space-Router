import { Link } from 'react-router-dom'
import Navbar from '../../sous-pages/Navbar/Navbar'
import './Home.css'





export default function Home(){




    return(
        <>
            <div id='home'>
                <Navbar/>
                <p style={{marginTop:'17.5%'}}>
                    So, you want to travel to Space
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                </p>
                <Link to="/destination" id='explore'>Explore</Link>
            
            </div>
        </>
    )
}