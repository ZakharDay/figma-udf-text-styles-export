function processTextStyles(styles) {
  const textStyles = []

  styles.forEach((style) => {
    const { type, name, fontName, lineHeight } = style

    if (type == 'TEXT') {
      const fontFamily = fontName.family
      const fontStyle = fontName.style

      const fontSize = {
        unit: 'PIXELS',
        value: style.fontSize
      }

      // let lineHeightInUnits = ''

      // if (lineHeight.unit == 'PIXELS') {
      //   lineHeightInUnits = [lineHeight.value, 'px'].join('')
      // }

      // if (lineHeight.unit == 'PERCENT') {
      //   lineHeightInUnits = [lineHeight.value, '%'].join('')
      // }

      const boundVariables = style.boundVariables

      textStyles.push({
        name,
        fontSize,
        lineHeight,
        fontFamily,
        fontStyle,
        boundVariables
      })
    }
  })

  return textStyles
}

const Modifiers = { processTextStyles }

export { Modifiers }
