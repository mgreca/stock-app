/*
 Pure js functions that allows a better testing
*/

export function setStoreValue(store, name, value) {
  // we create a new map to keep the store inmutable
  return new Map(store).set(name, {
    modifiedDate: new Date(),
    value,
  });
}

// copied from https://www.jacklmoore.com/notes/rounding-in-javascript/
export function round(value, decimals = 3) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

export function sanitize(stockName = "") {
  // here we should add sanitizing functions
  return stockName.trim();
}

export function sortStockByDate(stockA, stockB) {
    return stockB[1].modifiedDate - stockA[1].modifiedDate;
}

export function sortStockByPrice(stockA, stockB) {
    return stockB[1].value - stockA[1].value;
}
