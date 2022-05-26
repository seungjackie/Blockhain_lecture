import api from '../api';

const api_key = process.env.REACT_APP_API_KEY;


function getIdMovies(id) {

    // 
    return async (dispatch) => {
        try{

            // 사진

            // 리뷰
            const movieReviewApi = await api.get(`/movie/${id}/reviews?api_key=${api_key}&language=en-US&page=1`)

            // detail
            const movieDetailApi = await api.get(`/movie/${id}?api_key=${api_key}&language=en-US`)

            // Related
            const movieRelatedApi = await api.get(`/movie/${id}/recommendations?api_key=${api_key}&language=en-US&page=1`) 

            // trailer
            const movieTrailerApi = await api.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`)

            // console.log("movieTrailerApi" , movieTrailerApi)
            // console.log('id',id)
            // console.log("movieReviewApi" , movieReviewApi)
            // console.log(id)

            let [ reviewList , movieDetailList , movieRelatedList , movieTrailerList] = await Promise.all([movieReviewApi ,  movieDetailApi ,movieRelatedApi , movieTrailerApi])

            dispatch({
                type: "GET_MOVIE_DETAIL_REQUEST",
                payload: {
                    reviewList,
                    movieDetailList,
                    movieRelatedList,
                    movieTrailerList,

                }
            })

        }catch(err){
            dispatch({type:"GET_MOVIES_FAILURE"})
        }
        
        
    }
}
    
export const MovieIdAction = {
    getIdMovies,
}