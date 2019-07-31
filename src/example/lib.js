export const caseOf = (key, obj) => obj.hasOwnProperty(key)
  ? obj[key]
  : obj._