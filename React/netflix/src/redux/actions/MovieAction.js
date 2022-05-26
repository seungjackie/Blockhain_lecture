import api from "../api"

const api_key =process.env.REACT_APP_API_KEY
// console.log(api_key)

function getMovies() {

    return async(dispatch) => {
        try {
        
        // 시작전에 로딩이 도착 해야함으로 쓰는 거다.
        dispatch({type: "GET_MOVIES_REQUEST"});
        
            // 인기 영화
            const popularApi =  api.get(`/movie/popular?api_key=${api_key}&language=en-US&page=1`);
    
            // 인기순 영화
            const topRatedApi =  api.get(`/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
    
            // 나올 영화
            const upComingApi =  api.get(`/movie/upcoming?api_key=${api_key}&language=en-US&page=1`)
    
            // 장르 
            const genreApi = api.get(`/genre/movie/list?api_key=${api_key}&language=en-US`)


            // movie id를 어떻게 가져 올지?
            // const reviewApi = api.get(`/movie/{movie_id}/reviews?api_key=${api_key}&language=en-US&page=1`)
            // const reviewApi = api.get(`/movie/799876/reviews?api_key=${api_key}&language=en-US&page=1`)
            // console.log( "reviewApi :" , reviewApi)
            // console.log( "genreApi", genreApi)
            // 매개변수 array로 받는다, 부르고 싶은 api 다 넣기 하나하나 기다릴게 아니라 한번에 실행
            let [
                popularMovies, 
                topRatedMovies, 
                upComingMovies, 
                genreList,
                // searchList,
            ] = await Promise.all([popularApi, topRatedApi, upComingApi , genreApi , /* searchApi */])
            // console.log("search")



            // console.log(upComingMovies)
            // console.log(popularMovies,topRatedMovies,upComingMovies)
            // console.log(reviewList)
            
            // console.log("genreApi : ", genreApi)

            dispatch({
                type: 'GET_MOVIES_SUCCESS',
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upComingMovies: upComingMovies.data,
                    genreList : genreList.data.genres,
                    // searchList : searchList.data,
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