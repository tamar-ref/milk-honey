import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart, categoryName }) {

    return (
        <Link to={`/category/${categoryName}/product/${product.id}`}
            key={product.id}
        >
            <div key={product.id} className='productCard'>
                <div id='img'>
                    <img src={product.image} alt={product.title} />
                </div>
                <p className='title'>{product.title}</p>
                <p className='details'>{product.category}</p>
                <p className='details'>{product.price} $</p>
                <button onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(product.id);
                }}>
                    ADD TO CART
                </button>
            </div>
        </Link>
    )
}