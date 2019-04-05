import * as React from 'react'
import Card from '@material-ui/core/Card' //{ CardActions, CardContent } 
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import { Link } from 'react-router-dom'
import '../../styles/Event.css'
import { Avatar } from '@material-ui/core';
import { getTicket } from '../../actions/tickets';

export default function TicketList(props) {
    console.log('ticketslist props', props)

    if(!props.event.tickets) return 'Loading ...'
    return (<div>
                <Card className='event-details-div'>
                    <img src={props.event.urlPictureLogo} style={{margin: 20}} alt='logo' className='image'/>
                    <Typography style={{margin: 10}}>{props.event.name}</Typography>
                    <Typography style={{margin: 20}}> Description: {props.event.description} </Typography>
                    <Typography style={{margin: 20}}> Startdate: {props.event.startDate} </Typography>
                    <Typography style={{margin: 20}}> Enddate: {props.event.endDate} </Typography>
                </Card >
                <div >
                    {props.event.tickets.map(ticket => {
                        return  <Card key={ticket.id}>
                                    <Avatar src={ticket.picture} style={{margin: 15}}></Avatar>
                                    <Typography style={{margin: 10}}>Seller: in progress</Typography>
                                    <Typography style={{margin: 10}}>Price: € {ticket.price}</Typography>
                                    <Typography style={{margin: 10}}>Description: {ticket.description}</Typography>
                                    <Typography style={{margin: 10}}>Risk: {ticket.risk}</Typography>
                                    <Fab    variant="extended"
                                            style={{margin: 10}} 
                                            size='small'
                                            className='view-ticket-details' 
                                            onClick={()=> getTicket(props.event.id, ticket.id)}
                                            component={Link} 
                                            to={`/events/${props.event.id}/tickets/${ticket.id}`}
                                            >
                                    More details</Fab>
                                </Card>
                    })} 
        </div>
    </div>
    )
}

