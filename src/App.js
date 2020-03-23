import React, { useEffect, useState } from "react";
import MultilineChat from "./components/MultiLine/MultilineChat";
import TableBlock from "./components/Table/TableBlock";
import "./App.css";
import {
  apiForUSD,
  apiForEUR,
  getData,
  combineObj,
  lengthData
} from "./utiles";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const timeout = setInterval(() => {
      Promise.all([getData(apiForEUR), getData(apiForUSD)])
        .then(combineObj)
        .then(val => setData([...data, val]))
        .catch(err => {
          throw new Error(err);
        });
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [data, data.length]);

  return (
    <div className="App">
      <h1 className="App-header">Конвертер</h1>
      <div>
        <MultilineChat data={lengthData(data)} />
        <TableBlock data={lengthData(data)} />
      </div>
    </div>
  );
}

export default App;
