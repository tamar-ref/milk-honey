
export default function getCartSummary(cartItems) {
    const summary = {};

    cartItems.forEach(item => {
        if (summary[item.id]) {
            summary[item.id].quantity += 1;
        } else {
            summary[item.id] = { ...item, quantity: 1 };
        }
    });

    return Object.values(summary);
}