import express from 'express'
import * as fs from 'fs'
import { validStatus } from './validator'

export let loggerStatus = false
export const logger = (req: express.Request, res: express.Response, next: () => void): void => {
    // const filePath = `src/thumbnails/${req.query.filename}_${req.query.width}_${req.query.height}.jpg`
    validStatus &&
        fs.readdir('src/thumbnails', (e, files) => {
            if (
                files.includes(`${req.query.filename}_${req.query.width}_${req.query.height}.jpg`)
            ) {
                res.sendFile(
                    `src/thumbnails/${req.query.filename}_${req.query.width}_${req.query.height}.jpg`,
                    { root: '.', headers: { 'Content-Type': 'image/jpeg' } }
                )
                loggerStatus = true
            } else {
                loggerStatus = false
            }
        })
    next()
}