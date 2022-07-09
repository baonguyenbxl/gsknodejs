import cors from 'cors'
import express from 'express'
import 'dotenv/config';
import {  RequestInfos, ResponseInfos } from './defines';
import { ResponseGood, ResponseBadData, ResponseFailed, payloads } from './data';
import { DataRequest, getPayload, ReqInfos } from './functions';

const appip = process.env.APPIP || 'localhost',
    appport = Number( process.env.PORT ) || 5656;



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
    const reqinfos: RequestInfos = ReqInfos( req );
    const payload: string = getPayload( reqinfos.path );
    if ( payload!=="" && payloads[ payload ] )
    {
        const result: ResponseInfos = ResponseGood( reqinfos );
        res.status( result.code ).send( result.data );
        return;        
    }
    const bad:ResponseInfos = ResponseBadData();
    res.status( bad.code ).send( bad.message );
} )


/**
 * list on port and ip
 */
app.listen( { hostname: appip, port: appport }, () => console.log( `running on ${appip}:${appport}` ) );
