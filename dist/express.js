"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const data_1 = require("./data");
const functions_1 = require("./functions");
const appip = process.env.APPIP || 'localhost', appport = Number(process.env.PORT) || 5656;
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
    const reqinfos = (0, functions_1.ReqInfos)(req);
    const payload = (0, functions_1.getPayload)(reqinfos.path);
    if (payload !== "" && data_1.payloads[payload]) {
        const result = (0, data_1.ResponseGood)(reqinfos);
        res.status(result.code).send(result.data);
        return;
    }
    const bad = (0, data_1.ResponseBadData)();
    res.status(bad.code).send(bad.message);
});
/**
 * list on port and ip
 */
app.listen({ hostname: appip, port: appport }, () => console.log(`running on ${appip}:${appport}`));
