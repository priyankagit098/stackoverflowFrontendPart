import React from 'react'

const currentReducer = (state=null, action) => {
  switch (action.type) {
    case "FETCH_FROM_USER":
      return action.payload;
     default:
     return state;
  }
}

export default currentReducer