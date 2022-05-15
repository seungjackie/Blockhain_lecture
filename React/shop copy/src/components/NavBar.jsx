import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성']


    const navigate = useNavigate()

    const goToLogin = () => { 
        navigate("/login")
    };
    
    const goToMain = () => {
        navigate("/")
    }

    const search = (event) => {
        // enter 클릭시 
        if (event.key === 'Enter') {
            //우리가 입력한 검색어를 읽어와서 url를 바꿔 준다.
            let keyword = event.target.value            // 이밴트를 대상으로한다
            
            // url을 바꿔준다. 쿼리 값으로 바꾼다
            navigate(`/?q=${keyword}`)
        }

    };

    return (
        <div>
            <div>
                <div className='login-button' onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
            </div>
            <div className='nav-section' onClick={goToMain} >
                <img width="100px" src='data:image/png;base64,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'></img>
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu , index)=>(
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyPress={(event) =>search(event)} /> 
                </div>
            </div>
            <div >
                
            </div>
        </div>
    )
}

export default Navbar;