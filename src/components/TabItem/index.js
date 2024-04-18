// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, isActive, selectedTabItem} = props
  const {displayText, tabId} = eachTab

  const subbu = isActive ? 'current-tab' : ''
  console.log(subbu)

  const tabClicked = () => {
    selectedTabItem(tabId)
  }

  return (
    <li className="each-tab">
      <button type="button" className={subbu} onClick={tabClicked}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
