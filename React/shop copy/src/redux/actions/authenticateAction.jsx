function login (id, password) {
    return (dispatch,getState) => {
        //  보내기
        dispatch({type: "LOGIN_SUCCESS", payload: {id, password}});
    }
}

export const authenticateAction = {login}