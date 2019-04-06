import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import CommentForm from '../funcComponents/CommentForm'
import { sendComment } from '../../actions/comments'
import Paper from '@material-ui/core/Paper'
//import Card from '@material-ui/core/Card'
import { getEvent } from '../../actions/events'
import { getTicket } from '../../actions/tickets'
import { getComments} from '../../actions/comments'
import CommentList from '../funcComponents/CommentList'
//import { Typography } from '@material-ui/core'

class TicketDetailsContainer extends PureComponent {

    state = {
        formValues: {
            comment: ''},
    }

    componentDidMount () {

        //const { eventId, ticketId } = this.props.match.params
        const eventId = this.props.match.params.id
        const ticketId = this.props.match.params.ticketId

        this.props.getEvent(Number(eventId))
        this.props.getTicket(Number(eventId), Number(ticketId))
        this.props.getComments(Number(eventId), Number(ticketId))
        
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
        formValues: this.state.formValues,
    })
    
    this.props.sendComment(this.state.formValues)
    }

    render() {
        console.log('ticket detailsCont. props', this.props)
        console.log('ticket detailsCont. state', this.state)
        const { event, ticket, comments } = this.props
        return (<Paper> TicketDetailsContainer
                    <Paper>
                        <CommentForm onChange={this.onChange}
                                        values={this.state.formValues}
                                        event={event}
                                        ticket={ticket}
                                        onSubmit={this.onSubmit}/>
                    </Paper>  
                    <Paper>
                        <CommentList event={event} ticket={ticket} comments={comments} />
                    </Paper>
            </Paper>)
    }
    }
    
    const mapStateToProps = state => ({
      event: state.events,
      ticket: state.tickets,
      comments: state.comments
    })
    
    export default connect(mapStateToProps, { sendComment, getEvent, getTicket, getComments })(TicketDetailsContainer)
   