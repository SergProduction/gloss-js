
export const transformStateInEvent = (eventType, event, state) => {
  switch (eventType) {
    case 'mousemove': {
      return {
        ...state,
        pos: { x: event.offsetX, y: event.offsetY }
      }
    }
    case 'keypress': {
      console.log(event)
      return state
    }
    default: {
      return state
    }
  }
}

export const transformStateFPS = (fps, state) => state
