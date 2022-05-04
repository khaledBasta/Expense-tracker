import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  // props.children which allows you to create wrapper components,
  // which is a special type of component
  return <div className={classes}>{props.children}</div>;
}

export default Card;
