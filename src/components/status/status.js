import React from "react";
import PropTypes from 'prop-types'

const Status = ({message}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  )
};

Status.propTypes = {
  message: PropTypes.string.isRequired
};

export default Status