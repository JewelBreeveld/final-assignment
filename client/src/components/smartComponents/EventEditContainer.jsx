import React from 'react'
import { connect } from 'react-redux'
import EventForm from '../funcComponents/EventForm'
import { getEvent } from '../../actions/events'
//import { deleteEvent } from '../actions/deleteEvent'
//import { updateEvent } from '../../actions/events'
 
class EventEditContainer extends React.Component {
  
  state = { editMode: false }

  componentDidMount() {
    this.props.getEvent(Number(this.props.match.params.id))
  }
  
  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }

  onEdit = () => {
    // intialize editing mode:
    // set the starting value of the fields to the event details
    this.setState({
        editMode: true,
        formValues: {
            name: this.props.event.name,
            description: this.props.event.description,
            pictureUrl: this.props.event.pictureUrl,
            startDate: this.props.event.startDate,
            endDate: this.props.event.endDate,
      }
    })
  }

  onChange = (event) => {
    // update the formValues property with the new data from the input field
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
      editMode: false
    })
    this.props.updateEvent(this.props.event.id, this.state.formValues)
  }

  render() {
    console.log('eventEditContainer', this.props.event)
    return <EventForm   event={this.props.event} 
                          onDelete={this.onDelete} 
                          onEdit={this.onEdit} 
                          editMode={this.state.editMode}
                          onChange={this.onChange}
                          onSubmit={this.onSubmit}
                          formValues={this.state.formValues}/>
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {getEvent})(EventEditContainer) //, deleteEvent, updateEvent