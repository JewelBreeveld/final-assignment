import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import CommentForm from '../funcComponents/CommentForm'
import { sendComment } from '../../actions/comments'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import { getEvent } from '../../actions/events'
import { getUsers, getUser } from '../../actions/users'
import { getTicket, sendChangedTicket } from '../../actions/tickets'
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
        this.props.getUsers()
        this.props.getUser(this.props.userId)
        
    }

    onChange = (event) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value
            }
        })
    }

    triggerEditTicketState = () => {
        this.setState({
            ...this.state,
            editMode: true
          })
    }

    onSubmit = (event) => {
    event.preventDefault(event)
    this.setState({
        formValues: this.state.formValues,
    })
    console.log(this.state.formValues, 'this.state.formvalues')
    this.props.sendComment(this.state.formValues)
    this.props.getTicket(this.props.event.id, this.props.ticket.id)
    this.props.history.push(`/events/${this.props.event.id}/tickets/${this.props.ticket.id}`)
    }

    onSubmitChange = (event) => {
    event.preventDefault(event)
    this.setState({
        formValues: this.state.formValues,
        editMode: false
        })
    console.log(this.state.formValues, 'this.state.formValues onSubmitChange')
    this.props.sendChangedTicket(this.state.formValues)
    console.log('test', this.props.event.id, this.props.ticket.id)
    this.props.getTicket(this.props.event.id, this.props.ticket.id)
    //this.props.history.push(`/events/${this.props.event.id}/tickets/${this.props.ticket.id}`)
    }

    render() {
        console.log('commentlistCont. props', this.props)
        console.log('commentlistCont. state: ', this.state)
        const { event, ticket, comments, currentUser, userId } = this.props

        return (<Paper> 
                <Card  className='outer-card'>
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
                    : <Card className='outer-card'>Log in to add a comment</Card>}
                    
                    {this.state.editMode ? <TicketForm onChange={this.onChange} 
                                                        values={this.state.formValues}
                                                        event={event}
                                                        ticket={ticket}
                                                        onSubmit={this.onSubmitChange}
                                                        /> 
                                                        : null}
                    
                        <CommentList event={event} ticket={ticket} comments={comments} userId={userId} editTicket={this.triggerEditTicketState}/>
                    
            </Paper>)
    }
    }
    
    const mapStateToProps = state => ({
      event: state.event,
      ticket: state.ticket,
      comments: state.comments,
      users: state.users,
      currentUser: state.currentUser,
      userId: state.currentUser && userId(state.currentUser.jwt)
    })
    
    export default connect(mapStateToProps, { sendComment, getEvent, getTicket, getComments, sendChangedTicket, getUsers, getUser })(CommentListContainer)
   