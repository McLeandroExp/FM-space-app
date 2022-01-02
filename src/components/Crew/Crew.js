import React, { useState, useLayoutEffect, useContext, useEffect } from "react";
import { Header } from "../header/Header";
import { Menu } from "../menu/Menu";
import { crew } from "../../data/data.json";
import { MenuContext } from "../menu/MenuContext";

export const Crew = () => {
  const { setIdxPage } = useContext(MenuContext);
  useEffect(() => {
    setIdxPage(2);
  });

  const [crewPos, setcrewPos] = useState(0);
  useLayoutEffect(() => {
    const selected = document.querySelectorAll(".carousel-crew-item");
    selected.forEach((item, i) => {
      i === crewPos
        ? item.classList.add("crew-obscurecido")
        : item.classList.remove("crew-obscurecido");
    });
  }, [crewPos]);

  return (
    <div className="crew">
      <Header />
      <Menu />
      <h2 className="crew-title">
        <span className="ti-number">02</span> Meet your Crew
      </h2>
      <section className="crew__content">
        <div className="crew-image animate__animated animate__backInUp">
          <img src={crew[crewPos].images.webp} alt={crew[crewPos].name} />
        </div>
        <section className="crew__info__container">
          <ul className="carousel-crew">
            {crew.map((astronaut, i) => (
              <li
                className="carousel-crew-item"
                key={astronaut.name}
                onClick={() => setcrewPos(i)}
              ></li>
            ))}
          </ul>
          <article className="crew-info">
            <h3 className="astronaut-position">{crew[crewPos].role}</h3>
            <h2 className="astronaut-name">{crew[crewPos].name}</h2>
            <p className="astronaut-info">{crew[crewPos].bio}</p>
          </article>
        </section>
      </section>
    </div>
  );
};
