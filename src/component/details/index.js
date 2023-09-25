import Heading from "../heading";

import "./index.css";

import Box from "../box";
import ListItem from "../list-item";

import guestsI from "./guests.svg";
import bedroomsI from "./bedrooms.svg";
import bedsI from "./beds.svg";
import bathsI from "./baths.svg";
// import test from "./test.svg";

export default function Details({ ...rest }) {
  return (
    <Box className="details">
      <Heading>Деталі властивості</Heading>
      <List {...rest} />
    </Box>
  );
}

function List({ guests = 0, bedrooms = 0, beds, baths }) {
  return (
    <ul className="price__list">
      <ListItem imageSrc={guestsI}>
        <span>{guests}</span>
        <span>гості</span>
      </ListItem>

      <ListItem imageSrc={bedroomsI}>
        <span>{bedrooms}</span>
        <span>спальня</span>
      </ListItem>

      <ListItem imageSrc={bedsI}>
        <span>{beds}</span>
        <span>ліжко</span>
      </ListItem>

      <ListItem imageSrc={bathsI}>
        <span>{baths}</span>
        <span>ванна кімната</span>
      </ListItem>
    </ul>
  );
}
