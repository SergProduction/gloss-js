import * as c from './render-types'



export const render = (ctx, ast) => {
  const swtchType = (node) => {
    switch (node.type) {
      case c.arc.type: {
        return () => {
          ctx.arc(...node.valuesParams)
        }
      }
      case c.circle.type: {
        return () => {
          ctx.arc(...node.valuesParams, 0, 2 * Math.PI)
        }
      }
      case c.rect.type: {
        return () => { ctx.rect(...node.valuesParams) }
      }
      case c.line.type: {
        return () => {
          node.zipParams.path.forEach((p, i) => {
            if (i === 0 && node.zipParams.notMove !== true) {
              ctx.moveTo(p.x, p.y)
            }
            else {
              ctx.lineTo(p.x, p.y)
            }
          })
        }
      }
      case c.border.type: {
        return () => {
          swtchType(node.zipParams.shape)()
          ctx.strokeStyle = node.zipParams.color
          ctx.stroke()
        }
      }
      case c.color.type: {
        return () => {
          swtchType(node.zipParams.shape)()
          ctx.fillStyle = node.zipParams.color
          ctx.fill()
        }
      }
      case c.pictures.type: {
        return () => {
          node.zipParams.shapes.map(pic => (
            swtchType(pic)()
          ))
        }
      }
      case c.shape.type: {
        return () => {
          ctx.beginPath()
          node.zipParams.picture.map(pic => (
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
