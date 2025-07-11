export const ADD_USER = (record) => {
  return async (dispatch) => {
    try {
      let data = await fetch(`http://localhost:9001/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      });
      let res = await data.json();
      return dispatch({
        type: "add",
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
