import {
  color,
  border,
  pictures,
  rect,
  line
} from "../core/render-types"

import { canvasParam, countCellGrid } from "./constants"


const oneCellSize = canvasParam.width / countCellGrid



const renderXineGrid = ({ word }) => pictures(
  word.map(
    (row, y) => line(0, y * oneCellSize, canvasParam.width, y * oneCellSize)
  )
)

const renderYineGrid = ({ word }) => pictures(
  word.map(
    (row, y) => line(y * oneCellSize, 0, y * oneCellSize, canvasParam.height)
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
        x * oneCellSize,
        y * oneCellSize,
        oneCellSize,
        oneCellSize,
      )
    ))
  )
)

export const render = state => pictures([
  renderGrid(state),
  renderSnake(state)
])
