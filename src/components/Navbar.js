import React, { useState, useContext } from "react";
import logo from "../assets/poshta_logo.png";
import avatar from "../assets/avatar.jpg";
import { FaPowerOff } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { useHistory } from "react-router";
import { useCookies } from "react-cookie";


const Navbar = () => {
  const [token, setToken, removeToken] = useCookies(['mytoken']);
  let history = useHistory()
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

  const handleLogout = () => {
    if(token['mytoken']){
      history.push('/')
    }
    removeToken(['mytoken'])
  }
  return (
    <div className="mybar">
      <div className="poshta_logo">
        <img className="poshta_img" src={logo} alt="logo"></img>
        <span>1 Nolu Şube</span>
      </div>
      <div className="navbar_list">
        <div>
          <NavLink
            id="operation_link"
            exact
            activeClassName="active"
            to="/operasyon"
          >
            Operasyon
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/canli-ekran">
            Canlı Ekran
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/manifesto">
            Manifestolar
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/time-zone">
            Time Zonelar
          </NavLink>
        </div>
        <div>
          <NavLink activeClassName="active" to="/zone-plan">
            Zone Planlama
          </NavLink>
        </div>
      </div>

      <div className="navbar_right">
        <div className="kullanici_bilgiler">
          <div>
            <img src={kullanici[0].resim} alt="avatar" />
          </div>
          <div>
            <p>{kullanici[0].isim}</p>
          </div>
        </div>
        <div>
          <button  onClick={handleLogout} className="btn rounded-circle">
            <IconContext.Provider value={{ className: "top-react-icons" }}>
              <FaPowerOff />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
