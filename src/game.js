import { render as renderCore } from './render'
import { fpsControll } from './fps-controll'


export function play(ctx, fps, initialState, render, transformStateInEvent, transformStateFPS, listenersEvenetsList) {
  let state = initialState
  const controll = fpsControll(fps, (fpsStep) => {

    // TODO: 
    ctx.clearRect(0, 0, 200, 200)
    ctx.beginPath()

    state = transformStateFPS(fpsStep, state)
    const astRender = render(state)
    renderCore(ctx, astRender)
  })

  listenersEvenetsList.map(eventType => {
    addEventListener(eventType, (event) => {
      state = transformStateInEvent(eventType, event, state)
    })
  })

  controll.start()
}
