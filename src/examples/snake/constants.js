import { getRandomInt } from './lib'

export const FPS = 120


export const CANVAS_PARAM = {
  width: 500,
  height: 500,
}


 export const COUNT_CELL_GRID = 40


export const SCALE_SIZE_ONE = CANVAS_PARAM.width / COUNT_CELL_GRID
export const SCALE_SIZE_MAX = CANVAS_PARAM.width / SCALE_SIZE_ONE


export const DIRECTION = {
  left: 0,
  up: 1,
  right: 2,
  down: 3,
}


export const initialState = {
  eat: {
    x: getRandomInt(0, SCALE_SIZE_MAX) * SCALE_SIZE_ONE,
    y: getRandomInt(0, SCALE_SIZE_MAX) * SCALE_SIZE_ONE
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

