import getCartSummary from './getCartSummary';
import { useEffect } from 'react';

export default function Cart({ cartItems, addToCart, removeFromCart, total, setShowPreview, deleteFromCart }) {
    const summary = getCartSummary(cartItems);

    useEffect(() => {
        setShowPreview(false);
    }, []);

    return (
        <div className='cart'>
            <h1>
                Order
                <span className='colorfull'> Summery</span>
            </h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {summary.map(item => (
                        <div key={item.id}>
                            <div className='item'>
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <p>{item.title}</p>
                                    <p id='price'>{item.price}$</p>
                                    <div id='amount'>
                                        <button onClick={() => removeFromCart(item.id)}>-</button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => addToCart(item.id)}>+</button>
                                    </div>
                                </div>
                                <button id='trash' onClick={() => deleteFromCart(item.id)}>🗑️</button>
                            </div>
                            <hr />
                        </div>
                    ))}
                    <div className='total'>
                        <p><span className='colorfull'>TOTAL: </span>{total.toFixed(2)}$</p>
                        <button>COMPLETE ORDER</button>
                    </div>
                </>
            )}
        </div>
    );
}