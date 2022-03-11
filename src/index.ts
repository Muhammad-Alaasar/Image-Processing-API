import express from 'express'
import routes from './routes'

const app = express()
const port = 3010

app.listen(port, (): void => {
    console.log(`Server link http://localhost:${port}`)
})
app.get('/', (req: express.Request, res: express.Response): void => {
    res.send('Welcome to Resize images server!')
})
app.use('/api', routes)

export default app
