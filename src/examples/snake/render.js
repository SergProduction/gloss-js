import {
  color,
  border,
  pictures,
  rect,
  line,
  shape
} from "../../core/render-types"

import { canvasParam, scaleSizeOne } from "./constants"



const renderXineGrid = pictures(
  Array.from({ length: canvasParam.width },
    (_, y) => line([
      { x: 0, y: y * scaleSizeOne },
      { x: canvasParam.width, y: y * scaleSizeOne }
    ])
  )
)

const renderYineGrid = pictures(
  Array.from({ length: canvasParam.height },
    (_, x) => line([
      { x: x * scaleSizeOne, y: 0},
      { x: x * scaleSizeOne, y: canvasParam.height}
    ])
  )
)

const renderGrid = border(
  "#ccc",
  shape([
    renderXineGrid,
    renderYineGrid
  ])
)


const renderSnake = (snake) => color(
  "rgba(0, 132, 255, 0.5)",
  shape(
    snake.map(({ x, y }) => (
      rect(
        x * scaleSizeOne,
        y * scaleSizeOne,
        scaleSizeOne,
        scaleSizeOne,
      )
    ))
  )
)

const renderEat = (eat) => color(
  '#f00',
  // shape([
    rect(eat.x, eat.y, scaleSizeOne, scaleSizeOne)
  // ])
)

const renderEat2 = (eat) => color(
  '#0f0',
  // shape([
    rect(
      eat.x + (2 * scaleSizeOne),
      eat.y + (2 * scaleSizeOne),
      scaleSizeOne, scaleSizeOne)
  // ])
)

export const render = state => pictures([
  renderGrid,
  renderEat(state.eat),
  renderEat2(state.eat),
  renderSnake(state.snake),
])
