let getCart=()=>{
    return async (dispatch) =>{
        try{
            let data=await fetch(`https://dummyjson.com/carts`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                }
            })
            let res=await data.json();
            return dispatch({
                type:"getcart",
                payload:res.posts
            })
        }
        catch(e){
            console.log(e);
            return false;
        }
    }
}
