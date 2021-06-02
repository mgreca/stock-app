import { createContext, useState } from "react";
import StockHeader from "./StockHeader";
import StockList from "./StockList";

export const StoreContext = createContext("Store");

const StockStore = () => {
  const [stocks, setStocks] = useState(new Set());

  return (
    <div>
      <h1>This is the store</h1>
      <StoreContext.Provider
        value={{
          stocks
        }}
      >
        <StockHeader />
        <StockList />
      </StoreContext.Provider>
    </div>
  );
};

export default StockStore;
