const computeQty = require('./computeStock.js')

test('should return object with qty and sku', async () => {
    expect(await computeQty.computeStockBySKU('HPL673886/40/76')).toStrictEqual({sku:'HPL673886/40/76',qty:646})
  });


  test('should return error against non-existing sku',async () => {
    
    expect(await computeQty.computeStockBySKU('PQW2123')).toBe("SKU NOT FOUND");
  });