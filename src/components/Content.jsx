const Content = (props) => {
  return (
    <div className="location-container">
      <img className="photo" src={props.imageUrl} alt={props.title} />
      <div className="location-subcontainer">
        <nav className="nav-container">
          <img className="icon" src="../public/img/path.png" />
          <span className="country">{props.location}</span>
          <a className="link" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </nav>
        <h2 className="title">{props.title}</h2>
        <span className="date">
          {props.startDate} - {props.endDate}
        </span>
        <p className="paragraph">{props.description}</p>
      </div>
    </div>
  );
};

export default Content;
