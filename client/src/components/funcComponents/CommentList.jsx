import * as React from 'react'
import Card from '@material-ui/core/Card' //{ CardActions, CardContent } 
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'

export default function CommentList(props) {
    console.log('fc commentlist props', props.ticket)

    return(<div className='comments-div'>
            <Card></Card>
        </div>)
}

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