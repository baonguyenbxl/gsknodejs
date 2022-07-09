"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payloads = exports.ResponseFailed = exports.ResponseBadData = exports.ResponseGood = exports.statusTxt = void 0;
const functions_1 = require("./functions");
exports.statusTxt = {
    ok: "OK",
    error: "Error execution",
    dataerror: "Database request failed"
};
const ResponseGood = (d) => {
    let resp = {
        code: 200,
        data: d,
        message: "🏠"
    };
    return resp;
};
exports.ResponseGood = ResponseGood;
const ResponseBadData = () => {
    let resp = {
        code: 991,
        message: exports.statusTxt.dataerror
    };
    return resp;
};
exports.ResponseBadData = ResponseBadData;
const ResponseFailed = () => {
    let resp = {
        code: 992,
        message: exports.statusTxt.error
    };
    return resp;
};
exports.ResponseFailed = ResponseFailed;
exports.payloads = {
    "routea": {
        payload: "/routea",
        get: functions_1.DataRequest
    },
    "routeb": {
        payload: "/routeb",
        get: functions_1.DataRequest
    }
};
