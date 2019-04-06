import React from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../../actions/events'
import EventForm from '../funcComponents/EventForm'

class EventFormContainer extends React.Component {
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

  onClick () {

  }
 
  render() {
    console.log('eventlistcontainer', this.props)
    return (<EventForm
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      // onClick={this.onClick}
      values={this.state.formValues}
    />)
  }
}

export default connect(null, { addEvent })(EventFormContainer)
