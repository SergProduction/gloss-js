export const caseOf = (key, obj) => obj.hasOwnProperty(key)
  ? obj[key]
  : obj._


export const getRandomInt = (min, max) => (
    Math.floor(Math.random() * (max - min + 1)) + min
)
