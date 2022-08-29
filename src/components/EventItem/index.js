// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItemDetails, onClickButton} = props
  const {id, imageUrl, name, location} = eventItemDetails

  clickEvent = () => {
    onClickButton(id)
  }

  return (
    <li className="lists">
      <div onClick={clickEvent()}>
        <img className="image1" src={imageUrl} alt="event" />
        <div>
          <p>{name}</p>
          <p>{location}</p>
        </div>
      </div>
    </li>
  )
}
export default EventItem
