import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen'
  }

  renderButton(color) {
    return (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {(value) => this.renderSubmit(value)}
      </LanguageContext.Consumer>
    </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button

// static contextType = LanguageContext //'static' adds a property directly to the class itself. Same as "Button.contextType = LanguageContext"

// render() {
//   const text = this.context === 'english' ? 'Submit' : 'Voorleggen'

//this.context = > single object from context
//.Consumer => multiple objects from context 