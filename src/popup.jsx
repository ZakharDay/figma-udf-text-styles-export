import './popup/stylesheets/style.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import Container from './popup/components/Container.jsx'

const props = {}
let root

window.onmessage = async (event) => {
  const { type, data } = event.data.pluginMessage

  switch (type) {
    case 'get-text-styles-response':
      props.textStylesLength = data
      break

    default:
      console.log('Popup: unknown message')
      break
  }

  root.render(<Container {...props} />)
}

document.addEventListener('DOMContentLoaded', () => {
  root = createRoot(document.getElementById('react-root'))
  root.render(<Container {...props} />)
})
