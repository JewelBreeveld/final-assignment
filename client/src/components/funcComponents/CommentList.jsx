import * as React from 'react'
import Card from '@material-ui/core/Card' //{ CardActions, CardContent } 
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'


export default function CommentList(props) {
    console.log('fc commentlist props', props)
    
    const {  comments, event, ticket } = props

    if (!comments) return 'Loading!!'
    return (<div> 
                <Card className='ticket-details-card'>
                    <Typography>Tickets for {event.name} on {event.startDate}</Typography>  
                </Card>
                <Card className='ticket-details-card'>
                    <Typography>Description: {ticket.description}</Typography>
                    <Typography>Price: € {ticket.price}</Typography>
                    <Typography>Risk: {ticket.calculateRisk} % </Typography>
                    {/* <Typography>Average price: € {Math.floor(ticket.avgPrice.average)} </Typography>  */}
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

                <div> <Card className='outer-card'>Comments</Card>
                    {comments.map(comment => {
                        return <Card key={comment.id} className='comment-list-card'>
                            <Typography style={{margin: 20}}>Posted by: {comment.user.firstName}</Typography>
                            <Typography style={{margin: 20}}>{comment.comment}</Typography>
                        </Card>
                    })}
                </div>
    </div>
    )
}