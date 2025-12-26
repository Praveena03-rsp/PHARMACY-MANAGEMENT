import React from 'react';
import{useNavigate} from 'react-router-dom';
import './CartPage.css';

function CartPage() {
    const CartPage=({cart,setCart,setHistory,history,setCurrentInvoice})=>{
    const navigate= useNavigate();
    const total= cart.reduce((sum,item)=>sum+(item.price * item.quantity),0);

    const updateQuantity= (id,qty)=>{
        if(quantity===0){
        setCart(cart.filter(c=>c.id !==id));
        }
        else{
            setCart(cart.map(c=> c.id ===id ?{...c, quantity}:c));
        }
    };

    const removeItem =(id)=>{
        setCart(cart.filter(c=>c.id !==id));
    };

    const handleCheckout=()=>{
        const order={
            id:date.now(),
            date:new Date().toLocaleString(),
            items:[...cart],
            total:total
        };
        setHistory([order, ...history]);
        setCurrentInvoice(order);
        setCart([]);
        navigate('/invoice');
    };
    if (cart.length ===0){
        return(
            <div className="cart">
                <h2 className="cart-title">Shopping Cart</h2>
                <p className="cart-empty">Your cart is empty</p>
                <button className="cart-shop" onClick={()=>navigate('/Medicines')}>Start Shopping</button>
            </div>
        );
    }


  return (
    <div className="cart">
        <h2 className="cart-title">Shopping Cart</h2>
        <div className="cart-item">
            {cart.map(item=>(
                <div className="cart-card" key={item.id} >
                    <img src={item.img} alt={item.name} className="cart-img"/>
                    <div className="cart-detail">
                        <h3 className="cart-name">{item.name}</h3>
                        <p className="cart-price">₹{item.price}</p>
                    </div>
                    <div className="cart-qty">
                        <button className="cart-qtybtn" onClick={()=>updateQuantity(item.id,item.quantity -1)}>-</button>
                        <span className="cart-display">{item.quantity}</span>
                        <button className="cart-qtybtn" onClick={()=>updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <p className="cart-total">₹{item.price * item.quantity}</p>
                    <button className="cart-remove" onClick={()=>removeItem(item.id)}>Remove</button>
                </div>
            ))}
        </div>
        <div className="cart-summary">
          <h3>Total: ₹{total}</h3>
          <button onClick={handleCheckout} className="cart-checkout">Proceed to Checkout</button>
        </div>
      </div>
  );
}}

export default CartPage
