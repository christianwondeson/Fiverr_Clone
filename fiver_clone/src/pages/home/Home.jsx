import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Trustedby from "../../components/trustedby/Trustedby";
import Slide from "../../components/Slide/Slide";
import Catcard from "../../components/catCard/Catcard";
import { cards, projects } from "../../data";
import Features from "../../components/features/Features";
import Fiverbusiness from "../../components/fiver_business/Fiverbusiness";
import Slide_last from "../../components/Slide_last/Slide_last";
import Projectcard from "../../components/projectCard/Projectcard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Trustedby />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <Catcard key={card.id} item={card} />
        ))}
      </Slide>
      <Features />
      <Fiverbusiness />
      <Slide_last slidesToShow={5} arrowsScroll={5}>
        {projects.map((project) => (
          <Projectcard key={project.id} item={project} />
        ))}
      </Slide_last>
    </div>
  );
};

export default Home;
