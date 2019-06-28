import React from "react";

// https://old.reddit.com/r/EarthPorn/comments/8qijnj/one_of_my_scariest_moments_as_a_photographer_what/
import faroeIslands from "./css-grid-assets/felix-inden-faroe-islands.jpg";

// https://old.reddit.com/r/EarthPorn/comments/6t89rv/for_a_15minute_period_during_my_flight_back_to/
import greenland from "./css-grid-assets/lostcanuck-greenland.jpg";

// https://old.reddit.com/r/EarthPorn/comments/8e4djh/woke_up_at_5am_to_catch_the_tulips_with_morning/
import tulips from "./css-grid-assets/albert-dros-tulips.jpg";

// https://old.reddit.com/r/EarthPorn/comments/8l9xbl/milky_way_coming_out_of_an_erupting_volcano/
import volcano from "./css-grid-assets/albert-dros-volcano.jpg";

// https://old.reddit.com/r/EarthPorn/comments/6rqst0/i_could_talk_about_how_i_hiked_100_miles_in/
import iceland from "./css-grid-assets/joshua-sortino-iceland.jpg";

// https://old.reddit.com/r/EarthPorn/comments/6vz211/what_the_horizon_looked_like_in_all_directions/
import smokies from "./css-grid-assets/matt-macpherson-smokies.jpg";

const window = (arr, size) => {
  const toReturn = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size == 0) {
      toReturn.push([]);
    }

    toReturn[toReturn.length - 1].push(arr[i]);
  }

  return toReturn;
};

const imgStyle = { width: "100%", height: "auto" };

const images = [
  <img src={faroeIslands} style={imgStyle} />,
  <img src={greenland} style={imgStyle} />,
  <img src={tulips} style={imgStyle} />,
  <img src={volcano} style={imgStyle} />,
  <img src={iceland} style={imgStyle} />,
  <img src={smokies} style={imgStyle} />,
];

const windowedImages = window(images, 3);

export { images, windowedImages };
