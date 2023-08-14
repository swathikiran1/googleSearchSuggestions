// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionObj, onChangeInputValue} = props
  const {suggestion, id} = suggestionObj

  const onChangeValue = () => {
    onChangeInputValue(suggestion)
  }

  return (
    <li>
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onChangeValue}
      />
    </li>
  )
}

export default SuggestionItem
