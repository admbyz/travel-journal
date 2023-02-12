const Content = (props) => {
  console.log(props);
  return (
    <main className="location">
      <img src={props.imageUrl} alt={props.title} />
      <div>
        <img src="../public/img/path.png" />
        <span className="country">{props.location}</span>
        <a href={props.googleMapsUrl}>View on Google Maps</a>
        <h2>{props.title}</h2>
        <span className="date">
          {props.startDate} - {props.endDate}
        </span>
        <p>{props.description}</p>
      </div>
    </main>
  );
};

export default Content;
