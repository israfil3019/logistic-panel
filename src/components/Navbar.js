import React, { useEffect, useState } from "react";
import logo from "../assets/poshta_logo.png";
import avatar from "../assets/avatar.jpg";
import { FaPowerOff } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { useHistory } from "react-router";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [token, removeToken] = useCookies(["mytoken"]);
  let history = useHistory();
  const [user, setUser] = useState();

  const handleLogout = () => {
    removeToken(["mytoken"]);
    if (token["mytoken"]) {
      history.push("/");
    }
    localStorage.removeItem("newUser");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("newUser")));
  }, [setUser]);

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
            {user?.photo ? (
              <img src={user?.photo} alt="avatar" />
            ) : (
              <img src={avatar} alt="avatar" />
            )}
          </div>
          <div>{user?.name ? <p>{user.name}</p> : <p>İsimsiz isim</p>}</div>
        </div>
        <div>
          <button onClick={handleLogout} className="btn rounded-circle">
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
