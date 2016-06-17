const express = require( 'express' );
const { json } = require( 'body-parser' );
const session = require( 'express-session' );
const masterRoutes = require( './server/masterRoutes' );

const port = 8080;
const app = express();

app.use( express.static( `${ __dirname }/public` ) );
app.use( json() );

masterRoutes( app );

app.listen( port, () => console.log( `Express listening on ${ port }` ) );