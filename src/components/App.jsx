import { Outlet } from "react-router-dom";

import Nav from "./nav/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
