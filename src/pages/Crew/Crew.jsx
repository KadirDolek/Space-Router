import { Outlet, Link } from "react-router-dom"
import Navbar from "../../sous-pages/Navbar/Navbar"
import './Crew.css'





export default function Destination (){


    return(

            <div id="crew">
                <div>
                    <Outlet/>
                </div>
            </div>
    )
}