import React from 'react'

export default function Message(props) {
    let {message} = props
  return (
    <div>
        <p className="message">
          {message}
        </p>

    </div>
  )
}
