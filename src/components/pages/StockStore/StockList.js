import { useContext, useState } from "react";
import "./StockList.css";

import { StoreContext } from ".";
import Button from "../../core/Button/Button";
import { sortStockByDate, sortStockByPrice } from "./utilities/utilities";

const StockList = () => {
  const { stockStore } = useContext(StoreContext);
  const [isSortByDate, setSortByDate] = useState(true);

  // is sorted in every render, should be refactored
  const stockList = Array.from(stockStore.entries()).sort(
    isSortByDate ? sortStockByDate : sortStockByPrice
  );

  return (
    <div>
      <h3>Stock list</h3>

      <table className="stock-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Transaction date</th>
          </tr>
        </thead>
        <tbody>
          {stockList.length === 0 && <div className="empty">There are no stocks, please add them.</div>}
          {stockList.map((stock) => {
            const [key, { value, modifiedDate }] = stock;
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{value.toFixed(3)}</td>
                <td>{modifiedDate.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <Button onClick={() => setSortByDate((sort) => !sort)}>
          Sort by {isSortByDate ? "price" : "date"}
        </Button>
      </div>
    </div>
  );
};

export default StockList;
