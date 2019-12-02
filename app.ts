import { WSServer } from './typings/Gateway';
import app from './lib/api/WebServer';

/* Shard Server */
const ShardServer = new WSServer({
    port: require(`${__dirname}/config/general.js`).ws_port,
    path: '/shard'
});

/* Web & API Server */

// listen
app.listen(app.get("port"), () => {
    console.log("Ready!")
});