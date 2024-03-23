import { envs } from './config/envs';
import { Server } from './presentation/server';
//*TRABAJANDO CON EXPRESS

(async() => {
    main();
})();


function main() {
    const server = new Server({
        port: envs.PORT,
        publicPathAplication: envs.PUBLIC_PATH_APLICATION
    })

    server.start();
}

