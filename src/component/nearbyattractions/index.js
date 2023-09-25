import { Fragment } from "react";
import Heading from "../heading";

import "./index.css";

export default function NearbyAttractions({ list }) {
  return (
    <div className="nearby__block">
      <Heading>Пам'ятки поблизу</Heading>

      <div className="nearby__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ name, link }) {
  return (
    <div className="nearby__title">
      <a href={link} alt="link">
        {name}
      </a>
    </div>
  );
}
