// Write your code here
import {Component} from 'react'

const status = {
  registered: 'REGISTERED',
  yet_to_register: 'YET_TO_REGISTER',
  registration_closed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  state = {
    EventStatus: status.initial,
  }

  renderInitial = () => (
    <div>
      <h1>Click on a event, to view its Registration details</h1>
    </div>
  )

  renderRegistered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registered-img.png"
        alt="registered"
      />
      <p>You have already registered for this event</p>
    </div>
  )

  renderYetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
    </div>
  )

  renderRegistrationClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registration closed"
      />
    </div>
  )

  renderPrimeDeals = () => {
    const {EventStatus} = this.state
    switch (EventStatus) {
      case status.registered:
        return this.renderRegistered()
      case status.yet_to_register:
        return this.renderYetToRegister()
      case status.registration_closed:
        return this.renderRegistrationClosed()
      default:
        return this.renderInitial()
    }
  }

  render() {
    return <>{this.renderPrimeDeals()}</>
  }
}
export default ActiveEventRegistrationDetails
