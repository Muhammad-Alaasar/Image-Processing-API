import imageResize from '../utilities'

describe('Test Resize Funcation', (): void => {
    it('Sucessful Test', async (): Promise<void> => {
        expect(imageResize('mk.jpg', 200, 200)).not.toBeFalsy()
    })
})
