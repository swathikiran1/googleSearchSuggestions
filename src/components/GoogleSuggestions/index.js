// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem/index'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: '', suggestion1: ''}

  onChangeSuggestion = event => {
    const text = event.target.value
    this.setState({searchInput: text, suggestion1: text})
  }

  onAutomaticSuggestion = suggestion => {
    const suggestionValue = suggestion
    this.setState({suggestion1: suggestionValue, searchInput: suggestionValue})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput, suggestion1} = this.state

    const newSuggestionsList = suggestionsList.filter(eachItem =>
      eachItem.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase() && suggestion1.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-logo"
            />
            <input
              type="search"
              value={suggestion1}
              placeholder="Search Google"
              className="search-input"
              onChange={this.onChangeSuggestion}
            />
          </div>
          <ul className="unordered-list">
            {newSuggestionsList.map(eachItem => (
              <SuggestionItem
                suggestionObj={eachItem}
                key={eachItem.id}
                onChangeInputValue={this.onAutomaticSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
