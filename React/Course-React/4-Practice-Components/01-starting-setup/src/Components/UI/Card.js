import Concepts from "../Concept/Concept.js";
import "../../assets/css/Card.css";

const Card = ({ all }) => {
  return (
    <ul id="concepts">
      {all.map((e, index) => (
        <Concepts key={index} data={e} />
      ))}
    </ul>
  );
};

export default Card;
