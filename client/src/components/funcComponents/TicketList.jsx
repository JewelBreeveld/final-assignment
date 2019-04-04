import React, { PureComponent } from 'react' //React,
import { connect } from 'react-redux'
//import { Redirect } from 'react-router-dom'
import { getTickets } from '../../actions/tickets'
import Paper from '@material-ui/core/Paper'

class TicketContainer extends PureComponent {

    componentDidMount() {
        const eventId = this.props.event.id
        this.props.getTickets(eventId)
    }
    
    render() {
        console.log('ticketscontainer props', this.props)
        return (
            <Paper>
                hello
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    event: state.events,
    tickets: state.tickets
    
})

export default connect(mapStateToProps, { getTickets })(TicketContainer)