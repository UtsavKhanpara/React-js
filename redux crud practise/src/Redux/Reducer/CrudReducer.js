let initialstate = {
  users: JSON.parse(localStorage.getItem("users")) || [],
};

const crudreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "add":
      const addUser = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(addUser));
      return {
        ...state,
        users: addUser,
      };

    case "delete":
      const filterUser = state.users.filter((val) => val.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(filterUser));
      return {
        ...state,
        users: filterUser,
      };

    case "edit":
      const updateUser = state.users.map((val) =>
        val.id === action.payload.id ? action.payload : val
      );
      localStorage.setItem("users", JSON.stringify(updateUser));
      return {
        ...state,
        users: updateUser,
      };

    default:
      return state;
  }
};

export default crudreducer;
