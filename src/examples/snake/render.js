import {
  color,
  border,
  pictures,
  rect,
  line,
  shape
} from "../../core/render-types"

import { CANVAS_PARAM, SCALE_SIZE_ONE } from "./constants"



const renderXineGrid = pictures(
  Array.from({ length: CANVAS_PARAM.width },
    (_, y) => line([
      { x: 0, y: y * SCALE_SIZE_ONE },
      { x: CANVAS_PARAM.width, y: y * SCALE_SIZE_ONE }
    ])
  )
)

const renderYineGrid = pictures(
  Array.from({ length: CANVAS_PARAM.height },
    (_, x) => line([
      { x: x * SCALE_SIZE_ONE, y: 0},
      { x: x * SCALE_SIZE_ONE, y: CANVAS_PARAM.height}
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
        x * SCALE_SIZE_ONE,
        y * SCALE_SIZE_ONE,
        SCALE_SIZE_ONE,
        SCALE_SIZE_ONE,
      )
    ))
  )
)

const renderEat = (eat) =>  shape([ color(
  '#f00',
  // shape([
    rect(eat.x, eat.y, SCALE_SIZE_ONE, SCALE_SIZE_ONE)
  // ])
) ])

const renderEat2 = (eat) => shape([ color(
  '#0f0',
  // shape([
    rect(
      eat.x + (2 * SCALE_SIZE_ONE),
      eat.y + (2 * SCALE_SIZE_ONE),
      SCALE_SIZE_ONE, SCALE_SIZE_ONE)
  // ])
) ])

export const render = state => pictures([
  renderGrid,
  renderEat(state.eat),
  renderEat2(state.eat),
  renderSnake(state.snake),
])
