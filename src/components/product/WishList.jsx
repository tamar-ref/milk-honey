import ProductCard from "./ProductCard";
import { useEffect } from "react";

export default function WishList({ wishList, products, addToCart, addToWishList, removeFromWishList }) {

    return (
        <div className='products'>
            {wishList.length === 0 ? (
                <h2>Your wish list is empty</h2>
            ) : (
                <>
                    {products.map(product => {
                        if (wishList.some(item => item.id === product.id)) {
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
                    })}
                </>
            )}
        </div>
    )
}