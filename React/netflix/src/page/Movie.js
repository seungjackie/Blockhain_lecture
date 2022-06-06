import React,{ useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { movieAction } from '../redux/actions/MovieAction';
import MovieCard from '../components/MovieCard'
import MovieSlide from '../components/MovieSlide'
import Sort from '../components/Sort';

const Movie = () => {

  const dispatch = useDispatch()
  const {popularMovies } = useSelector(state => state.movie)
  // console.log("popularMovies local 2@@@", popularMovies)

  useEffect(() =>{
    dispatch(movieAction.getMovies());
  },[])

  return (
    <div>
      <Sort />
      <MovieSlide movies={popularMovies}/>
    </div>
  )
}

export default Movie