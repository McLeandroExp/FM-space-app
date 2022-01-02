import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { PageLogo } from "../Logo/PageLogo";
import { HamburguerButton } from "../menu/HamburguerButton";
import { MenuContext } from "../menu/MenuContext";

export const Header = () => {
  const minWidth = 580;
  const { handleActive } = useContext(MenuContext);
  const {idxPage} = useContext(MenuContext)
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  
  const resizeScreenFunc = () => {
    setScreenWidth(window.screen.width);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeScreenFunc);
    return () => {
      window.removeEventListener("resize", resizeScreenFunc);
    };
  }, [screenWidth]);
  useEffect(() => {
    if (screenWidth > minWidth) {
      handleActive(false);
    }
  }, [handleActive, screenWidth]);
  useLayoutEffect(() => {
    const elementosMenu = document.querySelectorAll(".menu-item");
    elementosMenu.forEach((el, i) => {
      idxPage === i
      ? el.classList.add("selected")
      : el.classList.remove("selected")
    });
  }, [idxPage]);
  return (
    <header>
      <PageLogo />
      {screenWidth < minWidth && <HamburguerButton />}
    </header>
  );
};
