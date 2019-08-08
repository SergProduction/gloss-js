import { play } from '../../core/game'
import { FPS, initialState, CANVAS_PARAM } from './constants'
import { transformStateInEvent, transformStateFPS } from './logic'
import { render } from './render'




export default play(
  {
    canvas: document.getElementById("canvas"),
    width: CANVAS_PARAM.width,
    height: CANVAS_PARAM.height,
    showFPS: true,
  },
  FPS,
  initialState,
  render,
  transformStateInEvent,
  transformStateFPS,
  ['keydown']
)
