import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height : '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong><i className={props.alert.heading}></i>&nbsp;&nbsp;</strong>{props.alert.message}
        </div>}
    </div>
  )
}
