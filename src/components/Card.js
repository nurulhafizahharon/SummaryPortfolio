function Card(props) {
  const header = props.header;
  const content = props.content;
  return (
    <div className="Card" style={{border: '1px solid rgba(255,255,255,255)'}}>
      <h3>{header}</h3>
      <hr />
      <p>{content}</p>
    </div>
  );
}

export default Card;
