import { getRandomInt } from './lib'

export const FPS = 30


export const canvasParam = {
  width: 500,
  height: 500,
}


 export const countCellGrid = 40


export const scaleSizeOne = canvasParam.width / countCellGrid
export const scaleSizeMax = canvasParam.width / scaleSizeOne


export const DIRECTION = {
  left: 0,
  up: 1,
  right: 2,
  down: 3,
}


export const initialState = {
  eat: {
    x: getRandomInt(0, scaleSizeMax),
    y: getRandomInt(0, scaleSizeMax)
  },
  direction: DIRECTION.right,
  snake: [
    { x: 8, y: 2 },
    { x: 7, y: 2 },
    { x: 6, y: 2 },
    { x: 5, y: 2 },
    { x: 4, y: 2 },
    { x: 3, y: 2 },
    { x: 2, y: 2 },
  ]
}

