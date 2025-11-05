# Pre-Cart - E-Commerce Frontend

A modern, responsive e-commerce website built with HTML, CSS, and JavaScript.

## Features

- 🎨 **Modern UI Design** - Beautiful, clean interface with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🛍️ **Product Catalog** - Browse products by category with filtering and sorting
- 🛒 **Shopping Cart** - Add, remove, and update quantities in your cart
- 💾 **Local Storage** - Cart data persists across sessions
- ⚡ **Fast & Lightweight** - Pure vanilla JavaScript, no framework dependencies

## Pages

1. **Home** (`index.html`) - Landing page with hero section, categories, and featured products
2. **Products** (`products.html`) - Full product catalog with filtering and sorting
3. **Product Detail** (`product-detail.html`) - Individual product view with details
4. **Cart** (`cart.html`) - Shopping cart with order summary
5. **About** (`about.html`) - Simple description of the website and future plans
6. **Contact** (`contact.html`) - Contact form with basic client-side handling

## Getting Started

1. Clone or download this repository
2. Open `index.html` directly in your web browser
3. No build process or external dependencies are required (pure HTML/CSS/JS)

## Features in Detail

### Navigation
- Sticky navigation bar
- Mobile-responsive hamburger menu
- Shopping cart icon with item count

### Products
- Product cards with images, name, price, and category
- Add to cart functionality
- View product details
- Filter by category
- Sort by price or name

### Shopping Cart
- Add/remove items
- Update quantities
- Calculate subtotal, shipping, tax, and total
- Persistent storage using localStorage

### About
- Short overview of what the site is and what’s planned next (wishlists, order tracking, better filters/search, smoother checkout)

### Contact
- Contact form with Name, Email, Subject, and Message
- Client-side validation and success alert
- Note: This is a demo form; messages are not sent and no data is stored

### Design
- Modern gradient color scheme
- Smooth transitions and hover effects
- Card-based layout
- Responsive grid system

## Customization

### Adding Products
Edit the `products` array in `script.js`:

```javascript
{
    id: 13,
    name: "Product Name",
    category: "fashion", // fashion, electronics, home, sports
    price: 49.99,
    description: "Product description here",
    image: "🛍️"
}
```

### Styling
All styles are in `styles.css`. Modify CSS variables at the top for easy theme customization:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

## Notes

- All pages share a consistent navigation and footer.
- Internal links between pages are plain relative links (no framework/router).
- Product data is mocked in `script.js` for demo purposes only.


