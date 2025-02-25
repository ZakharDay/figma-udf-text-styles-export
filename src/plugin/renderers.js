import { Store } from './store'

function renderSectionFrame() {
  const frame = figma.createFrame()
  frame.name = 'Text Styles'
  frame.x = figma.viewport.center.x
  frame.y = figma.viewport.center.y
  frame.horizontalPadding = 100
  frame.verticalPadding = 100
  frame.itemSpacing = 100
  frame.layoutMode = 'HORIZONTAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.counterAxisAlignItems = 'MIN'
  frame.fills = [{ type: 'SOLID', color: { r: 0.26, g: 0.26, b: 0.26 } }]

  return frame
}

function renderCodeFrame() {
  const frame = figma.createFrame()
  frame.name = 'CSS Variables'
  frame.horizontalPadding = 48
  frame.verticalPadding = 48
  frame.layoutMode = 'VERTICAL'
  frame.primaryAxisSizingMode = 'AUTO'
  frame.counterAxisSizingMode = 'AUTO'
  frame.counterAxisAlignItems = 'CENTER'

  return frame
}

function renderCodeTextStyles(codeFrame, styles, type = 'no vars') {
  const codeLines = []

  styles.forEach((style, i) => {
    const prefix = `--${style.name}`

    Object.keys(style).forEach((key) => {
      if (key != 'name' && key != 'boundVariables') {
        switch (key) {
          case 'fontSize':
            if (type == 'vars' && style[key].varName) {
              codeLines.push(`${prefix}-font-size: var(${style[key].varName});`)
            } else {
              codeLines.push(`${prefix}-font-size: ${style[key].value}px;`)
            }

            break

          case 'lineHeight':
            if (type == 'vars' && style[key].varName) {
              codeLines.push(
                `${prefix}-line-height: var(${style[key].varName});`
              )
            } else {
              const unit = style[key].unit == 'PERCENT' ? '%' : 'px'

              codeLines.push(
                `${prefix}-line-height: ${style[key].value}${unit};`
              )
            }

            break

          case 'fontFamily':
            codeLines.push(`${prefix}-font-family: "${style[key]}";`)
            break

          case 'fontStyle':
            codeLines.push(`${prefix}-font-style: ${style[key].toLowerCase()};`)
            break
        }
      }
    })

    codeLines.push(``)
  })

  const code = figma.createText()
  code.characters = `${codeLines.join('\r\n')}`

  codeFrame.appendChild(code)
}

async function renderFigmaTemplate(type = 'no vars') {
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' })

  const section = renderSectionFrame()
  const codeFrame = renderCodeFrame()

  let textStyles

  if (type == 'no vars') {
    textStyles = Store.getTextStyles()
  } else if (type == 'vars') {
    textStyles = Store.getTextStylesWithVars()
  }

  renderCodeTextStyles(codeFrame, textStyles, type)

  section.appendChild(codeFrame)

  figma.currentPage.selection = [section]
  figma.viewport.scrollAndZoomIntoView([section])
}

const Renderers = {
  renderFigmaTemplate
}

export { Renderers }
