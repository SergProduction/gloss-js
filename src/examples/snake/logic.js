import { caseOf } from './lib'
import { DIRECTION, SCALE_SIZE_MAX } from './constants'





// Snake -> Dir -> Snake
const snakeAddHead = ([head, ...tail], direction) => caseOf(direction, {
  [DIRECTION.left]: [
    { x: head.x <= 0
      ? SCALE_SIZE_MAX
      : head.x - 1
    , y: head.y },
    head,
    ...tail
  ],
  [DIRECTION.up]: [
    { x: head.x
    , y: head.y <= 0
      ? SCALE_SIZE_MAX
      : head.y - 1 },
    head,
    ...tail
  ],
  [DIRECTION.right]: [
    { x: head.x >= SCALE_SIZE_MAX
      ? 0
      : head.x + 1
    , y: head.y },
    head,
    ...tail
  ],
  [DIRECTION.down]: [
    { x: head.x
    , y: head.y >= SCALE_SIZE_MAX
      ? 0
      : head.y + 1
    },
    head,
    ...tail
  ],
  _: [head, ...tail]
})


// Snake -> Snake
const snakeRemoveTail = snake => snake.slice(0, snake.length - 1)


// Int -> State -> Direction
const getDirectionFromKeyCode = (keyCode, state) => caseOf(keyCode, {
  37: DIRECTION.left,
  38: DIRECTION.up,
  39: DIRECTION.right,
  40: DIRECTION.down,
  _: state.direction
})

// Snake -> Snake
const moveSnake = (snake, direction) => snakeRemoveTail(
  snakeAddHead(snake, direction)
)


export const transformStateInEvent = (eventType, event, state) => caseOf(eventType, {
  keydown: {
    ...state,
    direction: getDirectionFromKeyCode(event.keyCode, state)
  },
  _: state
})


export const transformStateFPS = (fps, state) => ({
  ...state,
  snake: moveSnake(state.snake, state.direction)
})
