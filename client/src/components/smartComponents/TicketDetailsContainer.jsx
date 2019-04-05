import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import CommentForm from '../funcComponents/CommentForm'
import { sendComment } from '../../actions/comments'
import Paper from '@material-ui/core/Paper'
//import Card from '@material-ui/core/Card'
import { getEvent } from '../../actions/events'
import { getTicket } from '../../actions/tickets'
import CommentList from '../funcComponents/CommentList'
//import { Typography } from '@material-ui/core'

class TicketDetailsContainer extends PureComponent {

    state = {
        formValues: {
            comment: ''},
        eventId: this.props.match.params.id,
        ticketId: this.props.match.params.ticketId, 
       
    }

    componentDidMount () {
        const { eventId, ticketId } = this.state
        this.props.getTicket(eventId, ticketId)
        this.props.getEvent(eventId)
    }

    onChange = (event) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
    }

    onSubmit = (event) => {
    event.preventDefault(event)
    this.setState({
        formValues: this.state.formValues
    })
    this.props.sendComment(this.state.formValues)
    }

    render() {
        console.log('TicketDetailsContainer', this.props.ticket)
        const { event, ticket } = this.props
        return (<Paper>
                    <CommentForm onChange={this.onChange}
                                values={this.state.formValues}
                                event={event}
                                onSubmit={this.onSubmit}/>
                <Paper>
                    <CommentList ticket={ticket}/>
                </Paper>
            </Paper>)
    }
    }
    
    const mapStateToProps = state => ({
      event: state.events,
      ticket: state.tickets,
      //ticket: state.ticketId,
      eventId: state.eventId
    })
    
    export default connect(mapStateToProps, { sendComment, getEvent, getTicket })(TicketDetailsContainer)
   

// {props.events.event.map(event => {
//     return <Card key={event.id} className='event-card'>
//             <img src={event.urlPictureLogo} alt='logo' className='image'/>
//                     <Typography style={{margin: 10}}> Name: {event.name} </Typography>
//                     <Typography style={{margin: 10}}> Description: {event.description} </Typography>
//                     <Typography style={{margin: 10}}> Startdate: {event.startDate} </Typography>
//                     <Typography style={{margin: 10}}> Enddate: {event.endDate} </Typography>
//                     <Fab    variant="extended"
//                             style={{margin: 10}} 
//                             size='small'
//                             className='view-tickets' 
//                             component={Link} 
//                             to={`/events/${event.id}/tickets`}>
//                             Find tickets
//                     </Fab>
//                     </Card>