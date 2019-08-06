import { t } from './lib'


// Point = {x: Int, y: Int}
// Path = [Point]


// pictures :: [Shape] -> Picture
export const pictures = t('pictures')
// shape :: Picture -> Shape
export const shape = t('pictures')


// color :: String -> Shape -> Picture
export const color = t('color', 'shape')
// border :: String -> Shape -> Picture
export const border = t('color', 'shape')


// line :: Path -> Shape
export const line = t('arrayPath')
// rect :: Int -> Int -> Int -> Int -> Shape
export const rect = t('x', 'y', 'width', 'height')
// arc :: Path -> Int -> Int -> Int -> Bool -> Shape
export const arc = t('x', 'y', 'radius', 'startAngle', 'endAngle', 'anticlockwise')
