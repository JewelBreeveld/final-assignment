import * as React from 'react'
import Card from '@material-ui/core/Card'
import Fab from '@material-ui/core/Fab'
import TextField from '@material-ui/core/TextField'

export default function CommentForm(props) {
    console.log('commentform', props)

    return(<div className="add-comment-form">
        <Card onSubmit={props.onSubmit}> 
            <TextField type="text" placeholder="comment" name="comment"  style={{margin: 10}} onChange={props.onChange}/>
            
            <Fab type="submit" onClick={props.onSubmit} 
                              variant="extended"
                              style={{margin: 10}} 
                              size='small'
                              className='submit-comment'>
                              Submit
            </Fab>
        </Card>
   
      </div>
  )
}