import React, {useState, useEffect} from "react";
import axios from "axios";
import VerticalGraph from "./VerticalGraph.jsx";

// import { holdings } from "../data/data";

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(()=> {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);
  
//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];  
  const labels = allHoldings.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };


  return (
    <div className="w-full min-h-[70vh] px-6 mt-8">
      <h3 className="mb-4 text-lg font-semibold">
        Holdings ({allHoldings.length})
      </h3>

      {/* Table */}
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        </thead>
        <tbody>
          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "text-green-600" : "text-red-600";
            const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";
            return (
              <tr key={index} className="border-b">
                <td className="py-2">{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* summary */}
      <div className="flex justify-between my-6">
        <div>
          <h5>
            29,875. <span>55</span>
          </h5>
          <p>Total investment</p>
        </div>

        <div>
          <h5>
            31,428. <span>95</span>
          </h5>
          <p>Current value</p>
        </div>

        <div>
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </div>
  );
}

export default Holdings;
