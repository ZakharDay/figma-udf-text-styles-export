import React from 'react'
import Button from './components/Button.jsx'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.messageToPlugin('get-text-styles')
  }

  messageToPlugin = (type, data = '') => {
    parent.postMessage(
      {
        pluginMessage: {
          type,
          data
        }
      },
      '*'
    )
  }

  renderLoader = () => {
    return <div>Loading</div>
  }

  renderUI = () => {
    const { textStylesLength } = this.props

    return (
      <>
        <header>
          <h1>Export Text Styles</h1>
          <p className="descriptor">{textStylesLength} styles found</p>
        </header>

        <section>
          <p className="centered">Choose the type of export</p>

          <Button
            type="primary"
            text="Export With Vars"
            handleClick={() =>
              this.messageToPlugin('export-text-styles-with-vars')
            }
          />

          <Button
            type="secondary"
            text="Export With Values"
            handleClick={() => this.messageToPlugin('export-text-styles')}
          />
        </section>
      </>
    )
  }

  render() {
    return (
      <div className="Container">
        {this.props.textStylesLength ? this.renderUI() : this.renderLoader()}
      </div>
    )
  }
}
