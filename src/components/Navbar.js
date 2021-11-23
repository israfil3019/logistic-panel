import React, { useState, useContext } from "react";
import logo from "../assets/poshta_logo.png";
import avatar from "../assets/avatar.jpg";
import { RiShutDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { CargoContext } from "../context/CargoContext";
import { IconContext } from "react-icons";

const Navbar = (props) => {
  const [cargos, SetCargos] = useContext(CargoContext);
  const [kullanici, setKullanici] = useState([
    {
      resim: avatar,
      isim: "Mehmet Yıldırım",
      numara: 533333333,
    },
    {
      resim: avatar,
      isim: "veli velice",
      numara: 544444444,
    },
  ]);
  return (
    <div className="mybar">
      <div className="logo">
        <img className="img" src={logo} alt="logo"></img>
        <span>1 Nolu Şube</span>
      </div>
      <ul className='navbar_list'>
        <li>
          <NavLink exact activeClassName="active" to="/operasyon">
            Operasyon
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/canli-ekran">
            Canlı Ekran
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/manifesto">
            Manifestolar
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/time-zone">
            Time Zonelar
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/zone-plan">
            Zone Planlama
          </NavLink>
        </li>
      </ul>

      <div className="navbar_right">
        <div className="kullanici_bilgiler">
          <img src={kullanici[0].resim} alt="avatar" />
          <p>{kullanici[0].isim}</p>
        </div>
        <div>
          <button className='btn rounded-circle'>
            <IconContext.Provider value={{ className: "top-react-icons" }}>
              <RiShutDownLine/>
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
