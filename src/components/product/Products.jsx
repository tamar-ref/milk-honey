import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function Products({ products, addToCart, addToWishList, removeFromWishList, wishList }) {
    const { categoryName } = useParams();

    return (
        <div className='products'>
            {
                products.map(product => {
                    if (product.category === categoryName) {
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                                addToWishList={addToWishList}
                                removeFromWishList={removeFromWishList}
                                wishList={wishList}
                            />
                        );
                    }
                })
            }
        </div>
    );
}