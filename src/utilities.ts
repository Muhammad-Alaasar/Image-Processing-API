import sharp from 'sharp'

export default async function imageResize(
    imageName: string,
    width: number,
    height: number
): Promise<boolean> {
    await sharp(`src/images/${imageName}.jpg`)
        .resize(width, height)
        .toFile(`src/thumbnails/${imageName}_${width}_${height}.jpg`)
    return true
}
