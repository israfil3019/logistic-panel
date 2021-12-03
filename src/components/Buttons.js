import React from "react";
import { Link } from "react-router-dom";
import DropdownSube from './DropdownSube'
const Buttons = () => {
  return (
    <div id="navbar_alt">
      <DropdownSube/>
      <Link
        to="/operasyon/zone-group"
      >
        <button type="button" id='bg_slider' className="btn btn-lg bg-white text-primary m-1">
          Zone Grup
        </button>
      </Link>

      <Link to="/operasyon/zone">
        <button type="button" id='bg_slider' className="btn btn-lg bg-white text-primary m-1">
          Zone
        </button>
      </Link>

      <Link to="/operasyon/time-zone">
        <button type="button" className="btn btn-lg bg-white text-primary m-1">
          Time Zone
        </button>
      </Link>

      <Link to="/operasyon/arac">
        <button type="button" id='bg_slider' className="btn btn-lg bg-white text-primary m-1">
          Araç
        </button>
      </Link>

      <Link to="/operasyon/kurye">
        <button type="button" id='bg_slider' className="btn btn-lg bg-white text-primary m-1">
          Kurye
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
