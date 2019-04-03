import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import EventDetails from '../funcComponents/EventDetails'
import TicketContainer from './TicketContainer'
import { getEvent } from '../../actions/events'
import Paper from '@material-ui/core/Paper'

class EventDetailsContainer extends PureComponent {

    state = { editMode: false }

    componentDidMount() {
        const eventId = this.props.match.params.id
        this.props.getEvent(Number(eventId))
    }

    render() {
        console.log('eventdetails container', this.props.event)

        const {event, authenticated} = this.props
        if (!authenticated) return ( <Redirect to="/login" /> )

        if(!event) return 'Loading...'

        return(<Paper className='outer-paper'>
                <div>
                    <EventDetails event={this.props.event}/>
                </div>
            </Paper>
        )
    }
}
const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    event: state.events
})

export default connect(mapStateToProps, { getEvent })(EventDetailsContainer)