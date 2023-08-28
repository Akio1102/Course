import "../../assets/css/Agents.css";

const Agent = ({ agents }) => {
  const { name, image, rol, description, link } = agents;
  return (
    <article className="agent">
      <figure className="agent-image-container">
        <img className="agent-image" src={image} alt={name} />
      </figure>
      <div className="agent-details">
        <h2 className="agent-title">{name}</h2>
        <p className="agent-rol">{rol}</p>
        <p className="agent-description">{description}</p>
        <a
          className="agent-button"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          More Info
        </a>
      </div>
    </article>
  );
};

export default Agent;
