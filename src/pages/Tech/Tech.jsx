import { Link, Outlet } from "react-router-dom"
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