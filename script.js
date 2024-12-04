let cart = [];
let products = [];

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('index.jsp') || window.location.pathname === '/') {
        loadProducts();
    }
    else if (window.location.pathname.includes('cart.html')) {
        loadCart();
    }
});

function loadProducts() {
    const productCards = document.querySelectorAll('.product-card');
    
    products = [];
    
    productCards.forEach(card => {
        const name = card.querySelector('h3').textContent;
        const description = card.querySelector('p').textContent;
        const price = parseFloat(card.querySelector('.price').textContent.replace('$', ''));
        const category = card.querySelector('.category').textContent;
        const id = parseInt(card.querySelector('button').getAttribute('onclick').match(/\d+/)[0]);
        
        products.push({
            id: id,
            name: name,
            description: description, 
            price: price,
            category: category
        });
    });

}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingCart = localStorage.getItem('cart');
    cart = existingCart ? JSON.parse(existingCart) : [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
    console.log(cart);
}


function removeFromCart(productId) {
    const savedCart = localStorage.getItem('cart');
    cart = savedCart ? JSON.parse(savedCart) : [];
    
    const product = cart.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found in cart');
        return;
    }
    
    // Update the cart list display
    const cartList = document.getElementById('cart-list');
    const productCards = cartList.getElementsByClassName('product-card');
    for (let card of productCards) {
        const name = card.querySelector('h3').textContent;
        if (name === product.name) {
            card.remove();
            break;
        }
    }
    
    cart = cart.filter(item => item.id !== product.id);
    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);

    cart.splice(cart.indexOf(product), 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product removed from cart!');
    console.log(cart);
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    cart = savedCart ? JSON.parse(savedCart) : [];
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="removeFromCart(${product.id})">Remove Item</button>
        `;
        cartList.appendChild(productCard);
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function applyFilters() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const category = document.getElementById('category-filter').value;
    const filteredProducts = products.filter(product => {
        return (
            (category === '' || product.category === category) &&
            product.name.toLowerCase().includes(searchQuery)
        );
    });
    displayProducts(filteredProducts);
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('UserServlet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
        .then(response => {
            if (response.ok) {
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Login failed.');
            }
        });
}
