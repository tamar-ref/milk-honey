import { Link, useParams } from "react-router-dom";

export default function Home({ products, addToCart }) {
    const { categoryName } = useParams();

    return (
        <div className="home">
            <img src="/logo2.jpg" alt="logo"></img>
            <h3>LATEST PRODUCTS</h3>
            <div className="latest">
                {
                    products.slice(0, 4).map(product => (
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
                    ))
                }
            </div>
        </div>
    );
}