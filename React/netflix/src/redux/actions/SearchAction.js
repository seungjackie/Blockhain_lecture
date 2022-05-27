import api from "../api"

const api_key =process.env.REACT_APP_API_KEY
// console.log(api_key)

function getSearchMovies(event) {
    console.log("key event is ~~~~~~~~ " , event)
    return async(dispatch) => {
        try {

            // 검색 key , query값을 받아야 한다..?
            const searchApi = await api.get(`/search/movie?api_key=${api_key}&language=en-US&query=${event}&page=1&include_adult=false`)
            console.log("searchApi Action: ", searchApi )

            let [ movieSearchList ] = await Promise.all([ searchApi])
            // console.log("search")

            dispatch({
                type: 'GET_SEARCHMOVIES_SUCCESS',
                payload: {
                    movieSearchList : movieSearchList.data,
                }
            })

    }catch(e) {
        // 에러 핸들링 하는 곳 
        dispatch({type:"GET_MOVIES_FAILURE"})
    }
}
}

export const movieSearchAction = {
    getSearchMovies,
}