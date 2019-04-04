import * as React from 'react'

export default function TicketForm(props) {
    console.log('ticketform', props)

    return(<div className="sell-ticket-form">
        <form onSubmit={props.onSubmit}>

          <label>
            Price:
            <input type="text" name="price" onChange={props.onChange}/>
          </label>

          <label>
            Description:
            <input type="text" name="description" onChange={props.onChange}/>
          </label>

          <label>
            Picture:
          <input type="text" name="pictureUrl" onChange={props.onChange}/>
          </label>

          <button type="submit" onClick={props.onSubmit}>
            Add Ticket
          </button>

        </form>
      </div>
  )
}