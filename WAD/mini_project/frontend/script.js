const API_URL = "http://localhost:5000/api";

const productForm = document.getElementById("productForm");
const orderForm = document.getElementById("orderForm");
const productsDiv = document.getElementById("products");

productForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const product = {
        name: document.getElementById("productName").value,
        price: Number(document.getElementById("productPrice").value),
        category: document.getElementById("productCategory").value,
        stock: Number(document.getElementById("productStock").value)
    };

    await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    productForm.reset();
    loadProducts();
});

orderForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const order = {
        customerName: document.getElementById("customerName").value,
        productName: document.getElementById("orderProduct").value,
        quantity: Number(document.getElementById("quantity").value),
        totalAmount: Number(document.getElementById("totalAmount").value)
    };

    await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    });

    alert("Order placed successfully");
    orderForm.reset();
});

async function loadProducts() {
    const response = await fetch(`${API_URL}/products`);
    const products = await response.json();

    productsDiv.innerHTML = "";
    products.forEach(function (product) {
        const item = document.createElement("div");
        item.className = "product";
        item.innerHTML = `
            <strong>${product.name}</strong><br>
            Price: Rs. ${product.price}<br>
            Category: ${product.category}<br>
            Stock: ${product.stock}
        `;
        productsDiv.appendChild(item);
    });
}

loadProducts();
