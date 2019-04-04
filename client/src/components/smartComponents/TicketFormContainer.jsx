import React from 'react'
import { connect } from 'react-redux'
import { addTicket } from '../../actions/tickets'
import { getEvent } from '../../actions/events'
import TicketForm from '../funcComponents/TicketForm'

class TicketFormContainer extends React.Component {
    state = {
      formValues: {
          price: '',
          description: '',
          picture: '',
          eventId: this.props.event.id
      },
      
    }

    componentDidMount() {
      const eventId = this.props.match.params.id
      this.props.getEvent(Number(eventId))
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
      this.props.addTicket(this.state.formValues)
      this.props.history.push(`/events/${this.props.event.id}/tickets`)
    }
  
    render() {
      console.log('ticketformcontainer', this.props)
      return (<TicketForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state.formValues}
        event={this.props.event}
      />)
    }
  }
  
  const mapStateToProps = state => ({
    event: state.events
  })
  
  export default connect(mapStateToProps, { addTicket, getEvent })(TicketFormContainer)