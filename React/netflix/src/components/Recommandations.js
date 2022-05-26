import React from 'react'

const Recommandations = (relatedmovie) => {
    // console.log("het ", relatedmovie)
    // console.log("heasdft ", relatedmovie.relatedmovie)
    // console.log("heasdft ", relatedmovie.relatedmovie.data)
    // console.log("hi ", relatedmovie.relatedmovie.data && relatedmovie.relatedmovie.data.results)
  return (
    <div>
        <div>
            {
                relatedmovie.relatedmovie  === '' ? 
                null
                :relatedmovie.relatedmovie.data.results.map((item,index) => {
                    return <div key={index}>
                                <div className='card'
                                style={{
                                    backgroundImage:
                                        "url(" + 
                                        `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` + 
                                        ")"
                                }} />
                    
                        <p>{item.original_title}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Recommandations