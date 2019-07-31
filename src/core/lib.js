const zipToObj = (arr1, arr2) => arr1.legth < arr2.length
  ? arr1.reduce((acc, it, i) => ({ ...acc, [it]: arr2[i] }), {})
  : arr2.reduce((acc, it2, i) => ({ ...acc, [arr1[i]]: it2 }), {})


export const t = (...namesParams) => {
  const type = Symbol()
  const constructor = (...valuesParams) => ({
    type,
    namesParams,
    valuesParams,
    zipParams: zipToObj(namesParams, valuesParams)
  })
  constructor.type = type
  return constructor
}


