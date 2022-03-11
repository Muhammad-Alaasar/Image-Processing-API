import express from 'express'

export let validStatus = true
export const validator = (req: express.Request, res: express.Response, next: () => void): void => {
    const lettersVal = new RegExp('[a-zA-Z]+')
    const width: number = parseInt(req.query.width as string)
    const height: number = parseInt(req.query.height as string)

    if (
        !lettersVal.test(req.query.filename as string) ||
        isNaN(width) ||
        isNaN(height) ||
        width == 0 ||
        height == 0
    ) {
        res.send(
            'Your URL not valid, Please write valid URL eg: api/images?filename=NAME-HERE&width=NUMBER&height=NUMBER'
        )
        validStatus = false
    } else {
        validStatus = true
    }
    next()
}