export const add_user = (data) => {
  return {
    type: "add",
    payload: data,
  };
};

export const delete_user = (id) => {
  return {
    type: "delete",
    payload: id,
  };
};

export const Edit_user = (data) => {
  return {
    type: "edit",
    payload: data,
  };
};
