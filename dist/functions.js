"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRequest = void 0;
const defines_1 = require("./defines");
function DataRequest(p) {
    const m = "cest ok";
    let resp = {
        status: defines_1.statusTxt.ok,
        data: p,
        message: m
    };
    return resp;
}
exports.DataRequest = DataRequest;
