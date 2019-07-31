import {
  color,
  arc,
  border,
  pictures,
  rect,
  line
} from "../core/render-types"

import { canvasParam } from "./constants"


const countCellGrid = 20
const oneCellSize = canvasParam.width / countCellGrid


const redRect = color(
  "rgb(200, 0, 0)",
  rect(10, 10, 100, 100)
)

const blueAcr = state => (
  color(
    "rgba(0, 132, 255, 0.5)",
    arc(state.pos.x, state.pos.y, 50, 0, 2 * Math.PI)
  )
)

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


export const render = state => pictures([
  renderGrid(state),
  blueAcr(state)
])
