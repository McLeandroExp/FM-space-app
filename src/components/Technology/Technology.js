import React, { useState, useLayoutEffect, useEffect, useContext } from "react";
import { Header } from "../header/Header";
import { Menu } from "../menu/Menu";
import { technology } from "../../data/data.json";
import { MenuContext } from "../menu/MenuContext";

export const Technology = () => {
  const { setIdxPage } = useContext(MenuContext);
  useEffect(() => {
    setIdxPage(3);
  });

  const [crewPos, setcrewPos] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const resizeScreenFunc = () => setScreenWidth(window.screen.width);
  const minScreenSize = 768;

  useLayoutEffect(() => {
    const selected = document.querySelectorAll(".carousel-technology-item");
    selected.forEach((item, i) => {
      i === crewPos
        ? item.classList.add("item-technology-selected")
        : item.classList.remove("item-technology-selected");
    });
  }, [crewPos]);

  useEffect(() => {
    window.addEventListener("resize", resizeScreenFunc);
    return () => {
      window.removeEventListener("resize", resizeScreenFunc);
    };
  }, [screenWidth]);

  return (
    <div className="technology">
      <Header />
      <Menu />
      <h3 className="technology__intro">
        <span className="ti-number">03</span> Space Launch 101
      </h3>
      <section className="technology__content">
        <article className="technology-image">
          <img
            src={
              screenWidth < minScreenSize
                ? technology[crewPos].images.landscape
                : technology[crewPos].images.portrait
            }
            alt={technology[crewPos].name}
          />
        </article>

        <article className="technology-info">
          <ul className="carousel-technology">
            {technology.map((destination, i) => (
              <li
                className="carousel-technology-item"
                key={destination.name}
                onClick={() => setcrewPos(i)}
              >
                {i + 1}
              </li>
            ))}
          </ul>
          <div className="technology-specifications">
            <h4 className="terminology">the terminology...</h4>
            <h2 className="technology-name">{technology[crewPos].name}</h2>
            <p className="technology-description">
              {technology[crewPos].description}
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};
