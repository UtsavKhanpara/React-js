let initialState = {
    ToDoList: []
}
const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                ToDoList: [...state.ToDoList, action.payload]
            }
        case 'viewTodo':
            return {
                ...state,
                ToDoList: action.payload
            }
        case 'deleteTodo':
            return {
                ...state,
                ToDoList: state.ToDoList.filter(item => item.id != action.payload)
            }
        case 'clearAllTodos':
            return {
                ...state,
                ToDoList: []
            }
        default:
            return state;
    }
}
export default ToDoReducer;