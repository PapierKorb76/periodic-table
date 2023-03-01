import "./grid.scss";

export default function ElementComponent({
  elementTextAbbr,
  elementText,
  atomicNumber
}) {
  return (
    <div className="ElementComponent">
      <h4 style={{ margin: "5px 0px 0px 0px", border: "1px solid blue"}}>4</h4>
      <h1 style={{ border: "1px solid blue"}}>H</h1>
      <h5 style={{ border: "1px solid blue"}}>Hydrogen</h5>
    </div>
  );
}
