import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { userId } from '../../jwt'
import TicketList from '../funcComponents/TicketList'
import { getEvent, getEvents } from '../../actions/events'
import { getUsers, getUser } from '../../actions/users'
import Paper from '@material-ui/core/Paper'
import TicketFormContainer from './TicketFormContainer'
import { getTicket } from '../../actions/tickets';
import Card from '@material-ui/core/Card'

class TicketListContainer extends PureComponent {

    state = {
        editMode: false
    }

    componentDidMount() {
        console.log('eventId',this.props.match.params.id)
        const eventId = this.props.match.params.id
        this.props.getEvent(Number(eventId))
        this.props.getEvents()
        this.props.getUser(Number(this.props.userId))

    }

    render() {
        console.log('ticketlistcontainer props', this.props)

        const { event, events, currentUser, userId } = this.props  //
        if(!event) return 'Loading ... '
        return(<Paper className='outer-paper'>
        TicketListContainer
                <div>
                    {currentUser 
                    ? <TicketFormContainer userId={userId}/>
                    : <Card className='outer-card'>Log in to create a ticketsale</Card>}
                    
                    <TicketList events={events} event={event} userId={userId}/>  
                    {/* userId={userId} */}
                </div>
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    events: state.events,
    event: state.event,
    user: state.users,
    currentUser: state.currentUser,
    userId: state.currentUser && userId(state.currentUser.jwt)
})


export default connect(mapStateToProps, {getEvent, getEvents, getUsers, getUser, getTicket})(TicketListContainer)


//import EventForm from '../funcComponents/EventForm'
