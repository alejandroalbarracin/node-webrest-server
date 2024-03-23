import 'dotenv/config';

import {get} from 'env-var';


export const envs = {


    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH_APLICATION: get('PUBLIC_PATH_APLICATION').default('public').asString(),


}