import React from 'react'
import Alert from 'react-bootstrap/Alert'

function ShowFailure() {
  return (
    <Alert variant="danger">
    Sorry, your message has failed to send. Try again!
  </Alert>
  )
}

export default ShowFailure