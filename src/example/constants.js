
export const FPS = 5


export const initialState = {
  pos: { x: 0, y: 0 },
  word: Array.from(
    { length: 20 },
    () => Array.from(
      { length: 20 },
      () => 0
    )
  )
}

export const canvasParam = {
  width: 500,
  height: 500,
}