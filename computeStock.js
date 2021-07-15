const { moduleExpression } = require('@babel/types')
const stocksQuery = require('./stockQuery')
const transactionsQuery = require('./transactionQuery')


computeStockBySKU = async (sku) =>{
    try {
        //
        const stockCount = stocksQuery.getStocksBySKUQuantity(sku)
        const transCount = transactionsQuery.getTransactionBySKUQuantity(sku)
       
        if(stockCount === 0 && transCount === 0)
            throw new Error("SKU NOT FOUND")
        return {sku:sku, qty:stockCount + transCount}
        
    } catch (error) {
        return error.message
    }
}


// can be used to test, uncomment following lines of code
//const qtyBySku = computeStockBySKU('HPL673886/40/76')
//console.log(qtyBySku)

module.exports ={
    computeStockBySKU
}