"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStocksBySKUQuantity = exports.getStocksBySKU = void 0;
const stock_json_1 = __importDefault(require("./stock.json"));
const getStocksBySKU = (sku) => {
    try {
        return stock_json_1.default.filter((stck) => stck.sku === sku);
    }
    catch (error) {
        throw Error(error.message);
    }
};
exports.getStocksBySKU = getStocksBySKU;
const getStocksBySKUQuantity = (sku) => {
    try {
        return exports.getStocksBySKU(sku).reduce((previousStock, stock) => previousStock + stock.stock, 0);
    }
    catch (error) {
        throw Error(error.message);
    }
};
exports.getStocksBySKUQuantity = getStocksBySKUQuantity;
//# sourceMappingURL=stockQuery.js.map