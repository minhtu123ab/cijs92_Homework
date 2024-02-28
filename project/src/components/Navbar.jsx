import { Button } from 'antd';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    let login = sessionStorage.getItem('login') ? JSON.parse(sessionStorage.getItem('login')) : null;
    const onClickDelete = () => {
        sessionStorage.removeItem('login');
    };

    return (
        <div className='navbar-all-login'>
            <div className='navbar-login'>
                <div className='navbar-opp'>
                    <Link className='title-web-link' to={"/"}>
                        <p className='title-web'>Movies Chill</p>
                    </Link>
                    <ul className='opp-nav-all'>
                        <NavLink to={"/search"} className={"opp-nav"}>Tìm Kiếm</NavLink>
                        <NavLink to={"/hotmovies"} className={"opp-nav"}>Phim Hot</NavLink>
                        <NavLink to={"/singlemovie"} className={"opp-nav"}>Phim Lẻ</NavLink>
                        <NavLink to={"/seriesmovie"} className={"opp-nav"}>Phim Bộ</NavLink>
                        <NavLink to={"/newmovie"} className={"opp-nav"}>Phim Mới</NavLink>
                        <NavLink to={"/faq"} className={"opp-nav"}>FAQ</NavLink>
                    </ul>
                </div>
                {
                    !login ? 
                    <NavLink to={"/login"}>
                        <Button style={{
                            backgroundColor: "red",
                            color: "white",
                            fontWeight: "bold",
                        }}>Đăng Nhập</Button>
                    </NavLink> : <div className='name-people-all'>
                        <p className='name-people'>{login[0].name}</p>
                        <NavLink to={"/login"}>
                            <Button style={{
                                backgroundColor: "red",
                                color: "white",
                                fontWeight: "bold",
                            }} onClick={onClickDelete}>Đăng xuất</Button>
                        </NavLink>
                    </div>
                }
            </div>
        </div>
    );
}

export default Navbar;
