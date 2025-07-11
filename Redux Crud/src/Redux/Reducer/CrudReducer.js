let initialstate={
    users:JSON.parse(localStorage.getItem("users")) || [],
}
const crudreducer=(state=initialstate,action)=>{
    switch (action.type) {
        case "add":
           const addUsers=[...state.users,action.payload];
           localStorage.setItem("users",JSON.stringify(addUsers));
           alert("Record Added")
           return{
            ...state,
            users:addUsers
           }
        case "delete":
            const deleteUsers=state.users.filter((val)=>{
                return val.id !=action.payload
            })
            localStorage.setItem("users",JSON.stringify(deleteUsers));
            alert("Record Deleted")
            return{
                ...state, 
                users:deleteUsers
                }
        case "edit":
            const editUsers=state.users.map((val)=>{
                return val.id==action.payload.id ? action.payload : val
            })
            localStorage.setItem("users",JSON.stringify(editUsers));
            alert("Record Updated")
            return{
                ...state,
                users:editUsers
                }
        default :
        return state;
    }
}
export default crudreducer