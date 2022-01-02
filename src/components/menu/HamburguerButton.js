import React, { useContext } from "react";
import {MenuContext} from './MenuContext'

export const HamburguerButton = () => {
  const {isActive, handleActive } = useContext(MenuContext)
  return (
    <button
      className={`hamburger-btn hamburger hamburger--collapse ${!isActive ? 'is-active': ''}`}
      type="button"
      onClick={handleActive}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};
