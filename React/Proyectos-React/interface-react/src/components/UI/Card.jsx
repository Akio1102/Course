import Agents from "../Agents/Agents.jsx";

import "../../assets/css/Card.css";
import productData from "../../ProductData.js";

// const Card = () => {
//   return (
//     <div className="card-container">
//       {productData.map((data, index) => {
//         <Agents agents={data} key={index} />;
//       })}
//     </div>
//   );
// };

const Card = () => {
  return (
    <main className="card-container">
      {productData.map((data, index) => (
        <Agents agents={data} key={index} />
      ))}
    </main>
  );
};

export default Card;
