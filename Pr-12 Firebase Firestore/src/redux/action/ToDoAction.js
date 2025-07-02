export const addTodo = (todo) => {
    return {
        type: 'addTodo',
        payload: todo
    }
}
export const viewTodo = (todos) => {
    return{
        type: 'viewTodo',
        payload: todos
    }
}
export const deleteTodo = (id) => {
    return {
        type: 'deleteTodo',
        payload: id
    }
}
export const clearAllTodos = () => {
    return{
        type:'clearAllTodos'
    }
}