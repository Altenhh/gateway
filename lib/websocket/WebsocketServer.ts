import { Server } from 'ws';

class WebsocketServer extends Server {
    options: object = {};

    constructor(options: object) {
        super(options);
        this.options = options || {};
    }
}
export { WebsocketServer as GatewayWS };