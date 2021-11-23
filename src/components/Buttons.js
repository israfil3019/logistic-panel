import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Buttons = () => {
  return (
    <div id="navbar_alt">
      <Dropdown className="m-1">
        <Dropdown.Toggle
          className="btn btn-lg "
          variant="primary"
          id="dropdown-basic"
        >
          Şube
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Şube-1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Şube-2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Link
        to="/operasyon/zone-group"
      >
        <button type="button" className="btn btn-lg bg-white text-primary m-1">
          Zone Grup
        </button>
      </Link>

      <Link to="/operasyon/zone">
        <button type="button" className="btn btn-lg bg-white text-primary m-1">
          Zone
        </button>
      </Link>

      <Link to="/operasyon/time-zone">
        <button type="button" className="btn btn-lg bg-white text-primary m-1">
          Time Zone
        </button>
      </Link>

      <Link to="/operasyon/arac">
        <button type="button" className="btn btn-lg bg-white text-primary m-1">
          Araç
        </button>
      </Link>

      <Link to="/operasyon/kurye">
        <button type="button" className="btn btn-lg bg-white text-primary m-1">
          Kurye
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
