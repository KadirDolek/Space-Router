import { Outlet, Link } from "react-router-dom"
import Navbar from "../../sous-pages/Navbar/Navbar"
import './Destination.css'






export default function Destination (){


    return(

            <div id="destination">
                <div>
                    <Outlet/>
                </div>
            </div>
    )
}