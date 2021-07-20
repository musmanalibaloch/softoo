import transactions from "./data/transactions.json";
import { transaction } from "./types/index";

export const getTransactionBySKU = (sku: string, type: string = 'order'): transaction[] | never => {
    try {
        return transactions.filter((trans: transaction) => trans.sku === sku && trans.type === type);
    } catch (error) {
        throw new Error(error.message)
    }
}

export const getTransactionBySKUQuantity = (sku: string): number | never => {
    try {
        return getTransactionBySKU(sku, 'order').reduce((prevQty, tran) => prevQty + tran.qty, 0) - getTransactionBySKU(sku, 'refund').reduce((prevQty, tran) => prevQty + tran.qty, 0)
    } catch (error) {
        throw new Error(error)
    }
}

