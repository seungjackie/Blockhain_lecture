import React from 'react'

const Banner = ({movie}) => {
  console.log("movie ?????????ㅁㄴㅇㄹㅁㄴㅇㄹ??? " , movie)
  return (
    // 객채 형태로 넣을수 있다
    <div className='banner' style={{
      backgroundImage:
        "url(" + 
        `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +  /* ${}사용하기 위해서 */
        ")",
    }}
    >
      <div className="banner-info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default Banner