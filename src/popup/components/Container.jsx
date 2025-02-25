import React from 'react'

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
      <div>
        <div>{textStylesLength} styles</div>

        <div onClick={() => this.messageToPlugin('export-text-styles')}>
          Export Styles
        </div>

        <div
          onClick={() => this.messageToPlugin('export-text-styles-with-vars')}
        >
          Export Styles With Vars
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="L_Main">
        {this.props.textStylesLength ? this.renderUI() : this.renderLoader()}
      </div>
    )
  }
}
