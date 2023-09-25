import Heading from "../heading";

import "./index.css";

import Box from "../box";
import ListItem from "../list-item";

import PoolI from "./pool.svg";
import GymI from "./gym.svg";
import FreeBreakfastI from "./freebreakfast.svg";
import FreeWiFiI from "./freewifi.svg";
import ParkingI from "./parking.svg";
import PetsAllowedI from "./petsallowed.svg";
import AirportShuttleI from "./airportshuttle.svg";
import ConciergeServiceI from "./conciergeservice.svg";
import RoomServiceI from "./roomservice.svg";
import ChildFriendlyI from "./childfriendly.svg";
// import test from "./test.svg";

export default function Amenities({ ...rest }) {
  return (
    <Box className="amenities">
      <Heading>Зручності</Heading>
      <List {...rest} />
    </Box>
  );
}

function serviceExists(val) {
  return val === true ? "list-item-available" : "list-item-unavalaible";
  //    return (val  === true) ? "list-item-available" : "";
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="amenities__list">
      <ListItem imageSrc={PoolI}>
        <span
          className={
            hasPool === true ? "list-item-available" : "list-item-available"
          }
        >
          Басейн
        </span>
      </ListItem>

      <ListItem imageSrc={GymI}>
        <span className={serviceExists(hasGym)}>Спортивний зал</span>
      </ListItem>

      <ListItem imageSrc={FreeBreakfastI}>
        <span className={serviceExists(hasFreeBreakfast)}>
          Безкоштовний сніданок
        </span>
      </ListItem>

      <ListItem imageSrc={FreeWiFiI}>
        <span className={serviceExists(hasFreeWiFi)}>Безкоштовний Wi-Fi</span>
      </ListItem>

      <ListItem imageSrc={ParkingI}>
        <span className={serviceExists(hasParking)}>
          Безкоштовний вуличний паркінг
        </span>
      </ListItem>

      <ListItem imageSrc={PetsAllowedI}>
        <span className={serviceExists(hasPetsAllowed)}>
          Дозволено розміщення з домашніми тваринами
        </span>
      </ListItem>

      <ListItem imageSrc={AirportShuttleI}>
        <span className={serviceExists(hasAirportShuttle)}>
          Трансфер до аеропорту
        </span>
      </ListItem>

      <ListItem imageSrc={ConciergeServiceI}>
        <span className={serviceExists(hasConciergeService)}>
          Консьєрж-сервіс
        </span>
      </ListItem>

      <ListItem imageSrc={RoomServiceI}>
        <span className={serviceExists(hasRoomService)}>
          Обслуговування номерів
        </span>
      </ListItem>

      <ListItem imageSrc={ChildFriendlyI}>
        <span className={serviceExists(hasChildFriendly)}>
          Підходить для дітей
        </span>
      </ListItem>
    </ul>
  );
}
