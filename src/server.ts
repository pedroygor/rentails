import './database';
import './shared/container';
import "reflect-metadata";
import express from 'express';
import { router } from './routes';
import swaggerFile from './swagger.json'; 
import swaggerUI from 'swagger-ui-express';



const app = express();

app.use(express.json());


app.use(router);

app.listen(2222, () => console.log('Server is running'));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));