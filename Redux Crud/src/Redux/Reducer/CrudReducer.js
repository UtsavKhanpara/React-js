let initialstate = {
  users: JSON.parse(localStorage.getItem("users")) || [],
};

const crudReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "add":
      const addedUsers = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(addedUsers));
      alert("Record Added");
      return {
        ...state,
        users: addedUsers,
      };

    case "delete":
      const filterUser = state.users.filter((val) => val.id != action.payload);
      localStorage.setItem("users", JSON.stringify(filterUser));
      alert("Record Deleted");
      return {
        ...state,
        users: filterUser,
      };

    case "edit":
      const updatedUsers = state.users.map((val) =>
        val.id === action.payload.id ? action.payload : val
      );
      localStorage.setItem("users ", JSON.stringify(updatedUsers));
      alert("Record Updated");
      return {
        ...state,
        users: updatedUsers,
      };
    default:
      return state;
  }
};

export default crudReducer;
