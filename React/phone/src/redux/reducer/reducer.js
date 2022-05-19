let initialState = {
    contactList : [],
    keyword : "",
    searchList : []
};

// 리듀서가 여러개로 나눠 질수 있다.
function reducer(state=initialState,action) {
    // action 을 쓰지말자.
    const {type , payload} = action;

    switch(action.type) {
        case "ADD_CONTACT":
            // 값은 유지는 하되 뒤에다 객채를 더해줄거다
            return {
                ...state, 
                contactList:[...state.contactList, {
                    name:action.payload.name , 
                    phoneNumber: action.payload.phoneNumber
                }]}
        case "SEARCH_CONTRACT" :
            let list = state.contactList.filter(item => item.name.includes(state.keyword))
            return {
                ...state,
                searchList:[...state.searchList, {
                    list
                }]
                
            }
        default: 
            return {...state}
    }

    // 리턴은 꼭 해줘야 한다.
    return {...state};
}

export default reducer;