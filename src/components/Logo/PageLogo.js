import React from "react";
import logo from '../../assets/shared/logo.svg'
import {useNavigate} from 'react-router-dom'
export const PageLogo = () => {
  const navigate = useNavigate()
  return (
    <figure className="logo" onClick={()=> {navigate('./../home')}}>
      <img src={logo} alt="logo" className="logo-img" />
    </figure>
  );
};
