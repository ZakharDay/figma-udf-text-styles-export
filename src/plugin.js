import { Controller } from './plugin/controller.js'

figma.showUI(__html__)
figma.ui.resize(300, 400)

figma.ui.onmessage = (popupMessage) => {
  const { type, data } = popupMessage

  switch (type) {
    case 'get-text-styles':
      Controller.getTextStylesAndSetToStore()
      break

    case 'export-text-styles':
      Controller.exportTextStyles()
      break

    case 'export-text-styles-with-vars':
      Controller.exportTextStylesWithVars()
      break

    default:
      console.log('Plugin: unknown message')
      break
  }
}
