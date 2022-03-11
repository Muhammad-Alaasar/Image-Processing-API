import express from 'express'
import * as fs from 'fs'
import imageResize from '../../utilities'
import { loggerStatus } from '../middleware/logger'
import { validStatus } from '../middleware/validator'
const images: express.Router = express.Router()

images.get('/', (req: express.Request, res: express.Response): void => {
    const width: number = parseInt(req.query.width as string)
    const height: number = parseInt(req.query.height as string)
    validStatus &&
        fs.readdir('src/images', async (e, files): Promise<void> => {
            if (!loggerStatus && files.some((file) => file == `${req.query.filename}.jpg`)) {
                await imageResize(req.query.filename as string, width, height)
                res.sendFile(
                    `src/thumbnails/${req.query.filename}_${req.query.width}_${req.query.height}.jpg`,
                    { root: '.', headers: { 'Content-Type': 'image/jpeg' } }
                )
            }
            !loggerStatus &&
                !files.some((file) => file == `${req.query.filename}.jpg`) &&
                res.send(`Image named ${req.query.filename} notfound, Choose any image name 
      <br/><br/>${files[0]}<br/>${files[1]}<br/>${files[2]}<br/>${files[3]}<br/>${files[4]}<br/>${files[5]}`)
        })
})

export default images
