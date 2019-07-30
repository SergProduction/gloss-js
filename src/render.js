import { t } from './lib'


export const c = {
  color: t('color', 'picture'),
  border: t('color', 'picture'),
  pictures: t('pictures'),
  rect: t('x', 'y', 'width', 'height'),
  arc: t('x', 'y', 'radius', 'startAngle', 'endAngle', 'anticlockwise'),
}


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
      case c.border.type: {
        return () => {
          swtchType(node.zipParams.picture)()
          ctx.strokeStyle = node.zipParams.color;
          ctx.stroke();
        }
      }
      case c.color.type: {
        return () => {
          swtchType(node.zipParams.picture)()
          ctx.fillStyle = node.zipParams.color;
          ctx.fill();
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
