import { computeStockBySKU } from '../computeStock'
import { getStocksBySKUQuantity } from "../stockQuery";
import { getTransactionBySKUQuantity } from "../transactionQuery";

test('should return object with qty and sku against provided sku', async () => {
  expect(await computeStockBySKU('HPL673886/40/76')).toStrictEqual({ sku: 'HPL673886/40/76', qty: 646 })
});


test('should return error against non-existing sku', async () => {

  expect(await computeStockBySKU('PQW2123')).toBe("SKU NOT FOUND");
});


test('should return count of sku in stock against sku', async () => {

  expect(await getStocksBySKUQuantity('HPL673886/40/76')).toBe(607);
})

test('should return count of sku in transaction against sku', async () => {

  expect(await getTransactionBySKUQuantity('HPL673886/40/76')).toBe(39);
})