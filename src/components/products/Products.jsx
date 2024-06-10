import React from "react";
import "./Products.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ data, title }) => {
  let wishlist = useSelector((state) => state.wishlist.value);

  const dispatch = useDispatch();

  function toastify() {
    toast.success("Mahsulot savatga qo'shildi!", {
      position: "top-right",
    });

  }
  let productsData = data?.map((e) => (
    <div key={e.id} className="card">
      <img className="img" src={e.images[0]} alt="" />
      <h3 className="card__title">{e.title}</h3>
      <p className="text">{e.description}</p>
      <button className="wish" onClick={() => dispatch(toggleLike(e))}>
        {wishlist?.some((el) => el.id === e.id) ? <FaHeart /> : <FaRegHeart />}
      </button>
      <button
        onClick={() => dispatch(addToCart(e)) && toastify()}
        className="car"
      >
        <IoCartOutline />
      </button>
      <ToastContainer />
    </div>
  ));
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <div className="wrapper">{productsData}</div>
    </div>
  );
};

export default Products;
