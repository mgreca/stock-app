import { createContext, useState } from "react";
import StockHeader from "./StockHeader";
import StockList from "./StockList";
import { round, setStoreValue, sanitize } from "./utilities/utilities";

export const StoreContext = createContext("Store");

const DEFAULT_STOCK_VALUE = 50;
const BUY_VALUE_PERCENTAGE = 0.01;
const SELL_VALUE_PERCENTAGE = 0.01; // split them in two values in case at some point they can change

const StockStorePage = () => {
  const [stockStore, setStockStore] = useState(new Map());
  const [statusMessage, setStatusMessage] = useState("");

  const isEmpty = (name) => {
    if (name === "") {
      setStatusMessage("Stock name can not be empty");
      return true;
    }
    return false;
  };

  const modifyStock = (name, movesUp) => {
    setStatusMessage("");
    const stockName = sanitize(name);
    if (isEmpty(stockName)) {
      return;
    }
    if (stockStore.has(stockName)) {
      let stockValue = stockStore.get(stockName).value;
      if (stockValue <= 0) { // actually, this won't happen in the way that we are doing it now
        setStatusMessage(`${stockName} has reach the value 0`);
      }
      const fraction = movesUp
        ? stockValue * BUY_VALUE_PERCENTAGE
        : stockValue * SELL_VALUE_PERCENTAGE * -1;

      stockValue = round(stockValue + fraction); // this keeps the float number with 3 decimals
      setStockStore((stockStore) => {
        return setStoreValue(stockStore, stockName, stockValue);
      });
    } else {
      setStatusMessage(`${stockName} does not exist`);
    }
  };

  return (
    <div>
      <h1>Stock store</h1>
      <StoreContext.Provider
        value={{
          addStock: (name) => {
            setStatusMessage("");
            const stockName = sanitize(name);
            if (isEmpty(stockName)) {
              return;
            }
            if (stockStore.has(stockName)) {
              setStatusMessage(`${stockName} already exists`);
            } else {
              setStockStore((stockStore) => {
                return setStoreValue(
                  stockStore,
                  stockName,
                  DEFAULT_STOCK_VALUE
                );
              });
            }
          },
          buyStock: (name) => {
            modifyStock(name, true);
          },
          sellStock: (name) => {
            modifyStock(name, false);
          },
          statusMessage,
          stockStore,
        }}
      >
        <StockHeader />
        <StockList />
      </StoreContext.Provider>
    </div>
  );
};

export default StockStorePage;
