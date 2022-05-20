import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'

// 1. genrelist 어떻게 쓸지?

const MovieCard = ({item,}) => {
    const {genreList} = useSelector(state => state.movie)
    console.log('genrelist', genreList)

    return (
        <div className='card'
            style={{
                backgroundImage:
                    "url(" + 
                    `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` + 
                    ")"
            }}>
            <div className="overlay">
                <h1>{item.title}</h1>
                {/* todo */}
                {item.genre_ids.map((id) => (
                    // 어레이 함수 찾는걸 도와준다, filter를 배열을 배출
                    <Badge bg="danger">{genreList.find(item => item.id == id).name}</Badge>
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