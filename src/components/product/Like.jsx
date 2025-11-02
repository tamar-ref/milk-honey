import { useState, useEffect } from "react";

export default function Like({ wishList, product, removeFromWishList, addToWishList }) {

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const isLiked = wishList.some(item => item.id === product.id);
        setLiked(isLiked);
    }, [wishList, product.id]);

    const toggleWish = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (liked) {
            removeFromWishList(product.id);
            setLiked(false);
        }
        else {
            addToWishList(product.id);
            setLiked(true);
        }
    };

    return (
        <button
            onClick={toggleWish}
            id="heart"
            style={{ color: liked ? "deeppink" : "gray" }}
        >
            ♥
        </button>
    )
}