import * as React from 'react'
import Card from '@material-ui/core/Card' //{ CardActions, CardContent } 
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import { Link } from 'react-router-dom'
import '../../styles/Event.css'

export default function EventList(props) {
  console.log('fc eventlist props', props)
  return(
    <div className='events-div'>
      {props.events.event.map(event => {
        return <Card key={event.id} className='event-card'>
                <img src={event.urlPictureLogo} alt='logo' className='image'/>
                        <Typography> Name: {event.name} </Typography>
                        <Typography> Description: {event.description} </Typography>
                        <Typography> Startdate: {event.startDate} </Typography>
                        <Typography> Enddate: {event.endDate} </Typography>
                        <Fab    variant="extended" 
                                size='small'
                                className='view-tickets' 
                                component={Link} 
                                to={`/events/${event.id}/tickets`}>
                                Find tickets
                        </Fab>
                        </Card>
    })}
    </div>
  )
}
