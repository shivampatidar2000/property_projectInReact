import { useState } from "react";
import "./FirstDiv.css";
import { useNavigate } from "react-router-dom";

export default function FirstDiv() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container">
      <img
        className="img"
        src="https://static.wixstatic.com/media/82fcd3_1dcc53b4e88842c7816a8251e1102530~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_1780,h_652,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/82fcd3_1dcc53b4e88842c7816a8251e1102530~mv2_d_4896_3264_s_4_2.jpg"
        alt="Image"
      />

      <div className="centered">
        <p className="properties">New Properties</p>
        <p className="content">EXCLUSIVELY BY DWELL</p>
        <button onClick={ ()=> navigate("/properties")} className="buttonofExpolor">Explore</button>
      </div>
    </div>
  );
}
