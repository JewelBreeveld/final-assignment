import React from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../../actions/events'
import EventForm from '../funcComponents/EventForm'

class EventFormContainer extends React.Component { // eventz CreateEventFormContainer.js
  state = {
    formValues: {
        name: '',
        description: '',
        pictureUrl: '',
        startDate: '',
        endDate: ''
    }
  }

  onChange = (event) => {
    this.setState({
        formValues: {
            ...this.state.formValues,
            [event.target.name]: event.target.value
        }
    })
  }

  onSubmit = (event) => {
    event.preventDefault(event)
    this.setState({
        formValues: this.state.formValues
    })
    this.props.addEvent(this.state.formValues)
    this.props.history.push('/events')
  }

  render() {
    console.log('eventlistcontainer', this.props)
    // if editMode = false return eventform onsubmit new, if editmode is true return eventfrom onsubmit edit
    return (<EventForm
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      values={this.state.formValues}
      event={this.props.event}
      // editMode={this.state.editMode}
    />)
  }
}

export default connect(null, { addEvent })(EventFormContainer)
