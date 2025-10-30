import getCartSummary from "./getCartSummary"
import { Link } from "react-router-dom";

export default function CartPreview({ cartItems, setShowPreview, addToCart, removeFromCart, total, deleteFromCart }) {
    const summary = getCartSummary(cartItems);

    return (
        <div className='cartPre'>
            <button id="x" onClick={() => { setShowPreview(false) }}>X</button>
            {cartItems.length === 0 ? (
                <p id="empty">Your cart is empty.</p>
            ) : (
                <>
                    {summary.map(item => (
                        <div key={item.id}>
                            <div className='item'>
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <p>{item.title}</p>
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
                    ))
                    }
                </>
            )}
            <div className="total">
                <p>TOTAL: {total.toFixed(2)}$</p>
                <Link to='/cart'>CHECKOUT</Link>
            </div>
        </div>
    )
}