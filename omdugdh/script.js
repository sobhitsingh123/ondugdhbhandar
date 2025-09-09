document.addEventListener('DOMContentLoaded', function() {
    // Product data for sweets and namkeen
    const products = [
        {
            id: 1,
            name: "Kaju Katli (1 kg)",
            price: 1000,
            description: "Premium cashew fudge topped with edible silver leaf. A classic Indian sweet for special occasions.",
            image: "../product1.jpg"
        },
        {
            id: 2,
            name: "Matar (1 kg)",
            price: 120,
            description: "Crispy rice & gram spirals, a crunchy twist in every bite.",
            image: "../matar.jpg"
        },
        {
            id: 3,
            name: "Gulab Jamun (1 Pcs)",
            price: 15,
            description: "Deep-fried khoya balls soaked in rose-scented sugar syrup. Perfect for celebrations.",
            image: "../product22.jpg"
        },
        {
            id: 4,
            name: "Besan Ladoo (1 kg)",
            price: 160,
            description: "Sweet balls made from roasted gram flour, ghee, and sugar. Festive favorite.",
            image: "../besan.jpg"
        },
        {
            id: 5,
            name: "Dhokla (1 kg)",
            price: 160,
            description: "Crispy and flaky savory crackers made with flour and spices. Perfect tea-time snack.",
            image: "../dokla.jpg"
        },
        {
            id: 6,
            name: "Samosa (1 Pcs)",
            price: 10,
            description: "A delicious mix of fried lentils, nuts, and spices. Our special house blend.",
            image: "../samosa.jpg"
        },
        {
            id: 7,
            name: "Fresh Paneer (1 kg)",
            price: 320,
            description: "Freshly made cottage cheese with perfect texture for curries and snacks.",
            image: "../paneer.jpg"
        },
        {
            id: 8,
            name: "meva laddu (1 kg)",
            price: 700,
            description: "100% pure clarified to perfection. Enhances flavor of all dishes.",
            image: "../mevaladdu.jpg"
        },
        {
            id: 9,
            name: "Birthday Cake (1 kg)",
            price: 360,
            description: "Flaky, melt-in-your-mouth sweet with layers of gram flour and sugar.",
            image: "../cake.jpg"
        },
        {
            id: 10,
            name: "Gujhiya (1 Pcs)",
            price: 15,
            description: "Crispy spiral snacks made from rice and gram flour. Perfect crunchy treat.",
            image: "../gujhiya.jpg"

        }
    ];
    
    // WhatsApp number
    const whatsappNumber = "918577820875";
    
    // Display products
    const productsContainer = document.getElementById('products-container');
    
    products.forEach(product => {
        const productCol = document.createElement('div');
        productCol.className = 'col-md-6 col-lg-4 mb-4';
        
        // Create product image HTML - show placeholder if image not available
        let imageHtml = '';
        if (product.image) {
            imageHtml = `
                <div class="product-img-container">
                    <img src="${product.image}" class="product-img" alt="${product.name}" onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1lbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzljYTJhYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk9tIER1Z2RoIEJoYW5kYXI8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzljYTJhYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjEuNWVtIj5Qcm9kdWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';">
                </div>
            `;
        } else {
            imageHtml = `
                <div class="product-img-placeholder">
                    <i class="fas fa-cookie"></i>
                    <p>${product.name}</p>
                </div>
            `;
        }
        
        productCol.innerHTML = `
            <div class="product-card">
                ${imageHtml}
                <div class="product-body">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="product-price">₹${product.price}</div>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-cart-plus me-2"></i>Order via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCol);
    });  
    
    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? 
                          e.target : e.target.closest('.add-to-cart');
            const productId = parseInt(button.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            
            // Create WhatsApp message
            const message = `I'm interested in purchasing ${product.name} (₹${product.price}). Please provide more details.`;
            const encodedMessage = encodeURIComponent(message);
            
            // Redirect to WhatsApp
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        }
    });
});