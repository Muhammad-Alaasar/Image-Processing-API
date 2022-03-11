import app from '../../index'
import supertest from 'supertest'

const req = supertest(app)

describe('Test Endpoint responses', (): void => {
    it('Gets the Image Resize Endpoint', async (): Promise<void> => {
        const res = await req.get('/api/images?filename=mk&width=500&height=100')
        expect(res.status).toBe(200)
    })
})
