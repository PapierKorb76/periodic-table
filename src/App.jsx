import PeriodicTable from "./PeriodicTable";
import "./grid.scss";
import "./styles.scss";


export default function App() {

  const [periodicTable, setPeriodicTable] = useState([]);
  useEffect(() => {
    fetch("https://neelpatel05.pythonanywhere.com")
      .then((response) => response.json())
      .then((json) => setPeriodicTable(json));
  }, []);


  return (
    <div className="App">
      <PeriodicTable periodicTable={periodicTable}/>
    </div>
  );
}
