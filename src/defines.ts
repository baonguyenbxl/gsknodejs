import { IncomingHttpHeaders } from "http";

export interface RequestInfos
{
    path?: string;
    method?: string;
    ip?: string;
    headers?: IncomingHttpHeaders;
    query?: Object;
    body?: Object;
    params?: Object;
}

export interface Payloads
{
    [ key: string ]: RouteFunction;
}

export interface ResponseInfos
{
    code: number;
    data?: Object;
    message?: string;

}

export interface ReturnStatus
{
    ok: string;
    error: string;
    dataerror: string;
}

export interface FunctionResponse
{
    status: string;
    data?: Object;
    message?: string;
}

export interface RouteFunction
{
    payload: string;
    get?: Function;
    post?: Function;
    put?: Function;
    delete?: Function;
}


