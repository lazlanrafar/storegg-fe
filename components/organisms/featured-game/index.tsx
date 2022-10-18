import React from "react";
import ItemGame from "./item-game";

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <ItemGame
            imgSrc="/img/Thumbnail-1.png"
            title="Valorant"
            type="mobile"
          />
          <ItemGame
            imgSrc="/img/Thumbnail-2.png"
            title="Valorant"
            type="mobile"
          />
          <ItemGame
            imgSrc="/img/Thumbnail-3.png"
            title="Valorant"
            type="mobile"
          />
          <ItemGame
            imgSrc="/img/Thumbnail-4.png"
            title="Valorant"
            type="mobile"
          />
          <ItemGame
            imgSrc="/img/Thumbnail-5.png"
            title="Valorant"
            type="mobile"
          />
        </div>
      </div>
    </section>
  );
}
