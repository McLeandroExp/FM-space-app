import React, { useState } from "react";
import { MenuContext } from "./components/menu/MenuContext";
import { AppRouter } from "./routers/AppRouter";

export const TourismApp = () => {
  const [isActive, setIsActive] = useState(true);
  const [idxPage, setIdxPage] = useState(0)
  const handleActive = (trueVal) => {
    if (typeof trueVal === "boolean") {
      setIsActive(trueVal);
    } else {
      setIsActive((active) => !active);
    }
  };
  return (
    <MenuContext.Provider value={{ isActive, handleActive, idxPage, setIdxPage }}>
      <AppRouter />
    </MenuContext.Provider>
  );
};
