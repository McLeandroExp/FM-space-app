import React, { useContext, useEffect } from "react";
import { Header } from "../header/Header";
import { Menu } from "../menu/Menu";
import {MenuContext} from '../menu/MenuContext'

export const Home = () => {
  const {setIdxPage} = useContext(MenuContext)
  useEffect(() => {
    setIdxPage(0)
  })
  return (
    <div className="home">
      <Header />
      <Menu />
      <section className="home-elements">
        <article className="info">
          <p className="info__intro">So, you want to travel to</p>
          <h1 className="info__title">Space</h1>
          <p className="info__body">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <div className="explore">
          <p>Explore</p>
        </div>
      </section>
    </div>
  );
};
