import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import CommentForm from '../funcComponents/CommentForm'
import { sendComment } from '../../actions/comments'
import Paper from '@material-ui/core/Paper'
//import { Typography } from '@material-ui/core';
//import Card from '@material-ui/core/Card'
import { getEvent } from '../../actions/events'
import { getTicket } from '../../actions/tickets'

class TicketDetailsContainer extends PureComponent {

    state = {
        formValues: {
            comment: ''
        }
    }

    componentDidMount() {
        const eventId = this.props.match.params.id
        this.props.getEvent(Number(eventId))
        this.props.getTicket()
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
    //     this.props.history.goBack()
    }

      render() {
        console.log('TicketDetailsContainer', this.props)
        const { event } = this.props
        return (<Paper>
                    <CommentForm onChange={this.onChange}
                                values={this.state.formValues}
                                event={event}
                                onSubmit={this.onSubmit}/>
        </Paper>
          )
      }
    }
    
    const mapStateToProps = state => ({
      event: state.events,
      tickets: state.tickets,
      
    })
    
    export default connect(mapStateToProps, { sendComment, getEvent, getTicket })(TicketDetailsContainer)
   