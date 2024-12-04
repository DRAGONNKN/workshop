<%@ page import="java.util.*" %>
        <%
            class Product {
                int id;
                String name; 
                String description;
                double price;
                String category;

                Product(int id, String name, String description, double price, String category) {
                    this.id = id;
                    this.name = name;
                    this.description = description;
                    this.price = price;
                    this.category = category;
                }
            }

            List<Product> products = new ArrayList<>();
            products.add(new Product(1, "Smartphone", "Latest Android smartphone", 499.99, "electronics"));
            products.add(new Product(2, "Laptop", "High-performance laptop for work and gaming", 999.99, "electronics")); 
            products.add(new Product(3, "Wireless Earbuds", "Noise-canceling wireless earbuds", 149.99, "electronics"));
            products.add(new Product(4, "T-Shirt", "Comfortable cotton T-shirt", 19.99, "fashion"));
            products.add(new Product(5, "Jeans", "Stylish denim jeans", 39.99, "fashion"));

            for(Product product : products) {
        %>
                <div class="product-card">
                    <h3><%= product.name %></h3>
                    <p><%= product.description %></p>
                    <p class="price">$<%= String.format("%.2f", product.price) %></p>
                    <p class="category"><%= product.category %></p>
                    <button onclick="addToCart(<%= product.id %>)">Add to Cart</button>
                </div>
        <%
            }
        %>
