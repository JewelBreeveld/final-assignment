import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {userId} from '../../jwt'
import EventList from '../funcComponents/EventList'
import { getEvents } from '../../actions/events'
import { getUsers } from '../../actions/users'
import Paper from '@material-ui/core/Paper'
import '../../styles/Event.css'
import Fab from '@material-ui/core/Fab'
import { Link } from 'react-router-dom'
//import EventForm from '../funcComponents/EventForm'

class EventsListContainer extends PureComponent {

    componentDidMount() {
        this.props.getEvents()
        this.props.getUsers()
    }

    render() {
    console.log('eventlistcontainer props', this.props)
    
    const {events} = this.props //createEvent, authenticated,

    //if (!authenticated) return ( <Redirect to="/login" /> )

    if(!events) return 'Loading...'
        return (
            <Paper className='outer-paper'>
                <Fab variant="extended" 
                                size='small'
                                style={{margin: 20}} 
                                className='create-new-event' 
                                component={Link} 
                                to={`/events/create`}>
                                Create new Event
                </Fab>
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
    events: state.events,
    users: state.users,
    currentUser: state.currentUser,
    userId: state.currentUser && userId(state.currentUser.jwt)
    
})

export default connect(mapStateToProps, { getEvents, getUsers })(EventsListContainer)