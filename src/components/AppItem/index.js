// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="each-app-item">
      <img src={imageUrl} alt={appName} className="each-app-item-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
