import styled from "./Second.module.css";

export default function SecondDiv() {
  return (
    <div className={styled.mainDiv}>
      <p className={styled.lookingFor}>WHAT ARE YOU LOOKING FOR?</p>

      <div className={styled.section}>
        <div className={styled.card}>
          <img
            src="https://static.wixstatic.com/media/82fcd3_48d7bda4accf4beea4cad4e58588a4c6~mv2_d_3000_2002_s_2.jpg/v1/fill/w_490,h_402,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/82fcd3_48d7bda4accf4beea4cad4e58588a4c6~mv2_d_3000_2002_s_2.jpg"
            alt="buy"
          />
          <div className={`${styled.overlay} ${styled.overlayBlue}`}></div>
          <span className={styled.text}>Buy</span>
        </div>

        <div className={styled.card}>
          <img
            src="https://static.wixstatic.com/media/82fcd3_5a0a204eb6d04dd7b6e8685c35d8691b~mv2_d_3000_2000_s_2.jpg/v1/fill/w_493,h_402,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/82fcd3_5a0a204eb6d04dd7b6e8685c35d8691b~mv2_d_3000_2000_s_2.jpg"
            alt="rent"
          />
          <div className={`${styled.overlay} ${styled.overlayRed}`}></div>
          <span className={styled.text}>Rent</span>
        </div>
      </div>
    </div>
  );
}
