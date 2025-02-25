function messageToPopup(type, data) {
  figma.ui.postMessage({
    type,
    data
  })
}

const Utilities = {
  messageToPopup
}

export { Utilities }
