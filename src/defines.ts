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

export type AppRoutes = Array<RouteFunction>;
export interface RouteFunction
{
    name: string;
    callback: Function;

}
export const statusTxt: ReturnStatus = {
    ok: "OK",
    error: "Error execution",
    dataerror: "Database request failed"
}

export const ResponseGood = ( d: Object ) =>
{
    return {
        code: 200,
        data: d,
        message: "🏠"
    }
}
export const ResponseBadData = (  ) =>
{
    return {
        code: 991,
        message: statusTxt.dataerror
    }
}
export const ResponseFailed = (  ) =>
{
    return {
        code: 992,
        message: statusTxt.error
    }
}
