import * as React from 'react'
import Card from '@material-ui/core/Card' //{ CardActions, CardContent } 
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import { Link } from 'react-router-dom'

export default function EventDetails(props) {
  //console.log('fc eventdetails props', props)
  return (
    <div className='event-div'>
        <Card key={props.event.id} className='event-card'>
                <img src={props.event.urlPictureLogo} style={{margin: 20}} alt='logo' className='image'/>
                        <Typography style={{margin: 20}}> Name: {props.event.name} </Typography>
                        <Typography style={{margin: 20}}> Description: {props.event.description} </Typography>
                        <Typography style={{margin: 20}}> Startdate: {props.event.startDate} </Typography>
                        <Typography style={{margin: 20}}> Enddate: {props.event.endDate} </Typography>
                        <Fab    variant="extended" 
                                style={{margin: 20}} 
                                size='small'
                                className='view-tickets' 
                                component={Link} 
                                to={`/events/${props.event.id}/tickets`}>
                                View tickets
                        </Fab>
        </Card>
    </div>)
}