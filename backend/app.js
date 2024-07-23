import express from 'express';
import cors from 'cors';
const app = express();
import { router } from './router/form_routes.js'
app.use(express.json());
app.use(cors());
app.use('/api', router)
app.listen(5000, () => {
    console.log(`server connect`)
})


export default app;