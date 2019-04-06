import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { userId } from '../../jwt'
import TicketList from '../funcComponents/TicketList'
import { getEvent } from '../../actions/events'
import { getUsers, getUser } from '../../actions/users'
import Paper from '@material-ui/core/Paper'
import TicketFormContainer from './TicketFormContainer'
import { getTicket } from '../../actions/tickets';

class TicketListContainer extends PureComponent {

    componentDidMount() {
        const eventId = this.props.match.params.id
        this.props.getEvent(Number(eventId))
    }

    render() {
        console.log('ticketlistcontainer props', this.props)

        const { events, currentUser, userId } = this.props  //
        if(!events) return 'Loading ... '
        return(<Paper className='outer-paper'>
        TicketListContainer
                <div>
                    {currentUser 
                    ? <TicketFormContainer userId={userId}/>
                    : 'Log in to create a ticketsale'}
                    
                    <TicketList event={events} userId={userId}/>  
                    {/* userId={userId} */}
                </div>
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    events: state.events,
    user: state.users,
    currentUser: state.currentUser,
    userId: state.currentUser && userId(state.currentUser.jwt)
})


export default connect(mapStateToProps, {getEvent, getUsers, getUser, getTicket})(TicketListContainer)