import SearchBar from "./SearchBar";
import { NavBarCss, NavBarLinks } from "./styles/NavBarCss";
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <NavBarCss>
      <p>logo</p>
      <NavBarLinks>
        <NavLink to="/home">
          Home
        </NavLink>
        <NavLink to="/addGame">
          Add Game
        </NavLink>
      </NavBarLinks>
      <SearchBar />
    </NavBarCss>
  );
}

export default NavBar;