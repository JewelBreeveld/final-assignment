import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addTicket } from '../../actions/tickets'
import { getEvent } from '../../actions/events'
import TicketForm from '../funcComponents/TicketForm'



class TicketFormContainer extends PureComponent {
    state = {
      formValues: {
          price: '',
          description: '',
          picture: '',
          eventId: this.props.event.id
      },
      editMode: false
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
      this.props.updateEvent(this.props.event.id)
    }

    onEdit = () => {
      // intialize editing mode:
      // set the starting value of the fields to the event details
      this.setState({
        editMode: true,
        formValues: {
          name: this.props.event.name,
          date: this.props.event.date,
          description: this.props.event.description
        }
      })
    }

    // onClick () {
    //   window.location.href=window.location.href
    // }

    render() {
      console.log('ticketformcontainer', this.props)
      return (
        <TicketForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state.formValues}
        event={this.props.event}
        onClick={this.props.onClick}
        userId={this.props.userId}/>
        )
    }
  }
  
  const mapStateToProps = state => ({
    event: state.events
  })
  
  export default connect(mapStateToProps, { addTicket, getEvent})(TicketFormContainer)