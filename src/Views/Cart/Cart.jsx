import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart,increaseCartQuantity,decreaseCartQuantity } from '../../Redux/Slices/userSlice';
import HomeHeader from '../Home/Home.Header';
import Footer from '../Footer/Footer';


const Cart = () => 
{
  const cartx = useSelector((data)=>data.counter.cart)
  const Qty = 3;//useSelector((data)=>data.counter.Qty)
  const cartTotal = 2;//Math.ceil(useSelector((data)=>data.cartx.cartTotal))
  const dispatch = useDispatch();
    return (
        
        <>
          <HomeHeader />
           <h1>Cart Total ${cartTotal}</h1>
          {cartx.map((data)=><div className="bg-white p-3 m-3 ">
            <img src={data.image} width = "101px" height = "100px" alt = 'Jj'/>
            <p>{data.title}</p>
            <button className='btn btn-danger' onClick={()=>dispatch(decreaseCartQuantity(data))}>-</button><span className='d-4 p-3 text-info'>{Qty[data.id]}</span><button className='btn btn-danger' onClick={()=>dispatch(increaseCartQuantity(data))}>+</button><p className='d-5 text-danger  my-3 px-4'>${data.price}</p>
            <button className='btn btn-danger ' onClick={()=>dispatch(removeFromCart(data))}>Remove</button>
            </div>)}
           <Footer />
        </>
      );
}
 
export default Cart;
