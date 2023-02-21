let initialData = {
  list: [],
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "add":
      const { id, data } = action.payload;

      return {
        ...state, // first we need rest the value
        list: [
          ...state.list, // then we need rest the preveious  value inside data
          {
            id,
            data,
          },
        ],
      };

    default:
      return state;

      case "delete":
        let newList=state.list.filter((key)=>key.id !== action.id)
      return {
        ...state, // first we need rest the value
       list:newList
      };


      case  "remove":
        return{
        ...state,
        list:[]
        }
        

  }
};

export default reducer;
