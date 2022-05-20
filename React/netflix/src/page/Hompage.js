import React , {useEffect} from 'react'
import { movieAction } from '../redux/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Hompage = () => {

    const dispatch = useDispatch()
    const {popularMovies , topRatedMovies , upComingMovies, loading} = useSelector(state => state.movie)

    // const moiveList = useSelector((state) => state.)


    // 렌더를 하고 호출 됨으로 초기값이 없음으로 에러
    useEffect(() =>{
        dispatch(movieAction.getMovies());
    },[])
    // loading 이 트루면 loading 스피너를 보여주고
    // 로딩이 false 면 데이터를 보여주고
    // 전체 조건 걸기

    // 데이터 도착 전 true
    // 데이터 도착 후 false, 에러가 났을때
    if(loading) {
      return <ClipLoader color="#ffff" loading={loading}  size={150} />
    }

  return (
    <div>
      <Banner movie={popularMovies.results[0]}/>

      <h1>popular movie</h1>
      <MovieSlide movies={popularMovies}/>

      <h1>top rated movie</h1>
      <MovieSlide movies={topRatedMovies}/>

      <h1>upcoming movie</h1>
      <MovieSlide movies={upComingMovies}/>
    </div>
  )
}

export default Hompage