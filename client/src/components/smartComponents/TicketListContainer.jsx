import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { userId } from '../../jwt'
import TicketList from '../funcComponents/TicketList'
import { getEvent } from '../../actions/events'
import { getUsers } from '../../actions/users'
import Paper from '@material-ui/core/Paper'

class TicketListContainer extends PureComponent {

    state = { editMode: false }

    componentDidMount() {
        const eventId = this.props.match.params.id
        this.props.getEvent(Number(eventId))
    }

    render() {
        console.log('ticketlistcontainer props', this.props)

        const { events, currentUser } = this.props 
        if(!events) return 'Loading ... '
        return(<Paper className='outer-paper'>
                <div>
                    <TicketList event={events} /> 
                </div>
            </Paper>
        )
    }
}
//userId={currentUser && userId(currentUser.jwt)}
const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    events: state.events,
    users: state.users,
    currentUser: state.currentUser,
    // userId: state.currentUser && userId(state.currentUser.jwt)
})

export default connect(mapStateToProps, { getEvent, getUsers })(TicketListContainer)