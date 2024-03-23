import express from 'express';
import path from 'path';

interface Options {
    port: number,
    publicPathAplication?: string,
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly publicPathAplication: string;

    constructor(options: Options){
        const {port, publicPathAplication = 'public' } = options

        this.port = port,
        this.publicPathAplication = publicPathAplication
    }

    async start ()  {

        //*Middlewares no son mas que funciones que se ejecutan en una ruta 


        //*public 

        this.app.use(express.static(this.publicPathAplication))


        //solucion problema de rutas 
        this.app.get('*', (req, res) => {
           const indexpath = path.join(__dirname + `../../../${this.publicPathAplication}/index.html`);
           res.sendFile(indexpath)
           
        });

        //escuchar peticiones, el puerto debe estar en una variable de entorno
        this.app.listen(this.port, () => {
            console.log(`server corriendo en el puerto ${this.port} `);
            
        })
    }

}