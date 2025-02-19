import { useState } from "react";

import Header from "../components/header";
import Mobilemenu from "../components/Mobilemenu";
import Hero from "../components/main/Hero";

import logoKofee from '../src/assets/icons/logo-kofee.svg';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu(!showMenu);

  const logo = logoKofee;
  const link = [
    { label: "About Us", href: "#abouts" },
    { label: "Menu", href: "#menu" },
    { label: "Reservation", href: "#reservation" }
  ];

  return (
    <div className="m-0 p-0 box-border bg-background">
      <Header linkNav={link} logoWeb={logo} handleShowMenu={handleShowMenu} />
      {showMenu && <Mobilemenu linkNav={link} handleClose={handleShowMenu} />}

      <Hero />
    </div>
  );
}

export default App;