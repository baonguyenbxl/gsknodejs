import cors from 'cors'
import express from 'express'
import 'dotenv/config';
import { FunctionResponse, RequestInfos, ReturnStatus, RouteFunction, AppRoutes, ResponseGood, ResponseInfos, ResponseBadData, ResponseFailed } from './defines';
import { DataRequest } from './functions';

const appip = process.env.APPIP || 'localhost',
    appport = Number( process.env.PORT ) || 5656;


const approutes: AppRoutes = [
    {
        name: "/routea",
        callback: DataRequest
    } ];
/**
 * New "application" express
 */

const app = express()

/**
 * request body parser in JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use( express.json() )

/**
 * Allow all origin url
 */
app.use( cors() )

/**
 * All routes
 */
app.all( '*', ( req, res) =>
{
    const reqinfos: RequestInfos = {
        path: req.path,
        method: req.method,
        ip: req.ip,
        params: req.params,
        body: req.body,
        query: req.query,
        headers: req.headers
    };
    let resp: FunctionResponse;
    for ( let i = 0, len = approutes.length; i < len; i++ )
    {
        const route = approutes[ i ];
        if ( reqinfos.path === route.name )
        {
            resp = route.callback();
            let result: ResponseInfos = ResponseGood( reqinfos );
            res.status( result.code ).send( result.data );
            return;
        }
    }

    res.status( ResponseBadData().code ).send( ResponseBadData().message );
} )


/**
 * list on port and ip
 */
app.listen( { hostname: appip, port: appport }, () => console.log( `running on ${appip}:${appport}` ) );
