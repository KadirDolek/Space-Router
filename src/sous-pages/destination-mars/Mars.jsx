import Navbar from "../../sous-pages/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import marsImg from "../../assets/destination/image-mars.png";

export default function Mars() {
  return (
    <div id="destination">
      <Navbar />

      <div
        style={{
          width: "100%",
          paddingLeft: "10%",
          paddingRight: "10%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <h1
          style={{
            color: "white",
            marginBottom: "70px",
            marginTop: "30px",
          }}
        >
          01. Pick Your Destination
        </h1>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <p
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              marginTop: "5%",
              minWidth: "300px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "20%",
            }}
          >
            <img id="euro" src={marsImg} alt="" />
          </p>

          <div
            id="listePlanet"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              minWidth: "300px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{ display: "flex", gap: "5%", justifyContent: "center" }}
            >
              <NavLink to="/destination/euro">Europa</NavLink>
              <NavLink to="/destination/mars">Mars</NavLink>
              <NavLink to="/destination/moon">Moon</NavLink>
              <NavLink to="/destination/titan">Titan</NavLink>
            </div>
            <span
              style={{
                width: "50%",
                marginTop: "5%",
                color: "white",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <p>
                <h2 style={{ fontSize: "75px" }}>
                  MARS
                  <br /> <br />
                </h2>
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
                <hr /> <br />
                <p style={{ textAlign: "center" }}>Avg. distance 225 mil. km</p>
                <hr style={{ color: "white", width: "400px" }} />
              </p>
              Est. travel time <br />
              <p>9 months</p>
              <p></p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
