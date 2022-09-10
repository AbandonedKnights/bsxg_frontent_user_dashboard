import React from 'react'

const Loader = () => {
  return (
 <>
  <div
      className="d-flex justify-content-center align-items-center"
      style={{ flex: 1, height: "328px" }}
    >
      <div className="spinner-border text-danger"></div>
    </div>
 </>
  )
}

export default Loader