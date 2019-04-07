import * as React from 'react'
import Card from '@material-ui/core/Card' //{ CardActions, CardContent } 
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'

export default function CommentList(props) {
    console.log('fc commentlist props', props)
    
    const {  comments, event, ticket } = props

    if (!comments) return 'Loading!!'
    return (<div> 
                <Card className='event-details-card'>
                    <Typography>Tickets for {event.name} on {event.startDate}</Typography>  
                </Card>
                <Card className='ticket-details-card'>
                    <Typography>{ticket.description}</Typography>
                    <Typography>€ {ticket.price}</Typography>
                    <Typography>Average price </Typography> 
                    {event.user.id === props.userId 
                                        ? 
                                        <Fab    variant="extended"
                                                style={{margin: 10}} 
                                                size='small'
                                                className='view-tickets'
                                                onClick={props.editTicket}
                                        > Edit ticket
                                        </Fab>
                                        : null }    
                </Card>

                <div> <Typography>Comments</Typography>
                    {comments.map(comment => {
                        return <Card key={comment.id}>
                            <Typography style={{margin: 20}}>Posted by: {comment.user.firstName}</Typography>
                            <Typography style={{margin: 20}}>{comment.comment}</Typography>
                        </Card>
                    })}
                </div>
    </div>
    )
}