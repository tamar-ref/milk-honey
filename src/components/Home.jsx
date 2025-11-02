import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Home({ products, addToCart }) {
    const { categoryName } = useParams();

    return (
        <div className="home">
            <img src="/logo2.png" alt="logo"></img>
            <h3>LATEST PRODUCTS</h3>
            <div className="latest">
                {
                    products.slice(0, 4).map(product => (
                        <ProductCard product={product} addToCart={addToCart} categoryName={categoryName} />
                    ))
                }
            </div>
        </div>
    );
}