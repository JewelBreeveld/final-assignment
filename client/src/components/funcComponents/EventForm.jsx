import * as React from 'react'

export default function EventFrom(props) {
    console.log('eventform', props)
   // console.log('eventform state', state)
return(<div className="create-event-form">
        <form onSubmit={props.handleSubmit}>

          <label>
            Name:
            <input type="text" name="name" onChange={props.handleChange}/>
          </label>

          <label>
            Description:
            <input type="text" name="description" onChange={props.handleChange}/>
          </label>

          <label>
            Picture:
          <input type="text" name="pictureUrl" onChange={props.handleChange}/>
          </label>

          <label>
            Start Date:
            <input type="date" name="startDate" onChange={props.handleChange}/>
          </label>

          <label>
            End Date:
            <input type="date" name="endDate" onChange={props.handleChange}/>
          </label>

          <button type="submit">
            Add Event
          </button>

        </form>
      </div>
  )
}


