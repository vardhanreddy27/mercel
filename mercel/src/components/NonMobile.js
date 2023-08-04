import React from 'react'

function NonMobile() {
  return (
    <div className="non-mobile-container">
    <div className="alert alert-warning text-center" role="alert">
      This app is only accessible on mobile devices. Please open it on a mobile device to continue.
    </div>
  </div>  )
}

export default NonMobile;