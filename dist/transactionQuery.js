"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionBySKUQuantity = exports.getTransactionBySKU = void 0;
const transactions_json_1 = __importDefault(require("./transactions.json"));
const getTransactionBySKU = (sku, type = 'order') => {
    try {
        return transactions_json_1.default.filter((trans) => trans.sku === sku && trans.type === type);
    }
    catch (error) {
        throw new Error(error.message);
    }
};
exports.getTransactionBySKU = getTransactionBySKU;
const getTransactionBySKUQuantity = (sku) => {
    try {
        return exports.getTransactionBySKU(sku, 'order').reduce((prevQty, tran) => prevQty + tran.qty, 0) - exports.getTransactionBySKU(sku, 'refund').reduce((prevQty, tran) => prevQty + tran.qty, 0);
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.getTransactionBySKUQuantity = getTransactionBySKUQuantity;
//# sourceMappingURL=transactionQuery.js.map