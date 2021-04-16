import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen'
  }

  renderButton(color) {
    return (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {({ language }) => this.renderSubmit(language)}
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