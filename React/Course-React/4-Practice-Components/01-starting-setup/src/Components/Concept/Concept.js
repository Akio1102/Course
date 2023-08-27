import "../../assets/css/Concepts.css";

const Concepts = ({ data }) => {
  const { title, description, image } = data;
  return (
    <li className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default Concepts;
