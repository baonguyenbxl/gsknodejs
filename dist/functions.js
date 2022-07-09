"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPayload = exports.ReqInfos = exports.DataRequest = void 0;
const data_1 = require("./data");
function DataRequest(p) {
    const m = "cest ok";
    let resp = {
        status: data_1.statusTxt.ok,
        data: p,
        message: m
    };
    return resp;
}
exports.DataRequest = DataRequest;
function ReqInfos(req) {
    let resp = {
        path: req.path,
        method: req.method,
        ip: req.ip,
        params: req.params,
        body: req.body,
        query: req.query,
        headers: req.headers
    };
    return resp;
}
exports.ReqInfos = ReqInfos;
function getPayload(payload) {
    const resp = (payload) ? payload.split("/") : [];
    const result = (resp.length > 0) ? resp[resp.length - 1] : "";
    return result;
}
exports.getPayload = getPayload;
