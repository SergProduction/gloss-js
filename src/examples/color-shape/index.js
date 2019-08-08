import { play } from '../../core/game'
import {
  line,
  arc,
  color,
  border,
  shape,
  pictures
} from '../../core/render-types'




const SQUART_SIZE = 40


const renderSquartRed = (eat) => color(
  '#f00',
  // shape([
    rect(eat.x, eat.y, SQUART_SIZE, SQUART_SIZE)
  // ])
)

const render = () => border(
  '#f00',
  shape([
    line([
      { x: 100, y: 100 },
      { x: 150, y: 100 },
    ]),
    arc(
      (150 + RADIUS), 120,
      RADIUS,
      degToRad(200), degToRad(160),
      false
    ),
    line([
      { x: 150, y: 140 },
      { x: 100, y: 140 },
    ], true),
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
  render
)
