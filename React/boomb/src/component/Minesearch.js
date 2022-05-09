const initialState = {
    tableData: [],
    timer: 0,
    result: '',
}

// 초기값 세팅
export const TableContext = createContext({
    tableData: [],
    dispatch: () => {},
});


const reducer = (state, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                tableData: plantMine(action.row, action.cell, action.mine)
            };

        default: 
            return state;
    }
}

const MineSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //useMemo로 캐싱을 해줘야 contextAPI 사용시 계속되는 렌더링을 막을 수 있다.
    const value = useMemo(() => ({ tableData: state.tableData, dispatch }), [state.tableData]);

    return (
        //value = {{ tableData: state.tableData, dispatch }} 원래는 이렇게 들어가지만 useMemo로 캐싱해줌
        <TableContext.Provider value = {value}>  
            <Form />
            <div>{state.timer}</div>
            <Table />
            <div>{state.result}</div>
        </TableContext.Provider>
    )
}

export  {MineSearch} ;