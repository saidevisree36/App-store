// Write your code here
import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {appName, imageUrl} = appItemDetails

  return (
    <li className="app-item-container">
      <div className="app-container">
        <img src={imageUrl} alt="app-item" className="app-img" />
        <h1 className="app-heading">{appName}</h1>
      </div>
    </li>
  )
}

export default AppItem
