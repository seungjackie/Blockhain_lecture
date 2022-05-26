import React from 'react'

const MovieReview = ({review}) => {
    // console.log("리뷰 작성자들 " , review.data && review.data.results)
  return (
    <div>
        <h1>reveiw ~~~</h1>
        {
            review.data && review.data.results.map((item,index) => <div key={index}><h1>{item.author}</h1> <br/> {item.content}</div>)
        }

    </div>
  )
}

export default MovieReview