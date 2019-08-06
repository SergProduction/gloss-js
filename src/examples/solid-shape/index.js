import { play } from '../../core/game'
import {
  line,
  arc,
  color,
  border,
  shape,
  pictures
} from '../../core/render-types'


const RADIUS = 30

const degToRad = deg => deg / (180 / Math.PI)

const render = () => border(
  '#f00',
  shape([
    line([
      { x: 100, y: 100 },
      { x: 150, y: 100 },
    ]),
    arc(
      150 + RADIUS, 120,
      RADIUS,
      degToRad(200), degToRad(150),
      false
    ),
    line([
      { x: 150, y: 120 },
      { x: 100, y: 120 },
    ]),
  ])
)

export default play(
  {
    canvas: document.getElementById("canvas"),
    width: 500,
    height: 500,
  },
  0,
  {},
  render,
  (eventName, event, state) => state,
  (fpsStep, state) => state,
)
