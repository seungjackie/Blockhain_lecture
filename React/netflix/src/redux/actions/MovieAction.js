import api from "../api"

const api_key =process.env.REACT_APP_API_KEY
// console.log(api_key)

function getMovies() {

    return async(dispatch) => {
        try {
        dispatch({type: "GET_MOVIES_REQUEST"});

            
        
            // 인기 영화
            const popularApi =  api.get(`/movie/popular?api_key=${api_key}&language=en-US&page=1`);
    
            const topRatedApi =  api.get(`movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
    
            const upComingApi =  api.get(`movie/upcoming?api_key=${api_key}&language=en-US&page=1`)
    
            const genreApi = api.get(`/genre/movie/list?api_key=${api_key}&language=en-US`)

            // 매개변수 array로 받는다, 부르고 싶은 api 다 넣기 하나하나 기다릴게 아니라 한번에 실행
            let [
                popularMovies, 
                topRatedMovies, 
                upComingMovies, 
                genreList,
                reviewList
             ] = await Promise.all([popularApi, topRatedApi, upComingApi , genreApi, /* reviewApi */])
            // console.log(popularMovies,topRatedMovies,upCominMovies)
            // console.log(reviewList)
            
            // console.log("genreApi : ", genreApi)

            dispatch({
                type: 'GET_MOVIES_SUCCESS',
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upComingMovies: upComingMovies.data,
                    genreList : genreList.data.genres,
                    // reviewList : reviewList.data,
                }
            })


    }catch(e) {
        // 에러 핸들링 하는 곳 
        dispatch({type:"GET_MOVIES_FAILURE"})
    }
}
}

export const movieAction = {
    getMovies,
}