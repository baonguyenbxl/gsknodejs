import { FunctionResponse,RequestInfos } from "./defines";
import { Request } from "express";
import { statusTxt } from "./data"
export function DataRequest ( p?: Object ):FunctionResponse
{
    const m = "cest ok"
    let resp: FunctionResponse = {
        status: statusTxt.ok,
        data: p,
        message: m 
    };
    return resp;
}
export function ReqInfos ( req: Request ):RequestInfos
{
    let resp: RequestInfos = {
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

export function getPayload ( payload?: string )
{
    const resp =(payload)? payload.split( "/" ):[];
    const result: string =(resp.length>0)? resp[ resp.length - 1 ]:"";
    return result;
}
