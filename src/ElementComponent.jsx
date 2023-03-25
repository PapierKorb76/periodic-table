import "./grid.scss";

export default function ElementComponent({ symbol, name, atomicNumber }) {
  return (
    <div className="ElementComponent">
      <h4 style={{ margin: "5px 0px 0px 0px" }}>{atomicNumber}</h4>
      <h1>{symbol}</h1>
      <h5>{name}</h5>
    </div>
  );
}
