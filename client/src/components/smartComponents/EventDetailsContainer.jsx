import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//import { Redirect } from 'react-router-dom'
import EventDetails from '../funcComponents/EventDetails'
import TicketList from '../funcComponents/TicketList'
import { getEvent } from '../../actions/events'
import { getTickets } from '../../actions/tickets'
import Paper from '@material-ui/core/Paper'

class EventDetailsContainer extends PureComponent {

    state = { editMode: false }

    componentDidMount() {
        const eventId = this.props.match.params.id
        this.props.getEvent(Number(eventId))
    }

    render() {
        console.log('eventdetails container props', this.props.event)

        const {event} = this.props 
        if(!event) return 'Loading ... '
        return(<Paper className='outer-paper'>
                <div>
                    <EventDetails event={event}/>
                    <TicketList ticket={event}/>
                </div>
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    event: state.events,
    tickets: state.event
})

export default connect(mapStateToProps, { getEvent, getTickets })(EventDetailsContainer)