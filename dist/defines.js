"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseFailed = exports.ResponseBadData = exports.ResponseGood = exports.statusTxt = void 0;
exports.statusTxt = {
    ok: "OK",
    error: "Error execution",
    dataerror: "Database request failed"
};
const ResponseGood = (d) => {
    return {
        code: 200,
        data: d,
        message: "🏠"
    };
};
exports.ResponseGood = ResponseGood;
const ResponseBadData = () => {
    return {
        code: 991,
        message: exports.statusTxt.dataerror
    };
};
exports.ResponseBadData = ResponseBadData;
const ResponseFailed = () => {
    return {
        code: 992,
        message: exports.statusTxt.error
    };
};
exports.ResponseFailed = ResponseFailed;
