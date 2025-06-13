
export const ADD_USER=(data)=>{
    return{
        type:'add',
        payload:data
    }
}

export const DELETE_USER=(id)=>{
    return{
        type:'delete',
        payload:id
    }
}

export const EDIT_USER=(data)=>{
    return{
        type:'edit',
        payload:data
    }
}