import { Modifiers } from './modifiers'
import { Store } from './store'
import { Loaders } from './loaders'
import { Renderers } from './renderers'
import { Utilities } from './utilities'

function getTextStylesAndSetToStore() {
  Loaders.loadLocalTextStyles().then((styles) => {
    const textStyles = Modifiers.processTextStyles(styles)
    Store.setTextStyles(textStyles)

    Utilities.messageToPopup('get-text-styles-response', textStyles.length)
  })
}

function exportTextStyles() {
  Renderers.renderFigmaTemplate()
}

function exportTextStylesWithVars() {
  const textStylesWithVars = JSON.parse(JSON.stringify(Store.getTextStyles()))
  const promises = []

  textStylesWithVars.forEach((style) => {
    Object.keys(style.boundVariables).forEach((key) => {
      const promise = Loaders.loadVarById(style.boundVariables[key].id).then(
        (variable) => {
          style[key] = {
            unit: style[key].unit,
            value: style[key].value,
            varName: `--${variable.name}`
          }
        }
      )

      promises.push(promise)
    })
  })

  Promise.all(promises).then(() => {
    Store.setTextStylesWithVars(textStylesWithVars)
    Renderers.renderFigmaTemplate('vars')
  })
}

const Controller = {
  getTextStylesAndSetToStore,
  exportTextStyles,
  exportTextStylesWithVars
}

export { Controller }
