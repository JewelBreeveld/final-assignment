import * as React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import TextField from '@material-ui/core/TextField'


export default function EventFrom(props) {
    console.log('eventform', props)

return(<div className="create-event-form">
        <Card onSubmit={props.onSubmit}>

          <Typography>
            <TextField placeholder='Name' type="text" name="name" onChange={props.onChange} style={{margin: 10}}/>
          </Typography>

          <Typography>
            <TextField placeholder='Description' type="text" name="description" onChange={props.onChange} style={{margin: 10}}/>
          </Typography>

          <Typography>
            <TextField placeholder='Picture' type="text" name="pictureUrl" onChange={props.onChange} style={{margin: 10}}/>
          </Typography>

          <Typography>
            <TextField placeholder='Startdate' type="text" name="startDate" onChange={props.onChange} style={{margin: 10}}/>
          </Typography>

          <Typography>
            <TextField placeholder='Enddate' type="text" name="endDate" onChange={props.onChange} style={{margin: 10}}/>
          </Typography>

          <Fab  type="submit" 
                variant="extended"
                style={{margin: 10}} 
                size='small'
                onClick={props.onSubmit} 
                >
            Add Event
          </Fab>

        </Card>
      </div>
  )
}


