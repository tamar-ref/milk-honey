import { useParams } from "react-router-dom";
import ProductCard from "../product/ProductCard";

export default function Home({ products, addToCart, addToWishList, removeFromWishList, wishList }) {
    const { categoryName } = useParams();

    return (
        <div className="home">
            <img src="/logo2.png" alt="logo"></img>
            <h3>LATEST PRODUCTS</h3>
            <div className="latest">
                {
                    products.slice(0, 4).map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                            categoryName={categoryName}
                            addToWishList={addToWishList}
                            removeFromWishList={removeFromWishList}
                            wishList={wishList}
                        />
                    ))
                }
            </div>
        </div>
    );
}