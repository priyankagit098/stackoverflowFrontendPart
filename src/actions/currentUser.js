const currentUser = (data) => {
    return {
     
        type: "FETCH_FROM_USER",
        payload: data
      }
    }

export default currentUser