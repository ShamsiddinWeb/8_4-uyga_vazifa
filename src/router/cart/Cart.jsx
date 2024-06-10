import React from "react";
import "./cart.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} from "../../context/cartSlice";

const Cart = () => {
  let carts = useSelector((state) => state.cart.value);
  console.log(carts);
  const dispatch = useDispatch();

  let cartItem = carts?.map((item) => (
    <div className="cartItem" key={item.id}>
      <div className="aa">
        <img src={item.images[0]} alt="" width={150} />
        <p className="cart__tite">{item.title}</p>
      </div>
      <p>{item.price} USD</p>
      <div className="btn__ick">
        <button className="dec"
          disabled={item.quantity <= 1}
          onClick={() => dispatch(decrementCartQuantity(item))}
        >
          -
        </button>
        <span className="vv">{item.quantity}</span>
        <button className="dec" onClick={() => dispatch(incrementCartQuantity(item))}>+</button>
      </div>
      <p className="quantity"> ${item.price * item.quantity}</p>
      <button className="delete" onClick={() => dispatch(removeItemFromCart(item))}><AiOutlineDelete/></button>
    </div>
  ));
  return (
    <div className="cart container">
      {carts.length ? (
        <div>
          <div className="pro">
            <h3 className="products">Products</h3>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          {cartItem}
        </div>
      ) : (
        <h2 className="lll">Hali Siz savatha hech narsa qo'shganiz yoq</h2>
      )}
    </div>
  );
};

export default Cart;
