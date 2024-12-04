<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>E-Commerce Store</h1>
        <nav>
            <a href="index.jsp">Home</a>
            <a href="cart.html">Cart</a>
            <a href="login.jsp">Login</a>
        </nav>
    </header>
    <section class="search-filter">
        <input type="text" id="search-bar" placeholder="Search products...">
        <select id="category-filter">
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home Appliances</option>
        </select>
        <button onclick="applyFilters()">Apply Filters</button>
    </section>
    <main>
        <section class="products" id="product-list">
        <%@ include file="jsp/products.jsp" %>
        
        </section>
    </main>
    <footer>
        <p>&copy; 2024 E-Commerce Store</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
