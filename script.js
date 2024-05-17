
// CART
// toggles the cart when the cart button is clicked 
let cart = [];

function toggleCart() {
    const cartPopup = document.getElementById('cartPopup');
    if (cartPopup.style.display === 'block') {
        cartPopup.style.display = 'none';
    } else {
        cartPopup.style.display = 'block';
    }
}

// updates the cart with the product details 
function addToCart(name, price, image) {
    const product = { name, price, image };
    cart.push(product);
    updateCart();
}

// removes item from car when clicked 
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// updates the cart total of items and money
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = '';

    // assisted by w3schools https://www.w3schools.com
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const itemElement = document.createElement('li');
        itemElement.className = 'products';
        itemElement.innerHTML = `
         <img src="${item.image}" alt="${item.name}" width="150" height="150"/>
            <br>
        <span class="item-name"><i>${item.name}</i></span>
            <br>
         <span class="item-price">$${item.price.toFixed(2)}</span>
            <br>
         <button onclick="removeFromCart(${index})">Remove</button>
            <br>
        `; cartItems.appendChild(itemElement); });

    cartTotal.innerHTML = `<i>$${total.toFixed(2)}</i>`;
}
