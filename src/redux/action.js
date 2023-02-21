export const addTodo = (data) => {
  return {
    type: "add",
    payload: {
      data,
      id: new Date().getTime().toString(),
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: "delete",
      id,
  };
};
export const removeTodo = () => {
  return {
    type: "remove",

  };
};

