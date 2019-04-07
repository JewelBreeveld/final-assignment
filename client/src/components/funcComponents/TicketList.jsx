import * as React from 'react'
import Card from '@material-ui/core/Card' //{ CardActions, CardContent } 
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import { Link } from 'react-router-dom'
import '../../styles/Event.css'
import { Avatar } from '@material-ui/core';
import { getEvent } from '../../actions/events'
//import { userId } from '../../jwt';

export default function TicketList(props) {
    
    const { event } = props 

    console.log('ticketslist props', props)
    if(!event) {
        const event = getEvent(props.event.id)
        return event
    }
    return (<div>
                <Card className='event-details-card'>
                    <img src={event.urlPictureLogo} style={{margin: 20}} alt='logo' className='image'/>
                    <Typography style={{margin: 20}}>{event.name}</Typography>
                    <Typography style={{margin: 20}}> Description: {event.description} </Typography>
                    <Typography style={{margin: 20}}> Startdate: {event.startDate} </Typography>
                    <Typography style={{margin: 20}}> Enddate: {event.endDate} </Typography>
                    
                </Card >
                <div >
                    { event.tickets.map(ticket => {
                        return  <Card key={ticket.id} className='event-list-card'>
                                    <Avatar src={ticket.picture} style={{margin: 15}}></Avatar>
                                    <Typography style={{margin: 10}}>Seller: {ticket.user.firstName} </Typography>
                                    <Typography style={{margin: 10}}>Price: € {ticket.price}</Typography>
                                    <Typography style={{margin: 10}}>Description: {ticket.description}</Typography>
                                    <Fab    variant="extended"
                                            style={{margin: 10}} 
                                            size='small'
                                            className='view-ticket-details' 
                                            component={Link} 
                                            to={`/events/${event.id}/tickets/${ticket.id}`}
                                            >
                                    More details</Fab>
                                </Card>
                    })
             } 
        </div>
    </div>
    )
}

