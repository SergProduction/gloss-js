import { play } from '../core/game'
import { FPS, initialState, canvasParam } from './constants'
import { transformStateInEvent, transformStateFPS } from './logic'
import { render } from './render'




export default play(
  {
    canvas: document.getElementById("canvas"),
    width: canvasParam.width,
    height: canvasParam.height,
    showFPS: true,
  },
  FPS,
  initialState,
  render,
  transformStateInEvent,
  transformStateFPS,
  ['keydown']
)
