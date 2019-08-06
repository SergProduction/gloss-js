import * as c from './render-types'



export const render = (ctx, ast) => {
  // console.log(ast)
  
  const swtchType = (node) => {
    // console.log({ node })
    switch (node.type) {
      case c.arc.type: {
        return () => {
          ctx.arc(...node.valuesParams)
        }
      }
      case c.rect.type: {
        return () => { ctx.rect(...node.valuesParams) }
      }
      case c.line.type: {
        return () => {
          c.line.arrayPath.forEach((path, i) => {
            if (i === 0) {
              ctx.moveTo(path.x, path.y)
            }
            else {
              ctx.lineTo(path.x, path.y)
            }
          })
        }
      }
      case c.border.type: {
        return () => {
          swtchType(node.zipParams.picture)()
          ctx.strokeStyle = node.zipParams.color
          ctx.stroke()
        }
      }
      case c.color.type: {
        return () => {
          swtchType(node.zipParams.picture)()
          ctx.fillStyle = node.zipParams.color
          ctx.fill()
        }
      }
      case c.pictures.type: {
        return () => {
          node.zipParams.pictures.map(pic => (
            swtchType(pic)()
          ))
        }
      }
      case c.shape.type: {
        return () => {
          ctx.beginPath()
          node.zipParams.pictures.map(pic => (
            swtchType(pic)()
          ))
          ctx.closePath()
        }
      }
    }
  }

  const res = swtchType(ast)

  res()
}
