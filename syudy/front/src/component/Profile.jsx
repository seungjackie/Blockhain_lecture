import React from 'react'

const Profile = ({onClick}) => {

    
    const handleClick = e => {
        e.preventDefault();
        onClick();
    }

  return (
    <div> 
        <h2>환영합니다</h2>
        xxx님 환영합니다.   <a href='#' onClick={handleClick}>로그 아웃</a>
    </div>
  )
}

export default Profile