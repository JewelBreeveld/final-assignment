import * as React from 'react'
import Card from '@material-ui/core/Card' //{ CardActions, CardContent } 
import Typography from '@material-ui/core/Typography'
// import Fab from '@material-ui/core/Fab'

export default function CommentList(props) {
    console.log('fc commentlist props', props)

    const {  comments } = props  // event, ticket,

    if(!comments) return 'There are no comments for this ticket. Be the first!!'

    return (<div> 
                <div>
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