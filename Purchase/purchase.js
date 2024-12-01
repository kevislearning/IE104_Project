$(document).ready(function () {
    // Example products in the cart
    const cartItems = [
        { name: "IoT Monitoring", price: 100 },
        { name: "AI Analytics", price: 150 },
        { name: "Smart Irrigation", price: 200 }
    ];

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    // Populate cart items
    const cartList = $('.list-group.mb-3');
    cartList.empty();
    cartItems.forEach(item => {
        cartList.append(`
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 class="my-0">${item.name}</h6>
                </div>
                <span class="text-muted">$${item.price}</span>
            </li>
        `);
    });

    // Add total price to the cart
    cartList.append(`
        <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$${totalPrice}</strong>
        </li>
    `);
});