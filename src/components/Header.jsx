import { NavLink } from 'react-router-dom';

export default function Header({ categories, cartItems }) {
    const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

    return (
        <>
            <header>
                <div>
                    <img src="/logo.png" alt="logo" />
                    <span>SHOP</span>
                </div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    {categories.map(category => (
                        <li key={category}>
                            <NavLink to={`/category/${category}`}>
                                {capitalize(category)}
                            </NavLink>
                        </li>
                    ))}
                </nav>
                <NavLink to="/cart">Cart ({cartItems.length})</NavLink>
            </header>
        </>
    );
}