import "./User.css";

function User({ img, name, age, description }) {
  return (
    <div className="user">
      <div className="user-img-container">
        <img src={img} alt={name} className="user-img" />
      </div>
      <div className="user-info">
        <p className="user-description">{description}</p>
        <p className="user-name">
          {name},{" "}
          <span className="user-age">{age} </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default User;
