import { c } from './render'
import { play } from './game'



const canvas = document.getElementById('canvas')

const canvasSettings = {
  width: 300,
  height: 300,
}

canvas.width = canvasSettings.width
canvas.height = canvasSettings.height
canvas.style.border = '1px solid #ccc'

const ctx = canvas.getContext('2d')


const redRect = c.color(
  'rgb(200, 0, 0)',
  c.rect(10, 10, 100, 100)
)

const blueAcr = (state) => c.color(
  'rgba(0, 132, 255, 0.5)',
  c.arc(
    state.pos.x,
    state.pos.y,
    50, 0, 2 * Math.PI
  )
)


const initialState = {
  pos: { x: 0, y: 0 }
}

const render = state => (
  c.pictures([
    redRect,
    blueAcr(state)
  ])
)

const transformStateInEvent = (eventType, event, state) => {
  switch(eventType) {
    case 'mousemove': {
      return {
        ...state,
        pos:
          { x: event.offsetX
          , y: event.offsetY }
      }
    }
    default: {
      return state
    }
  }
}

const transformStateFPS = (fps, state) => state


play(ctx, 24, initialState, render, transformStateInEvent, transformStateFPS, ['mousemove'])











