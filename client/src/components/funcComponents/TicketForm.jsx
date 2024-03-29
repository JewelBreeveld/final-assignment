import * as React from 'react'
import Card from '@material-ui/core/Card'
import Fab from '@material-ui/core/Fab'
import TextField from '@material-ui/core/TextField'
import '../../styles/Event.css'


export default function TicketForm(props) {
    console.log('ticketform', props)
    
    return(<div className="ticket-form">
        <Card onSubmit={props.onSubmit} className='outer-card'>
            <TextField placeholder='Price' type="text" name="price" onChange={props.onChange}  style={{margin: 10}} />
            <TextField placeholder="Description"  type="text" name="description" onChange={props.onChange}  style={{margin: 10}} />
            <TextField placeholder="Picture url"  type="text" name="pictureUrl" onChange={props.onChange}  style={{margin: 10}} />
            {!props.editMode ? 
                <Fab type="submit"  onClick={props.onSubmit} 
                variant="extended"
                style={{margin: 10}} 
                size='small'
                className='add-ticket'>
                Submit</Fab>
                :
                <Fab type="submit" onClick={props.onSubmitChange} 
                variant="extended"
                style={{margin: 10}} 
                size='small'
                className='edit-ticket'>
                Submit </Fab>
            }

        </Card>
      </div>
  )
}

