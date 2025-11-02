import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function Products({ products, addToCart }) {
    const { categoryName } = useParams();

    return (
        <div className='products'>
            {
                products.map(product => {
                    if (product.category === categoryName) {
                        return (
                            <ProductCard product={product} addToCart={addToCart} categoryName={categoryName} />
                        );
                    }
                })
            }
        </div>
    );
}