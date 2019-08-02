import { render as renderCore } from "./render"
import { fpsControll } from "./fps-controll"

export function play(
  settings,
  fps,
  initialState,
  render,
  transformStateInEvent,
  transformStateFPS,
  listenersEvenetsList
) {
  const { canvas } = settings

  canvas.width = settings.width
  canvas.height = settings.height
  canvas.style.border = "1px solid #ccc"

  const ctx = canvas.getContext("2d")

  let state = initialState

  const controll = fpsControll(fps, settings.showFPS, fpsStep => {
    ctx.clearRect(0, 0, settings.width, settings.height)
    ctx.beginPath()

    state = transformStateFPS(fpsStep, state)

    const astRender = render(state)

    renderCore(ctx, astRender)
  })

  listenersEvenetsList.forEach(eventType => {
    const target = eventType === 'mousemove'
      ? canvas
      : window

    target.addEventListener(eventType, event => {
      state = transformStateInEvent(eventType, event, state)
    })
  })

  controll.start()

  window.controllGame = controll

  return controll
}
