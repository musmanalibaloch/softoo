import * as stocksQuery from "./stockQuery"
import * as transactionsQuery from "./transactionQuery"
import { ComputeStock } from "./types/index";


export const computeStockBySKU = async (sku: string): Promise<ComputeStock | never> => {
    try {
        //
        const stockCount = stocksQuery.getStocksBySKUQuantity(sku)
        const transCount = transactionsQuery.getTransactionBySKUQuantity(sku)

        if (stockCount === 0 && transCount === 0)
            throw new Error("SKU NOT FOUND")
        return { sku: sku, qty: stockCount + transCount }

    } catch (error) {
        return error.message
    }
}


console.log(computeStockBySKU("LTV719449/39/39"))

