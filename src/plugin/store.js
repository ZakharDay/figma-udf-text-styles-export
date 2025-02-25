// const TextStyle = {
//   type: 'TEXT',

//   // Style name, desc, docs
//   name: '',
//   description: '',
//   documentationLinks: [],

//   // Nodes that uses this style
//   consumers: [],

//   // We need this
//   fontName: {
//     family: '',
//     style: ''
//   },
//   fontSize: 10,
//   lineHeight: {
//     unit: 'PIXELS',
//     value: 13
//   },

//   // Other things
//   hangingList: false,
//   hangingPunctuation: false,
//   leadingTrim: 'NONE',
//   letterSpacing: {
//     unit: 'PERCENT',
//     value: 0
//   },
//   listSpacing: 0,
//   paragraphIndent: 0,
//   paragraphSpacing: 0,
//   remote: false,
//   textCase: 'ORIGINAL',
//   textDecoration: 'NONE',
//   textDecorationColor: null,
//   textDecorationOffset: null,
//   textDecorationSkipInk: null,
//   textDecorationStyle: null,
//   textDecorationThickness: null
// }

let textStyles = []
let textStylesWithVars = []

function getTextStyles() {
  return textStyles
}

function setTextStyles(styles) {
  textStyles = styles
}

function getTextStylesWithVars() {
  return textStylesWithVars
}

function setTextStylesWithVars(styles) {
  textStylesWithVars = styles
}

const Store = {
  getTextStyles,
  setTextStyles,
  getTextStylesWithVars,
  setTextStylesWithVars
}

export { Store }
