import { Link, useParams } from "react-router-dom";
import Like from "./Like";

export default function Product({ products, addToCart, wishList, removeFromWishList, addToWishList }) {
    const { productId } = useParams();
    const id = Number(productId);
    const product = products.find(product => product.id === id);
    if (!product) {
        return <p>Product not found.</p>;
    }
    const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);


    return (
        <>
            <Link to={`/category/${product.category}`} id="back">⇦ Back To {capitalize(product.category)}</Link>
            <div key={product.id} className="product">
                <img src={product.image} alt={product.title} />
                <div className="content">
                    <p className="title">{product.title}</p>
                    <p className="details">{product.category}</p>
                    <p className="details">{product.description}</p>
                    <p>PRICE: {product.price}$</p>
                    <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                    <Like
                        wishList={wishList}
                        product={product}
                        removeFromWishList={removeFromWishList}
                        addToWishList={addToWishList}
                    />
                </div>
            </div>
        </>
    );
}
