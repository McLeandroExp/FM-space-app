import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "./MenuContext";
export const Menu = () => {
  const {isActive,handleActive} = useContext(MenuContext);
  return (
    <nav className= {`menu animate__animated animate__fadeInRight ${isActive ? 'ocultar':'regresar'}`}>
      <ul className={`menu-container ${isActive ? 'ocultar-m':'regresar-m'}`}>
        <li className="menu-item" onClick={()=> {handleActive()}}>
          <NavLink className="navlinkstyle" to="/home"><span className="navlink-number">00</span> Home</NavLink>
        </li>
        <li className="menu-item" onClick={()=> {handleActive()}}>
          <NavLink className="navlinkstyle" to="/destination"><span className="navlink-number">01</span> Destination</NavLink>
        </li>
        <li className="menu-item" onClick={()=> {handleActive()}}>
          <NavLink className="navlinkstyle" to="/crew"><span className="navlink-number">02</span> Crew</NavLink>
        </li>
        <li className="menu-item" onClick={(e)=> {handleActive()}}>
          <NavLink className="navlinkstyle" to="/technology"><span className="navlink-number">03</span> Technology</NavLink>
        </li>
      </ul>
    </nav>
  );
};
