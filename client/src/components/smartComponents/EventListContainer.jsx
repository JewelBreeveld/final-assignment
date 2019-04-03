import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import EventList from '../funcComponents/EventList'
import { getEvents } from '../../actions/events'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import '../../styles/Event.css'

class EventsListContainer extends PureComponent {
    componentDidMount() {
        if(this.props.authenticated) {
            if(this.props.events === null) this.props.getEvents()
        }
    }

    render() {
    //console.log('eventcontainer', this.props.events)
    const {events, authenticated, createEvent} = this.props

    if (!authenticated) return ( <Redirect to="/login" /> )

    if(!events) return 'Loading...'
        return (
            <Paper className='outer-paper'>
                <Button color="primary" variant="contained" onClick={createEvent} className="create-game">
                    Create new Event
                </Button>
                <div>
                    <EventList events={this.props.events} />
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