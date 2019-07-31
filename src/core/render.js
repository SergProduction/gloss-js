import * as c from './render-types'



export const render = (ctx, ast) => {
  // console.log(ast)
  
  const swtchType = (node) => {
    // console.log({ node })
    switch (node.type) {
      case c.arc.type: {
        return () => {
          ctx.beginPath()
          ctx.arc(...node.valuesParams)
        }
      }
      case c.rect.type: {
        return () => { ctx.rect(...node.valuesParams) }
      }
      case c.line.type: {
        return () => {
          // ctx.beginPath()
          ctx.moveTo(node.zipParams.startX, node.zipParams.startY)
          ctx.lineTo(node.zipParams.endX, node.zipParams.endY)
          ctx.closePath()
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
    }
  }

  const res = swtchType(ast)

  res()
}
