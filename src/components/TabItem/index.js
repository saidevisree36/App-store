// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabChange, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickButton = () => {
    onClickTabChange(tabId)
  }

  const activeTabCursorChange = isActive ? 'active-tab-btn' : 'btn'
  return (
    <li className="tab-container-list">
      <button
        type="button"
        onClick={onClickButton}
        className={`${activeTabCursorChange}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
