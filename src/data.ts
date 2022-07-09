import { ReturnStatus, ResponseInfos } from "./defines";
export const statusTxt: ReturnStatus = {
    ok: "OK",
    error: "Error execution",
    dataerror: "Database request failed"
}

export const ResponseGood = ( d: Object ) =>
{
    let resp:ResponseInfos= {
        code: 200,
        data: d,
        message: "🏠"
    }
    return resp;
}
export const ResponseBadData = () =>
{
    let resp: ResponseInfos = {
        code: 991,
        message: statusTxt.dataerror
    }
    return resp;
}
export const ResponseFailed = () =>
{
    let resp: ResponseInfos = {
        code: 992,
        message: statusTxt.error
    }
    return resp;
}
