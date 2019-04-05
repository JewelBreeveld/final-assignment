import * as React from 'react'
import Card from '@material-ui/core/Card'
import Fab from '@material-ui/core/Fab'
import TextField from '@material-ui/core/TextField'

export default function TicketForm(props) {
    console.log('ticketform', props)

    return(<div className="sell-ticket-form">
        <Card onSubmit={props.onSubmit}>
            <TextField placeholder="Price"        type="text" name="price" onChange={props.onChange}  style={{margin: 10}} />
            <TextField placeholder="Description"  type="text" name="description" onChange={props.onChange}  style={{margin: 10}} />
            <TextField placeholder="Picture url"  type="text" name="pictureUrl" onChange={props.onChange}  style={{margin: 10}} />
          <Fab type="submit" onClick={props.onSubmit} 
                              variant="extended"
                              style={{margin: 10}} 
                              size='small'
                              className='add-tickets'>
            Add Ticket</Fab>
        </Card>
      </div>
  )
}

// type="text" name="price" onChange={props.onChange}