function loadLocalTextStyles() {
  return new Promise((resolve, reject) => {
    figma.getLocalTextStylesAsync().then((data) => {
      resolve(data)
    })
  })
}

function loadVarById(id) {
  return new Promise((resolve, reject) => {
    figma.variables.getVariableByIdAsync(id).then((data) => {
      resolve(data)
    })
  })
}

const Loaders = {
  loadLocalTextStyles,
  loadVarById
}

export { Loaders }
