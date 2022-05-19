let initialState ={
    id:'',
    password:'',
    authenticate:false

}

function authenticateAction(state=initialState, action ){
    let {type,payload} = action
    switch (type) {
        case "LOGIN_SUCCESS":
            console.log("login success")
            return {...StaticRange, id:payload.id, password:payload.password, authenticate:true}
        default:
            return {...state}
    }
}

export default authenticateAction;