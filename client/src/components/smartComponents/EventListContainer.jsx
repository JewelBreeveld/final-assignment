import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {userId} from '../../jwt'
import EventList from '../funcComponents/EventList'
import { getEvents, getEvent } from '../../actions/events'
import { getUsers, getUser } from '../../actions/users'
import Paper from '@material-ui/core/Paper'
import '../../styles/Event.css'
import Fab from '@material-ui/core/Fab'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'

class EventsListContainer extends PureComponent {

    componentDidMount() {
        this.props.getEvents()
        this.props.getUsers()
        this.props.getUser(this.props.userId)
    }

    render() {
    console.log('eventlistcontainer props', this.props)
    
    const { events, currentUser, userId, getEvent } = this.props 

    if(!events) return 'Loading...'
        return (
            <Paper> 
            <Card  className='outer-card'>
                EventsListContainer
            </Card> 
                <Card className='outer-card'>
                    {!currentUser ? Fab.disabled=true && 'Log in to create an event' : 
                    <Fab variant="extended" 
                                    size='small'
                                    style={{margin: 20}} 
                                    className='create-new-event' 
                                    component={Link} 
                                    to={`/events/create`}>
                                    Create new Event
                    </Fab>
                    }
                </Card>
                <div>
                    <EventList events={events} onClick={this.onClick} user={userId} getEvent={getEvent}/>
                </div>
            </Paper>
        )
  }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    events: state.events,
    event: state.event,
    users: state.users,
    currentUser: state.currentUser,
    userId: state.currentUser && userId(state.currentUser.jwt)
})

export default connect(mapStateToProps, { getEvents, getEvent, getUsers, getUser })(EventsListContainer)