import { Link, Outlet } from "react-router-dom"
import Navbar from "../../sous-pages/Navbar/Navbar"
import './Tech.css'




export default function Destination (){


    return(

            <div id="tech">
                <div>
                    <Outlet/>
                </div>
            </div>
    )
}