import express from 'express'
import images from './api/images'
import { logger } from './middleware/logger'
import { validator } from './middleware/validator'

const routes = express.Router()

routes.get('/', (req: express.Request, res: express.Response): void => {
    res.send('API page')
})

routes.use('/images', [validator, logger], images)

export default routes