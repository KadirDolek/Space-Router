import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Tech from "./pages/Tech/Tech";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Euro from "./sous-pages/destination-euro/Euro";
import Mars from "./sous-pages/destination-mars/Mars";
import Titan from "./sous-pages/destination-titan/Titan";
import Moon from "./sous-pages/destination-moon/Moon";
import Commander from "./sous-pages/crew-commander/Commander";
import Engineer from "./sous-pages/crew-engineer/Engineer";
import Pilot from "./sous-pages/crew-pilot/Pilot";
import Spec from "./sous-pages/crew-spec/Spec";
import Capsule from "./sous-pages/tech-capsule/Capsule";
import Space from "./sous-pages/tech-space/Space";
import Vehicules from "./sous-pages/tech-vehicules/Vehicules";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}>
          <Route index element={<Euro />} />
          <Route path="euro" element={<Euro />} />
          <Route path="mars" element={<Mars />} />
          <Route path="titan" element={<Titan />} />
          <Route path="moon" element={<Moon />} />
        </Route>
        <Route path="/crew" element={<Crew />}>
          <Route index element={<Commander />} />
          <Route path="commander" element={<Commander />} />
          <Route path="engineer" element={<Engineer />} />
          <Route path="pilot" element={<Pilot />} />
          <Route path="spec" element={<Spec />} />
        </Route>
        <Route path="/tech" element={<Tech />}>
          <Route index element={<Capsule />} />
          <Route path="capsule" element={<Capsule />} />
          <Route path="space" element={<Space />} />
          <Route path="vehicules" element={<Vehicules />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
