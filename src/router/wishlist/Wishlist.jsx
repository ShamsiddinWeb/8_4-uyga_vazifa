import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'

const Wishlist = () => {
  let wishlist = useSelector(state => state.wishlist.value)
  console.log(wishlist);
  return (
    <div>
      {
        wishlist.length 
        ?
        <Products title="sevimlilar" data={wishlist} />
        :
        <h2 className='sevimli'>Sevimlilar ro'yxatiz hali mavjud emas</h2>
      }
    </div>
  )
}

export default Wishlist