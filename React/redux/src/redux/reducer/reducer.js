let initialState = {
    count : 0,
    id: 0,
    password : 0
}

function reducer(state=initialState,action) {
    // action.타입을 검사
    // store 은 적용만 시켜준다 
    console.log("액션은 뭘까 ?" , action)
    // if, switch 
    // if(action.type === "INCREMENT"){
    //     // reducer는 항상 return 값으로 돌려줘야 한다
    //     // ... 여러가지 스테이트값을 유지 하되 counter만 바꾼다.
    //     // 주소값이 바꾼게 왔네 ? 새로운값 받아 볼래?
    //     return {...state, count: state.count +1}
    // }
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + action.payload.num + 5}
        case "DECREMENT":
            return {...state, count: state.count -1};
        case "LOGIN" :
            return {
                ...state,
                id: action.payload.id,
                password: action.payload.password,
                a,
            };
        default:
            return {...state}
    }

    // 리턴은 꼭 해줘야 한다.
    return {...state};
}

export default reducer;