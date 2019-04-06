import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import CommentForm from '../funcComponents/CommentForm'
import { sendComment } from '../../actions/comments'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import { getEvent } from '../../actions/events'
import { getTicket } from '../../actions/tickets'
import { getComments } from '../../actions/comments'
import CommentList from '../funcComponents/CommentList'
//import { Typography } from '@material-ui/core'
import { userId } from '../../jwt'
import TicketForm from '../funcComponents/TicketForm';


class CommentListContainer extends PureComponent {

    state = {
        formValues: {
            comment: ''},
        editMode: false
    }

    componentDidMount () {
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
    this.props.history.push(`/events/${this.props.event.id}/tickets/${this.props.ticket.id}`)
    }

    onSubmitChange = (event) => {
        event.preventDefault(event)
        this.setState({
            formValues: this.state.formValues,
        })
        this.props.editTicket(this.state.formValues)
        this.props.history.push(`/events/${this.props.event.id}/tickets/${this.props.ticket.id}`)
    }

    triggerEditTicketState = () => {
        this.setState({
            ...this.state,
            editMode: true
          })
    }

    render() {
        console.log('ticket detailsCont. props', this.props)
        console.log('ticket detailsCont. state: ', this.state)
        const { event, ticket, comments, currentUser, userId } = this.props

        return (<Paper> 
                <Card>
                CommentListContainer
                </Card>
                    {currentUser
                    ?   <Paper>
                        <CommentForm onChange={this.onChange}
                                        values={this.state.formValues}
                                        event={event}
                                        ticket={ticket}
                                        onSubmit={this.onSubmit}/>
                        </Paper>  
                    : 'Log in to add a comment'}
                    {this.state.editMode ? <TicketForm editMode={this.state.editMode} /> : null}
                    <Paper>
                        <CommentList event={event} ticket={ticket} comments={comments} userId={userId} editTicket={this.triggerEditTicketState}/>
                    </Paper>
            </Paper>)
    }
    }
    
    const mapStateToProps = state => ({
      event: state.event,
      ticket: state.ticket,
      comments: state.comments,
      currentUser: state.currentUser,
      userId: state.currentUser && userId(state.currentUser.jwt)
    })
    
    export default connect(mapStateToProps, { sendComment, getEvent, getTicket, getComments })(CommentListContainer)
   