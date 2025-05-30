import { Outlet, Link } from "react-router-dom";
import Navbar from "../../sous-pages/Navbar/Navbar";
import "./Destination.css";

export default function Destination() {
  return (
    <div id="destination">
      <div>
        <Outlet />{" "}
        {/* Tu peux supprimer les div's entourantes l'Outlet car elles
        ne font rien et prennent inutilement de la place dans ton précieux code. Ce component
        'Destination' joue le rôle d'un "coordinateur" qui va renvoyer l'utilisateur vers
        les sous-pages indiquées dans ton main.jsx, grâce à l'Outlet*/}
      </div>
    </div>
  );
}
