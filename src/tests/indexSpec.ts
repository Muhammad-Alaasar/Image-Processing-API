import app from '../index'
import supertest from 'supertest'

const req = supertest(app)

describe('Test Endpoint responses', (): void => {
    it('Gets the Localhost Endpoint', async (): Promise<void> => {
        const res = await req.get('/')
        expect(res.status).toBe(200)
    })
    it('Gets the API Endpoint', async (): Promise<void> => {
        const res = await req.get('/api')
        expect(res.status).toBe(200)
    })
})
