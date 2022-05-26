import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// 1. genrelist 어떻게 쓸지?

const MovieCard = ({item}) => {


    const navigate = useNavigate()
    const {genreList} = useSelector(state => state.movie)
    // console.log('genrelist', genreList)
    // console.log('genrelistasdf')
    // console.log(item)

    const clickToDetail = () => {
        // 변수, item의 아이디 값
        navigate(`movie/${item.id}`)
    }
    return (
        <div className='card'
            style={{
                backgroundImage:
                    "url(" + 
                    `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` + 
                    ")"
            }}>
            <div className="overlay" onClick={clickToDetail}>
                <h1>{item.title}</h1>
                {/* todo */}
                {item.genre_ids.map((id, index) => (
                    // 어레이 함수 찾는걸 도와준다, filter를 배열을 배출
                    <Badge bg="danger" key={index}>{genreList.find(item => item.id == id ).name}</Badge>
                ))}
                <div>
                    <span>{item.vote_average}</span>
                    <span>{item.adult ? "청불" : "Under 18"}</span>
                </div>
            </div>
        
        </div>
    )
}  

export default MovieCard