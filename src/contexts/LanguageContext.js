import React from 'react'

const Context = React.createContext('english')

export class LanguageStore extends React.Component {//Named export value req. {} in import 
  state = { language: 'english'}

  onLanguageChange = language => {
    this.setState({ language })
  } 

  render() {
    return (
      // eslint-disable-next-line no-undef
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context




// export default React.createContext('english') //default value. Anything you want to pass through as properties, put in these brackets. One time, fixed, when created.