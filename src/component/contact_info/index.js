import Heading from "../heading";

import "./index.css";

import OwnerI from "./owner.svg";

export default function ContactInfo({
  title,
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
  // ...rest
}) {
  return (
    <div className="contact_info">
      <Heading>
        <div class="owner-container">
          <img height={60} width={60} src={OwnerI} alt="Icon" />
          <div class="owner-text">
            {title} - {name}
          </div>
        </div>

        <div className="owner title__sub-block">
          <span className="owner title__sub-value">{phone}</span>
          <span className="owner title__sub-value">{response_time}</span>
          <span className="owner title__sub-value">
            {response_rate} відсотків швидкості відгуку
          </span>
          <span className="owner title__sub-value">{info}</span>
        </div>
      </Heading>
    </div>
  );
}
