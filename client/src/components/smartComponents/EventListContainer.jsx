import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import EventList from '../funcComponents/EventList'
import { getEvents } from '../../actions/events'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import '../../styles/Event.css'
//import EventForm from '../funcComponents/EventForm'

class EventsListContainer extends PureComponent {

    componentDidMount() {
        // if(this.props.authenticated) {
        //     if(this.props.events === null) this.props.getEvents()
        // }
        this.props.getEvents()
    }



    render() {
    console.log('eventcontainer props', this.props)
    
    const {events, authenticated} = this.props //createEvent

    //if (!authenticated) return ( <Redirect to="/login" /> )

    if(!events) return 'Loading...'
        return (
            <Paper className='outer-paper'>
                {/* <Button color="primary" variant="contained" className="create-game" >
                        Create new Event
                </Button> */}
                {/* {authenticated ? <EventForm /> : 'You need to log in to create an event'} */}
                <div>
                    <EventList events={events} />
                </div>
            </Paper>
        )
  }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    events: state.events
})

export default connect(mapStateToProps, { getEvents })(EventsListContainer)

//import EventForm from '../smartComponents/EventForm'