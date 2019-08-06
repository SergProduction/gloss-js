import { render as renderCore } from "./render"
import { fpsControl } from "./fps-control"

export function play(
  settings,
  fps = 0,
  initialState = {},
  render,
  transformStateInEvent = (eventName, event, state) => state,
  transformStateFPS = (fpsState, state) => state,
  listenersEvenetsList = []
) {
  const { canvas } = settings

  canvas.width = settings.width
  canvas.height = settings.height
  canvas.style.border = "1px solid #ccc"

  const ctx = canvas.getContext("2d")

  let state = initialState

  // first render
  renderCore(ctx, render(state))


  const control = fpsControl(fps, settings.showFPS, fpsStep => {
    ctx.clearRect(0, 0, settings.width, settings.height)
    ctx.beginPath()

    state = transformStateFPS(fpsStep, state)

    renderCore(ctx, render(state))
  })

  listenersEvenetsList.forEach(eventType => {
    const target = eventType === 'mousemove'
      ? canvas
      : window

    target.addEventListener(eventType, event => {
      state = transformStateInEvent(eventType, event, state)
    })
  })

  control.start()

  window.controlGame = control

  return control
}
