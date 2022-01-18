import React from "react";
import CardItem from "./CardItem";

import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/yt-p1-ninth image.jpg"
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/yt-p1-second image.jpg"
              text="Travel through the Islands of Bali in a private cruise."
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/yt-p1-third image.jpg"
              text="Set sail in the Atlantic Ocean visiting uncharted waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/yt-p1-fourth image.jpg"
              text="Experience football on top of the Himalayan Mountains."
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/yt-p1-eight image.jpg"
              text="Ride through the Sahara Desert on a guided camel tour."
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
