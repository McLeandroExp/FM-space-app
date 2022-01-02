import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Header } from "../header/Header";
import { Menu } from "../menu/Menu";
import { destinations } from "../../data/data.json";
import { MenuContext } from "../menu/MenuContext";
export const Destination = () => {
  const { setIdxPage } = useContext(MenuContext);
  useEffect(() => {
    setIdxPage(1);
  });
  const [locationPos, setlocationPos] = useState(0);
  const locations = ["moon", "mars", "europa", "titan"];
  useLayoutEffect(() => {
    const selected = document.querySelectorAll(".galery__location");
    selected.forEach((item, i) => {
      i === locationPos
        ? item.classList.add("selected")
        : item.classList.remove("selected");
    });
  }, [locationPos]);
  return (
    <div className="destination">
      <Header />
      <Menu />
      <h3 className="galery__title">
        <span className="ti-number">01</span> pick your destination
      </h3>
      <section className="destination__content">
        <article className="galery">
          <div className="galery__image animate__animated animate__backInLeft">
            <img src={destinations[locationPos].images.png} alt="moon" />
          </div>
        </article>
        <div className="destination__text">
          <article className="dest-info">
            <ul className="galery__locations">
              {locations.map((location, i) => (
                <li
                  key={location}
                  className="galery__location"
                  onClick={() => {
                    setlocationPos(i);
                  }}
                >
                  {location}
                </li>
              ))}
            </ul>
            <h2 className="dest-info__name">
              {destinations[locationPos].name}
            </h2>
            <p className="dest-info__body">
              {destinations[locationPos].description}
            </p>
          </article>
          <hr />
          <article className="planet-data">
            <div className="planet-data__item">
              <h3 className="planet-data__title">Average Distance</h3>
              <p className="planet-data__info">
                {destinations[locationPos].distance}
              </p>
            </div>
            <div className="planet-data__item">
              <h3 className="planet-data__title">Est travel time</h3>
              <p className="planet-data__info">
                {destinations[locationPos].travel}
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
