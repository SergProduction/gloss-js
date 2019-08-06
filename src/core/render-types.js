import { t } from './lib'


// Point = {x: Int, y: Int}
// Path = [Point]


// pictures :: [Shape] -> Picture
export const pictures = t('shapes')
// shape :: Picture -> Shape
export const shape = t('picture')


// color :: String -> Shape -> Picture
export const color = t('color', 'shape')
// border :: String -> Shape -> Picture
export const border = t('color', 'shape')


// line :: Path -> Shape
export const line = t('path')
// rect :: Int -> Int -> Int -> Int -> Shape
export const rect = t('x', 'y', 'width', 'height')
// arc :: Int -> Int -> Int -> Int -> Int -> Bool -> Shape
export const arc = t('x', 'y', 'radius', 'startAngle', 'endAngle', 'anticlockwise')
// arc :: Int -> Int -> Int -> Shape
export const circle = t('x', 'y', 'radius')
