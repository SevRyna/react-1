import Heading from "../heading";

import "./index.css";

import Box from "../box";

export default function AddProps({ ...rest }) {
  return (
    <Box className="props-block-main">
      <Heading>Деталі властивості</Heading>
      <List {...rest} />
    </Box>
  );
}

function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
}) {
  return (
    <div className="props-block props-block-head">
      <div className="add-props-block">
        <span className="props__title">Правила дому</span>
        <span className="props_info">{house_rules}</span>
      </div>

      <div className="add-props-block">
        <span className="props__title">Політика скасування</span>
        <span className="props_info">{cancellation_policy}</span>
      </div>

      <div className="add-props-block">
        <span className="props__title">Місцевий транспорт</span>
        <span className="props_info">{local_transportation}</span>
      </div>

      <div className="add-props-block">
        <span className="props__title">Мови хоста</span>
        <span className="props_info">{host_languages}</span>
      </div>

      <div className="add-props-block">
        <span className="props__title">Спеціальні пропозиції</span>
        <span className="props_info">{special_offers}</span>
      </div>

      <div className="add-props-block">
        <span className="props__title">Інструкції щодо реєстрації</span>
        <span className="props_info">{special_offers}</span>
        <span>ванна кімната</span>
      </div>
    </div>
  );
}
