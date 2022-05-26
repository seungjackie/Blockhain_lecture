let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upComingMovies: {},
    genreList: {},
    loading: true,
    reviewList: {},
    movieDetailList: '',
    movieRelatedList: '',
    movieTrailerList: {},
    movieSearchList: {},
}


function MovieReducer (state=initialState, action) {
    let {type,payload} = action
    // console.log(action)
    switch (type) {
        case "GET_MOVIES_REQUEST":
            return {...state,loading : true}

        case "GET_MOVIES_SUCCESS":
            // todo
            return {...state, 
                popularMovies : payload.popularMovies, 
                topRatedMovies : payload.topRatedMovies, 
                upComingMovies : payload.upComingMovies,
                genreList : payload.genreList,
                loading : false,
                searchList : payload.searchList,
            }


        
        case "GET_MOVIE_DETAIL_REQUEST":
            return {...state, 
                reviewList : payload.reviewList,
                movieDetailList : payload.movieDetailList,
                movieRelatedList : payload.movieRelatedList,
                movieTrailerList : payload.movieTrailerList,
            }

        case "GET_MOVIES_FAILURE":
            return {...state, loading : false}

        case "GET_SEARCHMOVIES_SUCCESS":
            return {...state, 
                movieSearchList : payload.movieSearchList
            }
            
        default:
            return {...state}
    }
}

export default MovieReducer;