function Card(props) {
  return (
    <div className="max-w-sm min-w-96 rounded-2xl overflow-hidden shadow-lg bg-d m-12">
      <img
        className="w-full"
        src={props.img}
        alt={`Image of ${props.head}`}
      ></img>
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold font-body text-p mb-2 tracking-wide">
          {props.head}
        </h2>
        <p className="text-lg font-body text-tp tracking-wider">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
