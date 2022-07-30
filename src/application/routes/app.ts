import express from 'express';
import bodyParser from 'body-parser'
import routes from './routes';

class App {   
    public server: express.Application;

    constructor(){
        this.server = express();
        this.middleware();
        this.route();
    }
    private middleware() {
        this.server.use(express.json());
        this.server.use(bodyParser.urlencoded({extended: true}))
        this.server.use(bodyParser.json())
    }
    public route(){
        this.server.use("/api/v1", routes);
    }
}
export default new App()