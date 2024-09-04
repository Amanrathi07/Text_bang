import React from 'react'

export default function Alert(props) {
  return (
   (props.alert) && (<div className="alert alert-success" style={{height:"45px"}} role="alert">
       <strong><center>{props.alert}</center></strong>
    </div>)
  )
}
