import * as React from 'react'

export default function EventFrom(props) {
    console.log('eventform', props)
   // console.log('eventform state', state)
return(<div className="create-event-form">
        <form onSubmit={props.onSubmit}>

          <label>
            Name:
            <input type="text" name="name" onChange={props.onChange}/>
          </label>

          <label>
            Description:
            <input type="text" name="description" onChange={props.onChange}/>
          </label>

          <label>
            Picture:
          <input type="text" name="pictureUrl" onChange={props.onChange}/>
          </label>

          <label>
            Startdate:
            <input type="date" name="startDate" onChange={props.onChange}/>
          </label>

          <label>
            Enddate:
            <input type="date" name="endDate" onChange={props.onChange}/>
          </label>

          <button type="submit" onClick={props.onSubmit}>
            Add Event
          </button>

        </form>
      </div>
  )
}


