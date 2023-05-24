import express from 'express';
import { getAssets } from './media.js'

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (_, res) => {
    res.send('Local media up and running!')
})

app.get('/assets/*', async (req, res) => {
    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Content-Disposition', 'inline')
    res.send(await getAssets(req.params[0]))
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

