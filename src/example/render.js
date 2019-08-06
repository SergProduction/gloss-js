import {
  color,
  border,
  pictures,
  rect,
  line
} from "../core/render-types"

import { canvasParam, scaleSizeOne } from "./constants"



const renderXineGrid = ({ word }) => pictures(
  Array.from({ length: canvasParam.width },
    (_, y) => line(0, y * scaleSizeOne, canvasParam.width, y * scaleSizeOne)
  )
)

const renderYineGrid = ({ word }) => pictures(
  Array.from({ length: canvasParam.height },
    (_, x) => line(x * scaleSizeOne, 0, x * scaleSizeOne, canvasParam.height)
  )
)

const renderGrid = (state) => border(
  "rgba(0, 132, 255, 0.5)",
  pictures([
    renderXineGrid(state),
    renderYineGrid(state)
  ])
)


const renderSnake = (state) => color(
  "rgba(0, 132, 255, 0.5)",
  pictures(
    state.snake.map(({ x, y }) => (
      rect(
        x * scaleSizeOne,
        y * scaleSizeOne,
        scaleSizeOne,
        scaleSizeOne,
      )
    ))
  )
)

export const render = state => pictures([
  renderGrid(state),
  renderSnake(state)
])
