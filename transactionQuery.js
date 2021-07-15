const transactions = require('./transactions.json')

//@param  { String } SKU
//@obj {{"sku":string,"type":enum[string]{order,refund},"qty":number}}
//@return []
const getTransactionBySKU = (SKU, type = 'order') => {
    try {
        return transactions.filter(transaction => transaction.sku === SKU && transaction.type === type);
    } catch (error) {
        throw new Error(error.message)
    }
}

const getTransactionBySKUQuantity = (SKU) =>{
    try {
       return getTransactionBySKU(SKU,'order').reduce((prevQty,tran) => prevQty+tran.qty,0) - getTransactionBySKU(SKU,'refund').reduce((prevQty,tran) => prevQty+tran.qty,0)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports= {
    getTransactionBySKUQuantity
}