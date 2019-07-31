
export const FPS = 5

export const countCellGrid = 40


export const DIRECTION = {
  left: Symbol(),
  up: Symbol(),
  right: Symbol(),
  down: Symbol(),
}


export const initialState = {
  pos: { x: 0, y: 0 },
  word: Array.from(
    { length: countCellGrid },
    () => Array.from(
      { length: countCellGrid },
      () => 0
    )
  ),
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

export const canvasParam = {
  width: 500,
  height: 500,
}

