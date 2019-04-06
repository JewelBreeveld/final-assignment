import * as React from 'react'
import Card from '@material-ui/core/Card' //{ CardActions, CardContent } 
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import { Link } from 'react-router-dom'
import '../../styles/Event.css'
import { Avatar } from '@material-ui/core';
//import { userId } from '../../jwt';

export default function TicketList(props) {
    
    const { event } = props 

    console.log('ticketslist props', props)
    //console.log('ticketslist props userId', userId)

    if(!event.tickets) return 'Loading ...'
    return (<div>
                <Card className='event-details-div'>
                    <img src={event.urlPictureLogo} style={{margin: 20}} alt='logo' className='image'/>
                    <Typography style={{margin: 10}}>{event.name}</Typography>
                    <Typography style={{margin: 20}}> Description: {event.description} </Typography>
                    <Typography style={{margin: 20}}> Startdate: {event.startDate} </Typography>
                    <Typography style={{margin: 20}}> Enddate: {event.endDate} </Typography>
                </Card >
                <div >
                    {event.tickets.map(ticket => {
                        return  <Card key={ticket.id}>
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
                                    {/* {event.user.id === props.userId 
                                        ? 
                                        <Fab    variant="extended"
                                                style={{margin: 10}} 
                                                size='small'
                                                className='view-tickets' 
                                                //onClick={() => this.setState({eventToEdit: Card.key})}
                                                component={Link} 
                                                to={`/events/${event.id}/tickets/${ticket.id}/edit`}>
                                                Edit ticket
                                        </Fab>
                                        : null } */}
                                </Card>
                    })} 
        </div>
    </div>
    )
}

