"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const defines_1 = require("./defines");
const functions_1 = require("./functions");
const appip = process.env.APPIP || 'localhost', appport = Number(process.env.PORT) || 5656;
const approutes = [
    {
        name: "/routea",
        callback: functions_1.DataRequest
    }
];
/**
 * New "application" express
 */
const app = (0, express_1.default)();
/**
 * request body parser in JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use(express_1.default.json());
/**
 * Allow all origin url
 */
app.use((0, cors_1.default)());
/**
 * All routes
 */
app.all('*', (req, res) => {
    const reqinfos = {
        path: req.path,
        method: req.method,
        ip: req.ip,
        params: req.params,
        body: req.body,
        query: req.query,
        headers: req.headers
    };
    let resp;
    for (let i = 0, len = approutes.length; i < len; i++) {
        const route = approutes[i];
        if (reqinfos.path === route.name) {
            resp = route.callback();
            let result = (0, defines_1.ResponseGood)(reqinfos);
            res.status(result.code).send(result.data);
            return;
        }
    }
    res.status((0, defines_1.ResponseBadData)().code).send((0, defines_1.ResponseBadData)().message);
});
/**
 * list on port and ip
 */
app.listen({ hostname: appip, port: appport }, () => console.log(`running on ${appip}:${appport}`));
