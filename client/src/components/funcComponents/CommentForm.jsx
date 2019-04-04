import * as React from 'react'

export default function CommentForm(props) {
    console.log('commentform', props)

    return(<div className="add-comment-form">
        <form onSubmit={props.onSubmit}>

          <label>
            Comment: 
            <input type="text" name="comment" onChange={props.onChange}/>
          </label>

          <button type="submit" onClick={props.onSubmit}>
            Submit comment
          </button>

        </form>
      </div>
  )
}