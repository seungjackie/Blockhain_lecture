import React, {useEffect , useState} from 'react'
import { movieAction} from '../redux/actions/MovieAction';
import {useDispatch , useSelector} from 'react-redux';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';
import { MovieIdAction} from '../redux/actions/MovieIdAction';
import MovieReview from '../components/MovieReview';
import MovieDetailCard from '../components/MovieDetailCard';
import Recommandations from '../components/Recommandations';
import MovieTrailer from '../components/MovieTrailer';

const MovieDetail = () => {
  

  // const [authenticate, setAuthenticate] = useState(false) //true면 로그인, false면 로그인 안됨

  // useEffect(()=>{console.log("authenticate : ", authenticate)},[authenticate])

  const [click ,setClick] = useState(false)

  const changButton = (type) => {
    setClick(type)
  }

  let {id} = useParams();
  // console.log(id)
  const dispatch = useDispatch()

  const { reviewList , movieDetailList, movieRelatedList , movieTrailerList } = useSelector(state => state.movie)
  // console.log("review asdfasdf" ,reviewList)
  // console.log("movieRedList :" , movieRelatedList )
  // console.log( movieRelatedList )
  console.log('movieTrailerList' , movieTrailerList)


  const getMovieDetail = (id) => {
    // idaction
    dispatch(MovieIdAction.getIdMovies(id))
  }


  // 1. 보낸다 -> action
  useEffect(() => {
    getMovieDetail(id)
  },[])

  return (
    <div>
        <div>
          <h1>Movie detailCard</h1>
          <MovieDetailCard movie= {movieDetailList} />

          <div>
            <MovieTrailer  trailer={movieTrailerList}/>
          </div>


          {/* 어떤 값은 fale을 주고 어떤 값은 true를 줘서 버튼이 하나씩 동작 하게 하기 */}
          <h1>Movie Review</h1>
          <button onClick={() => changButton(false)}> click to Movie Review </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => changButton(true)}> RELATED MOVES </button>

          <div>
          {
            click ?<Recommandations relatedmovie={movieRelatedList}/> 
            :<MovieReview review ={reviewList}/>
          }
          </div>

        </div>
    </div>
  )
}

export default MovieDetail

