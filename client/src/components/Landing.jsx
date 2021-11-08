import { Link } from "react-router-dom";
import { LandingCss, LandingButtonCss, LandingTitleCss } from "./styles/LandingCss";



const Landing = () => {
  return (
    <LandingCss>
      <LandingTitleCss>Videogames Site</LandingTitleCss>
      <Link to="/home">
        <LandingButtonCss>
          Continue
        </LandingButtonCss>
      </Link>
    </LandingCss>
  );
}

export default Landing;