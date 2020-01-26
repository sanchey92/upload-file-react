import React from "react";
import PropTypes from 'prop-types';

const List = ({data}) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <li key={index}><a href={item}>{item}</a></li>
        )
      } )}
    </div>
  )
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
};

export default List;