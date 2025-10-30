import getCartSummary from "./getCartSummary"
import { Link } from "react-router-dom";

export default function CartPreview({ cartItems, setShowPreview, addToCart, removeFromCart, total }) {
    const summary = getCartSummary(cartItems);

    return (
        <div className='cartPre'>
            <button id="x" onClick={() => { setShowPreview(false) }}>X</button>
            {summary.map(item => (
                <div key={item.id}>
                    <div className='item'>
                        <img src={item.image} alt={item.title} />
                        <div>
                            <p>{item.title}</p>
                            <p>{item.price}$</p>
                            <div id='amount'>
                                <button onClick={() => removeFromCart(item.id)}>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => addToCart(item.id)}>+</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
            <div className="total">
                <p>TOTAL: {total.toFixed(2)}$</p>
                <Link to='/cart'>CHECKOUT</Link>
            </div>
        </div>
    )
}