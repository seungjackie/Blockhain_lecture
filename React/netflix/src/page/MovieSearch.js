import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'

const MovieSearch = () => {

    const {movieSearchList} = useSelector(state => state.movie)
    // console.log("movieSearchList" , movieSearchList)
    //
  return (
    <div>
        {/* 처음에 빈값이 아님으로 삼항연산자를 안해도 된다. */}
        {
        movieSearchList?.results?.map((item, index)=> {
            return <div key={index}>
              <MovieCard item={item} />
              {item.original_title}
            </div>
        })
        } 
    </div>
    // card 로 하나로 데이터값으로 바꿔줘도 된다.page 한페이제에 5개 
    // compoene
    
  )
}

export default MovieSearch