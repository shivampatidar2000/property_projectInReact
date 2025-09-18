import styled from "./Footer.module.css";
import logo from "../assets/images/logoImage.png"
import facebook from "../assets/images/facebook.png"
import twitter from "../assets/images/twitter.png"
import youtube from "../assets/images/youtube.png"
import linkedin from "../assets/images/linkedin.png"

export default function Footer() {
  return (
    <footer className={styled.mainFooter}>
      <div className={styled.brand}>
        <img src={logo} alt="logo" />
        <p className={styled.logoname}>
          DWELL <span>PROPERTIES</span>
        </p>
      </div>

      <div className={styled.linksSection}>
        <ul className={styled.navLinks}>
          <li><a href="/">Home</a></li> <br />
          <li><a href="/Properties">Properties</a></li> <br />
          <li><a href="/news">News</a></li> <br />
          <li><a href="/team">Team</a></li> <br />
          <li><a href="contectUs">Contact</a></li> <br />
        </ul>

        <p className={styled.address}>
          500 Terry Francine Street <br />
          San Francisco, CA 94158 <br />
          info@mysite.com <br />
            <ul className={styled.social}>
          <li className={styled.imgforsocial}>
            <img src={facebook} alt="facebook" />
          </li>
          <li className={styled.imgforsocial}>
            <img src={twitter} alt="twitter" />
          </li>
          <li className={styled.imgforsocial}>
            <img src={youtube} alt="youtube" />
          </li>
          <li className={styled.imgforsocial}>
            <img src={linkedin} alt="linkedin" />
          </li>
        </ul>
        </p>
      </div>
    </footer>
  );
}
