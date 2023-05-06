import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as st from './NavbarST'

function NavBar() {

    const navigate = useNavigate();

    return (
            <st.NavBox>
                <st.NavLink>
                    <st.NavContent onClick={()=>navigate("/")}>Home</st.NavContent>
                    <st.NavContent>봄</st.NavContent>
                    <st.NavContent>여름</st.NavContent>
                    <st.NavContent>가을</st.NavContent>
                    <st.NavContent>겨울</st.NavContent>
                </st.NavLink>

                <st.NavLink>
                    <st.Welcome>xxx님! 환영합니다</st.Welcome>
                    <st.NavContent onClick={()=>navigate("/board")}>작성하기</st.NavContent>
                    <st.NavContent>로그인</st.NavContent>
                </st.NavLink>
            </st.NavBox>
    )
}

export default NavBar