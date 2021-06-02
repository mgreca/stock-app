import { useContext, useState } from "react";
import "./StockHeader.css";

import Button from "../../core/Button/Button";
import TextField from "../../core/TextField/TextField";

import { StoreContext } from ".";

const StockHeader = () => {
  const { addStock, buyStock, sellStock, statusMessage } = useContext(
    StoreContext
  );
  const [stockName, setStockName] = useState("");

  const handleChange = (event) => {
    setStockName(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Stock name"
        maxLength={80}
        onChange={handleChange}
        placeholderText="e.g. AAPL"
        value={stockName}
      />
      <div className="message">{statusMessage}</div>
      <div>
        <Button
          onClick={() => {
            addStock(stockName);
            setStockName("");
          }}
        >
          Add
        </Button>
        <Button
          onClick={() => {
            buyStock(stockName);
          }}
        >
          Buy
        </Button>
        <Button
          onClick={() => {
            sellStock(stockName);
          }}
        >
          Sell
        </Button>
      </div>
    </div>
  );
};

export default StockHeader;
