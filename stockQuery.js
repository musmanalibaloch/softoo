const stocks = require('./stock.json')

//@param { String } SKU
//{"sku":string,"stock":number}
//@return [obj]
const getStocksBySKU = (SKU) =>{
    try {
        return stocks.filter(stock => stock.sku === SKU)    
    } catch (error) {
        throw  Error(error.message)
    }
}

const getStocksBySKUQuantity = (SKU) =>{
    try {
        return getStocksBySKU(SKU).reduce((previousStock,stock) => previousStock + stock.stock,0)  
    } catch (error) {
        throw  Error(error.message)
    }
}


module.exports= {
    getStocksBySKUQuantity
}