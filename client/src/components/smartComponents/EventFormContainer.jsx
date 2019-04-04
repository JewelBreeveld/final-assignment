// import React from 'react'
// import { connect } from 'react-redux'
// import { addEvent } from '../actions/events'
// import EventForm from './EventForm.js'

// class CreateEventFormContainer extends React.Component {
//   state = {
//     name: '',
//     description: '',
//     picture: '',
//     startdate: '',
//     enddate: ''
//   }

//   onChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   onSubmit = (event) => {
//     event.preventDefault()
//     this.setState({
//         name: '',
//         description: '',
//         picture: '',
//         startdate: '',
//         enddate: ''
//     })
//     this.props.addEvent(this.state)
//   }

//   render() {
//     //console.log('eventlistcontainer', this.state)
//     return (<EventForm
//       onSubmit={this.onSubmit}
//       onChange={this.onChange}
//       values={this.state}
//     />)
//   }
// }

// export default connect(null, {createEvent})(CreateEventFormContainer)
