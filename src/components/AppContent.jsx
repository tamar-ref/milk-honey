import './style.scss'
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from "./Header";
import Home from './Home';
import Products from './Products';
import Product from './Product';
import Cart from './Cart';
import CartPreview from './CartPreview';

function App() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        const cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];
    });
    const [total, setTotal] = useState(() => {
        const total = localStorage.getItem("total");
        return total ? JSON.parse(total) : 0;
    });
    const [showPreview, setShowPreview] = useState(false);
    const location = useLocation();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setCategories([...new Set(data.map(p => p.category))]);
            })
            .catch(err => console.error('Error fetching categories:', err));
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem("total", JSON.stringify(total));
    }, [total]);

    const addToCart = (id) => {
        const product = products.find(p => p.id === id);
        if (!product) return;

        setTotal(prev => prev + product.price);
        setCartItems(prev => [...prev, product]);

        if (location.pathname !== "/cart") {
            setShowPreview(true);
        }
    };

    const removeFromCart = (id) => {
        const index = cartItems.findIndex(item => item.id === id);
        if (index === -1) return;

        const itemPrice = cartItems[index].price;

        setCartItems(prev => {
            const newCart = [...prev];
            newCart.splice(index, 1);
            return newCart;
        });

        setTotal(prev => prev - itemPrice);
    };

    const deleteFromCart = (id) => {
        const filteredCart = cartItems.filter(item => item.id !== id);
        const removedItems = cartItems.filter(item => item.id === id);
        const totalRemoved = removedItems.reduce((sum, item) => sum + item.price, 0);
        setCartItems(filteredCart);
        setTotal(prev => prev - totalRemoved);
    };


    return (
        <>
            <Header categories={categories} cartItems={cartItems} />
            <Routes>
                <Route
                    path="/"
                    element={<Home
                        products={products}
                        addToCart={addToCart}
                    />}
                />
                <Route
                    path="/category/:categoryName"
                    element={<Products
                        products={products}
                        addToCart={addToCart}
                    />}
                />
                <Route
                    path="/category/:categoryName/product/:productId"
                    element={<Product
                        products={products}
                        addToCart={addToCart}
                    />} />
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cartItems={cartItems}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            total={total}
                            setShowPreview={setShowPreview}
                            deleteFromCart={deleteFromCart}
                        />} />
            </Routes>
            {showPreview && <CartPreview
                cartItems={cartItems}
                setShowPreview={setShowPreview}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                total={total}
                deleteFromCart={deleteFromCart}
            />}
        </>
    );
}

export default App;
