import Country from "./country";
import Indicators from "./indicators";

const Info = () => {
  return (
    <div className="info container">
      <h3>Country Info:</h3>
      <Country />
      <h3 className="divider container">Indicators:</h3>
      <Indicators />
    </div>
  );
};

export default Info;
