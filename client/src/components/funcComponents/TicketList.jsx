import * as React from 'react'
import Card from '@material-ui/core/Card' //{ CardActions, CardContent } 
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import { Link } from 'react-router-dom'
import '../../styles/Event.css'
import { type } from 'os';

export default function TicketList(props) {
    console.log('ticketscontainer props', props.ticket.tickets)

    if(!props.ticket.tickets) return 'Loading ...'
    return (
        <div className='tickets-div'>
        {props.ticket.tickets.map(ticket => {
            return <Card key={ticket.id} className='ticket-card'>
            <Typography style={{margin: 10}}>{ticket.picture}</Typography>
            <Typography style={{margin: 10}}>{ticket.price}</Typography>
            <Typography style={{margin: 10}}>{ticket.description}</Typography>
            <Typography style={{margin: 10}}>{ticket.risk}</Typography>
            </Card>
        })}
        </div>
    )
}