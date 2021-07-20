import stocks from "./data/stock.json";
import { stock } from "./types/index";


export const getStocksBySKU = (sku: string): stock[] | never => {
    try {
        return stocks.filter((stck: stock) => stck.sku === sku)
    } catch (error) {
        throw Error(error.message)
    }
}

export const getStocksBySKUQuantity = (sku: string): number | never => {
    try {
        return getStocksBySKU(sku).reduce((previousStock, stock) => previousStock + stock.stock, 0)
    } catch (error) {
        throw Error(error.message)
    }
}
