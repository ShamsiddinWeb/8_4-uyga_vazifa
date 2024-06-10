import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoLogInSharp } from "react-icons/io5";
import headerImg from "../../assets/header__img.svg";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  const users = useSelector((s) => s.users.value);
  let wishlist = useSelector((state) => state.wishlist.value);
  let carts = useSelector((state) => state.cart.value);
  const [toogle, setToggle] = useState(false);
  return (
    <header className={`header ${toogle ? "open" : ""}`}>
      <div className="container">
        <div className="navbar">
          <NavLink to={"/"}>
            <img src={headerImg} alt="" />
          </NavLink>
          <div className="navbar__card">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/create-user"}>Create user</NavLink>
            <NavLink to={"/all-users"}>
              All users <sup>{users.length}</sup>
            </NavLink>
            <NavLink to={"/"}>Blogs</NavLink>
          </div>
          <div className="login__burger">
            <div className="cards">
              <a className="linkk" href="#">
                <IoSearch />
              </a>
              <a className="linkk" href="#">
                {" "}
                <IoLogInSharp />
              </a>
              <NavLink to={"/cart"}>
                <IoCartOutline className="svg" />{" "}
                <sup className="sup">{carts.length}</sup>
              </NavLink>
              <NavLink to={"/wishlist"}>
                <FaRegHeart className="svg" />{" "}
                <sup className="sup">{wishlist.length}</sup>
              </NavLink>
            </div>
            <button className="header__navbar-btn">
              <IoLogInSharp /> Login
            </button>
            <div className="header__menu-burgers">
              <button
                className="header__menu"
                id="menu-burger"
                onClick={() => setToggle(!toogle)}
              >
                <span className="header__menu-span"></span>
                <span className="header__menu-span"></span>
                <span className="header__menu-span"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
