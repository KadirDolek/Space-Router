import { Link } from 'react-router-dom'
import Navbar from '../../sous-pages/Navbar/Navbar'
import './Home.css'





export default function Home(){




    return(
        <>
            <div id='home'>
                <Navbar/>
                <div className="home-content">
                    <div className="home-flex">
                        <div className="home-text">
                            <p id='titreHome' style={{ marginTop: '17.5%', display:'flex', flexDirection:'column', textAlign:'center' }}>
                              <div>
                                    <h2 id='h2home'>
                                        So, you want to travel to     
                                    </h2>
                                    <h1 style={{ fontSize: '90px', marginBottom:'60px', marginTop:'60px' }}>SPACE</h1>
                              </div>
                              <div id='textHome' style={{ fontSize: '15px' }}>
                                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                                    because we’ll give you a truly out of this world experience!
                              </div>
                            </p>
                        </div>
                        <div id='idexplore'>
                            <a id="explore" href="/destination">Explorer</a>
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    )
}