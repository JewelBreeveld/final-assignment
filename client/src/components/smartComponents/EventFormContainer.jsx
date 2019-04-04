import React from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../../actions/events'
import EventForm from '../funcComponents/EventForm'

class CreateEventFormContainer extends React.Component {
  state = {
    formValues: {
        name: '',
        description: '',
        picture: '',
        startdate: '',
        enddate: ''
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
    event.preventDefault()
    this.setState({
        formValues: {
            
        }
    })
    this.props.addEvent(this.state)
  }

  render() {
    //console.log('eventlistcontainer', this.state)
    return (<EventForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, { addEvent })(CreateEventFormContainer)
