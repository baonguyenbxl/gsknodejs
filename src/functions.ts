import { FunctionResponse,statusTxt } from "./defines";
    
export function DataRequest ( p?: Object )
{
    const m = "cest ok"
    let resp: FunctionResponse = {
        status: statusTxt.ok,
        data: p,
        message: m 
    };

    return resp;
}
