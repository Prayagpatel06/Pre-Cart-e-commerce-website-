// Product Data
const products = [
    {
        id: 1,
        name: "iPhone 17 Pro Max",
        category: "electronics",
        price: 149900,
        description: "256 GB: 17.42 cm (6.9″) Display with Promotion, A19 Pro Chip, Best Battery Life in Any iPhone Ever, Pro Fusion Camera System, Center Stage Front Camera;",
        image: "https://m.media-amazon.com/images/I/71R8VsJ07nL._SX679_.jpg"
    },
    {
        id: 2,
        name: "Air Conditioners",
        category: "electronics",
        price: 59999,
        description: "air quality within an enclosed space to provide a comfortable environment.",
        image: "https://m.media-amazon.com/images/I/410ih0eEMfL._SL1500_.jpg"
    },
    {
        id: 3,
        name: "Sony WH-CH520 Wireless Bluetooth Headphones",
        category: "electronics",
        price: 4999,
        description: "Premium quality wireless headphones with noise cancellation and 30-hour battery life.",
        image: "https://m.media-amazon.com/images/I/41jR+301vvL._SL1200_.jpg"
    },
    {
        id: 4,
        name: "Modern Coffee Table",
        category: "home",
        price: 2999,
        description: "Stylish coffee table with glass top and wooden legs. Perfect for any living room.",
        image: "https://m.media-amazon.com/images/I/71ORYOVmtGL._SX679_.jpg"
    },
    {
        id: 5,
        name: "Apple iPad Pro",
        category: "electronics",
        price: 89999,
        description: "High-performance tablet with 10-inch display, perfect for work and entertainment.",
        image: "https://m.media-amazon.com/images/I/61kV643xjIL._SX679_.jpg"
    },
    {
        id: 6,
        name: "Plain Jeans",
        category: "fashion",
        price: 679,
        description: "Premium denim jeans with perfect fit. Comfortable and stylish for any occasion.",
        image: "https://m.media-amazon.com/images/I/612M5IVuRsL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 7,
        name: "Classic White T-Shirt",
        category: "fashion",
        price: 399,
        description: "Available size-> S, L, XL, XXL",
        image: "https://m.media-amazon.com/images/I/41WeiPUALML._SX679_.jpg"
    },
    {
        id: 8,
        name: "Cult TPE Yoga Mat",
        category: "sports",
        price: 989,
        description: "Non-slip yoga mat with extra cushioning. Ideal for all types of yoga practice.",
        image: "https://m.media-amazon.com/images/I/51ykbM2El2L._SL1100_.jpg"
    },
    {
        id: 9,
        name: "Fire-Boltt Phoenix Smart Watch",
        category: "electronics",
        price: 1099.99,
        description: "Feature-packed smartwatch with fitness tracking, heart rate monitor, and notifications.",
        image: "https://m.media-amazon.com/images/I/61dZKJiT06L._SX522_.jpg"
    },
    {
        id: 10,
        name: "Decorative Lamp",
        category: "home",
        price: 1540,
        description: "Elegant table lamp that adds ambiance to any room. LED bulb included.",
        image: "https://m.media-amazon.com/images/I/61sR4MwbslL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 11,
        name: "Running Shoes",
        category: "sports",
        price: 1239,
        description: "Lightweight running shoes with excellent cushioning and breathable material.",
        image: "https://m.media-amazon.com/images/I/61md3szAgLL._SY695_.jpg"
    },
    {
        id: 12,
        name: "Leather Jacket",
        category: "fashion",
        price: 999,
        description: "Classic leather jacket with modern design. Perfect for casual and semi-formal occasions.",
        image: "https://m.media-amazon.com/images/I/61Rkv7WLP0L._SX679_.jpg"
    },
    {
        id: 13,
        name: "Throw Pillows Set",
        category: "home",
        price: 2399,
        description: "Set of 5 decorative throw pillows with various patterns. Adds comfort and style.",
        image: "https://m.media-amazon.com/images/I/91KXu+LHq0L._SL1500_.jpg"
    },
    {
        id: 14,
        name: "Dumbbell Set",
        category: "sports",
        price: 899,
        description: "Adjustable dumbbell set for home workouts. Includes weights from 5lbs to 25lbs.",
        image: "https://m.media-amazon.com/images/I/71uneWbTPpL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 15,
        name: "Samsung Galaxy Z Fold6",
        category: "electronics",
        price: 109999,
        description: "5G Smartphone with Galaxy AI (Silver Shadow, 12GB RAM, 256GB Storage), 50MP High-Resolution Camera, Snapdragon 8 Gen 3, Google Gemini.",
        image: "https://m.media-amazon.com/images/I/61BgEfmZC8L._SX679_.jpg"
    },
    {
        id: 16,
        name: "Basket Ball",
        category: "sports",
        price: 399,
        description: "FitBox Sports Blend BlackGold Basketball Official Size 7 |Professional Match Ball for Indoor & Outdoor Games & Training | Ideal for Kids & Adults ",
        image: "https://m.media-amazon.com/images/I/81eCO23-KQL._SX679_.jpg"
    },
    {
        id: 17,
        name: "Nivia Storm Football - Size 5 (White), Rubber",
        category: "sports",
        price: 799,
        description: "Hard Ground Foot-Ball | Ideal for Grass Ground & Artificial Turf | Training Foot Ball | Soccer Ball",
        image: "https://m.media-amazon.com/images/I/61RpRYFb2wL._SX679_.jpg"
    },
    {
        id: 18,
        name: "Samsung washing Machine",
        category: "electronics",
        price: 14999,
        description: "Samsung 7 kg, 5 Star, Eco Bubble Technology, Digital Inverter Motor, Soft Closing Door, Fully-Automatic Top Load Washing Machine",
        image: "https://m.media-amazon.com/images/I/617lP8RwwjL._SL1500_.jpg"
    }, 
    {
        id: 19,
        name: "Water Purifier",
        category: "home",
        price: 14999,
        description: "",
        image: "https://m.media-amazon.com/images/I/517EfJgvjrL._SX522_.jpg"
    }, 
    {
        id: 20,
        name: "Lavie Women's Sparkle Framed Clutch | Ladies Purse Handbag",
        category: "fashion",
        price: 999,
        description: "",
        image: "https://m.media-amazon.com/images/I/81QX9Dat3JL._SY625_.jpg"
    },
    {
        id: 21,
        name: "Allen Solly Men's Cotton Regular Fit Polo T-Shirt",
        category: "fashion",
        price: 349,
        description: "Available size-> S, L, XL, XXL",
        image: "https://m.media-amazon.com/images/I/71eUwDk8z+L._SX569_.jpg"
    },
    {
    id: 22,
    name: "HP Pavilion 15 Laptop",
    category: "electronics",
    price: 68999,
    description: "15.6-inch FHD Display, Intel Core i7 13th Gen, 16GB RAM, 512GB SSD, Backlit Keyboard, Windows 11 Home.",
    image: "https://m.media-amazon.com/images/I/71RUyskVR+L._SX679_.jpg"
},
{
    id: 23,
    name: "LG 55-inch OLED 4K Smart TV",
    category: "electronics",
    price: 114999,
    description: "Ultra HD Smart TV with Dolby Vision IQ, AI Sound Pro, Alexa & Google Assistant Built-in.",
    image: "https://m.media-amazon.com/images/I/810ni0-df5L._SX522_.jpg"
},
{
    id: 24,
    name: "Wooden Bookshelf",
    category: "home",
    price: 5499,
    description: "5-tier open storage bookshelf made of engineered wood. Perfect for living room or office.",
    image: "https://m.media-amazon.com/images/I/713m0Fk7TfL._SL1500_.jpg"
},
{
    id: 25,
    name: "Cotton Bed Sheet Set",
    category: "home",
    price: 1399,
    description: "100% cotton king-size bed sheet with 2 pillow covers. Soft, breathable, and durable.",
    image: "https://m.media-amazon.com/images/I/91pd9jEtrtL._SL1500_.jpg"
},
{
    id: 26,
    name: "Nike Men's Revolution 6 Running Shoes",
    category: "sports",
    price: 2999,
    description: "Lightweight running shoes with cushioned sole and breathable mesh upper.",
    image: "https://m.media-amazon.com/images/I/51jLjhT0EuL._SY625_.jpg"
},
{
    id: 27,
    name: "Cosco Badminton Racket Set",
    category: "sports",
    price: 1249,
    description: "Set of 2 lightweight aluminum rackets with 3 shuttlecocks. Ideal for beginners and casual play.",
    image: "https://m.media-amazon.com/images/I/610jEKEtvWL._SL1500_.jpg"
},
{
    id: 28,
    name: "BATA-Men's Casual Sneakers",
    category: "fashion",
    price: 1199,
    description: "Trendy lace-up sneakers with rubber sole. Great for everyday wear.",
    image: "https://m.media-amazon.com/images/I/51LoLwn9lcL._SY695_.jpg"
},
{
    id: 29,
    name: "Women's Floral Maxi Dress",
    category: "fashion",
    price: 899,
    description: "Size: XS, S, M, L, XL, 2XL, 3XL<br>Elegant long dress with floral print and adjustable straps. Perfect for summer outings.",
    image: "https://m.media-amazon.com/images/I/81H5QihfdwL._SY741_.jpg"
}, 
{
    id: 30,
    name: "Philips Hair Dryer HP8100/46",
    category: "beauty",
    price: 1099,
    description: "Compact 1000W hair dryer with ThermoProtect setting. Gentle drying for everyday use.",
    image: "https://m.media-amazon.com/images/I/51FGbb3EbgL._SX679_.jpg"
},
{
    id: 31,
    name: "Maybelline New York Fit Me Matte Foundation",
    category: "beauty",
    price: 549,
    description: "Long-lasting liquid foundation for normal to oily skin. Natural matte finish.",
    image: "https://m.media-amazon.com/images/I/41DsJN2tH8L._SL1080_.jpg"
},
{
    id: 32,
    name: "The Alchemist by Paulo Coelho",
    category: "books",
    price: 299,
    description: "A timeless tale about following your dreams and destiny. International best-seller.",
    image: "https://m.media-amazon.com/images/I/617lxveUjYL._SL1500_.jpg"
},
{
    id: 33,
    name: "Rich Dad Poor Dad by Robert Kiyosaki",
    category: "books",
    price: 349,
    description: "Personal finance classic teaching money management and investment mindset.",
    image: "https://m.media-amazon.com/images/I/71HJj3XmheL._SY466_.jpg"
},
{
    id: 34,
    name: "MI Power Bank 3i 20000mAh",
    category: "electronics",
    price: 1999,
    description: "Fast-charging power bank with dual USB output and 18W charging support.",
    image: "https://m.media-amazon.com/images/I/61YrXCjFaFL._SX679_.jpg"
},
{
    id: 35,
    name: "Kitchen Non-Stick Cookware Set",
    category: "home",
    price: 2599,
    description: "5-piece set includes frying pan, kadhai, saucepan, and glass lids. Durable non-stick coating.",
    image: "https://m.media-amazon.com/images/I/71e7OBKX2mL._SX679_.jpg"
},
{
    id: 36,
    name: "Puma Men's Sports T-Shirt",
    category: "fashion",
    price: 699,
    description: "DryCELL moisture-wicking fabric for maximum comfort during workouts.",
    image: "https://m.media-amazon.com/images/I/61vDvyPxRrL._SX679_.jpg"
},
{
    id: 37,
    name: "Adidas Gym Bag",
    category: "sports",
    price: 1499,
    description: "Durable duffel bag with multiple compartments and adjustable shoulder strap.",
    image: "https://m.media-amazon.com/images/I/71ocgdeassL._SX679_.jpg"
},
{
    id: 38,
    name: "JBL Go 3 Portable Bluetooth Speaker",
    category: "electronics",
    price: 2999,
    description: "Ultra-portable speaker with punchy bass, IP67 waterproof and dustproof.",
    image: "https://m.media-amazon.com/images/I/71dV1Nr821L._SX522_.jpg"
},
{
    id: 39,
    name: "Canon EOS 1500D DSLR Camera",
    category: "electronics",
    price: 42999,
    description: "24.1MP APS-C CMOS sensor, DIGIC 4+ processor, Wi-Fi & NFC connectivity.",
    image: "https://m.media-amazon.com/images/I/81LskAU5h1L._SX679_.jpg"
},
{
    id: 40,
    name: "Gaming Keyboard & Mouse Combo",
    category: "electronics",
    price: 1999,
    description: "RGB backlit mechanical keyboard with high-precision gaming mouse.",
    image: "https://m.media-amazon.com/images/I/71C5Pz-OqoL._SX522_.jpg"
},
{
    id: 41,
    name: "Apple AirPods Pro (2nd Gen)",
    category: "electronics",
    price: 24999,
    description: "Active Noise Cancellation, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case.",
    image: "https://m.media-amazon.com/images/I/61sRKTAfrhL._SL1500_.jpg"
},
{
    id: 42,
    name: "HP Wireless Mouse X200",
    category: "electronics",
    price: 699,
    description: "Compact wireless mouse with 2.4GHz connectivity and 18-month battery life.",
    image: "https://m.media-amazon.com/images/I/71kGRWy3YSL._SL1500_.jpg"
},
{
    id: 43,
    name: "Lenovo Tab M10 HD Tablet",
    category: "electronics",
    price: 14999,
    description: "10.1-inch HD Display, 4GB RAM, 64GB Storage, Android 11, Dolby Atmos Speakers.",
    image: "https://m.media-amazon.com/images/I/41jdvXSoeyS._SX522_.jpg"
},
{
    id: 44,
    name: "Dell 24-inch Monitor (S2421HN)",
    category: "electronics",
    price: 10999,
    description: "Full HD IPS Display with 75Hz Refresh Rate and AMD FreeSync.",
    image: "https://m.media-amazon.com/images/I/614o1LdnsSL._SX679_.jpg"
},
{
    id: 45,
    name: "Smart LED Bulb (Pack of 2)",
    category: "home",
    price: 899,
    description: "Wi-Fi-enabled smart bulbs with Alexa & Google Assistant compatibility.",
    image: "https://m.media-amazon.com/images/I/41KHbARuHLS._SY300_SX300_QL70_FMwebp_.jpg"
},
{
    id: 46,
    name: "Office Chair Ergonomic Mesh",
    category: "home",
    price: 7499,
    description: "Ergonomic back support, adjustable height, and breathable mesh for comfort.",
    image: "https://m.media-amazon.com/images/I/71eUhWBH9cL._SL1500_.jpg"
},
{
    id: 47,
    name: "Foldable Study Table",
    category: "home",
    price: 1599,
    description: "Portable laptop table with adjustable height and cup holder.",
    image: "https://m.media-amazon.com/images/I/71ComclLq2L._SL1500_.jpg"
},
{
    id: 48,
    name: "Milton Electric Kettle 1.8L",
    category: "home",
    price: 1099,
    description: "Automatic shut-off and boil-dry protection, stainless steel body.",
    image: "https://m.media-amazon.com/images/I/61G2USexrDL._SL1500_.jpg"
},
{
    id: 49,
    name: "Men's Formal Shirt",
    category: "fashion",
    price: 799,
    description: "Slim-fit cotton formal shirt ideal for office and events.",
    image: "https://m.media-amazon.com/images/I/61aZMa-pTrL._SX569_.jpg"
},
{
    id: 50,
    name: "Women's Handbag Combo Set",
    category: "fashion",
    price: 1499,
    description: "3-piece combo with handbag, sling bag, and wallet. Stylish and practical.",
    image: "https://m.media-amazon.com/images/I/61pR3jjUOcL._SY625_.jpg"
},
{
    id: 51,
    name: "Kids Cotton Pajama Set",
    category: "kids",
    price: 599,
    description: "Soft breathable cotton nightwear set for kids. Available in multiple sizes.",
    image: "https://m.media-amazon.com/images/I/71sZloEOpwL._SY879_.jpg"
},
{
    id: 52,
    name: "Remote Control Car",
    category: "kids",
    price: 899,
    description: "High-speed RC car with rechargeable battery and LED lights.",
    image: "https://m.media-amazon.com/images/I/61tG-96fcCL._SX522_.jpg"
},
{
    id: 53,
    name: "Barbie Dream Doll",
    category: "kids",
    price: 1299,
    description: "Classic Barbie doll with colorful outfit and accessories.",
    image: "https://m.media-amazon.com/images/I/71+I3hfh5mL._SX522_.jpg"
},
{
    id: 54,
    name: "LEGO Classic Brick Set",
    category: "kids",
    price: 2999,
    description: "500+ colorful pieces to inspire creative play and learning.",
    image: "https://m.media-amazon.com/images/I/61551vEt+iL._SL1000_.jpg"
},
{
    id: 55,
    name: "Protein Shake Blender Bottle",
    category: "sports",
    price: 499,
    description: "Leak-proof 700ml shaker bottle with mixing ball for protein drinks.",
    image: "https://m.media-amazon.com/images/I/71xpLIeSGYL._SL1500_.jpg"
},
{
    id: 56,
    name: "Yoga Block & Strap Set",
    category: "sports",
    price: 799,
    description: "Durable EVA foam block and cotton strap for flexibility training.",
    image: "https://m.media-amazon.com/images/I/61otLlXBY6L._SL1500_.jpg"
},
{
    id: 57,
    name: "Resistance Bands Set (5 Pack)",
    category: "sports",
    price: 699,
    description: "Color-coded resistance levels, perfect for home workouts and stretching.",
    image: "https://m.media-amazon.com/images/I/51SRh1vdnBL.jpg"
},
{
    id: 58,
    name: "Apple Watch Series 10",
    category: "electronics",
    price: 49999,
    description: "Always-on Retina display, advanced fitness tracking, ECG & Blood Oxygen sensors.",
    image: "https://m.media-amazon.com/images/I/81kq5wkaqAL._SX679_.jpg"
},
{
    id: 59,
    name: "Samsung Galaxy Buds 3",
    category: "electronics",
    price: 11999,
    description: "Active noise cancellation, wireless charging, and clear voice pickup.",
    image: "https://m.media-amazon.com/images/I/71ke2BEdIhL._SL1500_.jpg"
},
{
    id: 60,
    name: "Electric Room Heater",
    category: "home",
    price: 2599,
    description: "Energy-efficient room heater with thermostat and safety cut-off feature.",
    image: "https://m.media-amazon.com/images/I/71uiX9AzTpL._SL1500_.jpg"
},
{
    id: 61,
    name: "Table Fan (3-Speed)",
    category: "home",
    price: 1799,
    description: "Powerful 3-speed oscillating fan with adjustable head.",
    image: "https://m.media-amazon.com/images/I/81AehfYvGYL._SL1500_.jpg"
},
{
    id: 62,
    name: "Kitchen Knife Set",
    category: "home",
    price: 1399,
    description: "7-piece stainless steel kitchen knife set with wooden stand.",
    image: "https://m.media-amazon.com/images/I/41-wAn5MVlL._SL1000_.jpg"
},
{
    id: 63,
    name: "Hair Straightener Brush",
    category: "beauty",
    price: 1599,
    description: "Quick heating ceramic brush for smooth, frizz-free straight hair.",
    image: "https://m.media-amazon.com/images/I/71uWv48YH2L._SL1500_.jpg"
},
{
    id: 64,
    name: "Beardo Ape-X Prime 3-in-1",
    category: "beauty",
    price: 1199,
    description: "Multipurpose Trimmer for Men | Grooming Kit : Beard Trimmer, Precision Trimmer, Ear & Nose Trimmer | Stainless Steel self-sharpening blades | Type C charging",
    image: "https://m.media-amazon.com/images/I/71e+mnMK68L._SX679_.jpg"
},
{
    id: 65,
    name: "Lotus Herbal Sunscreen SPF 50",
    category: "beauty",
    price: 299,
    description: "Matte gel sunscreen for all skin types, protects against UVA/UVB rays.",
    image: "https://m.media-amazon.com/images/I/61qxsRFjxDL._SX522_.jpg"
},
{
    id: 66,
    name: "Kitchen Mixer Grinder",
    category: "home",
    price: 3999,
    description: "750W mixer grinder with 3 stainless steel jars for multiple uses.",
    image: "https://m.media-amazon.com/images/I/51fk7XHeX+L._SL1000_.jpg"
},
{
    id: 67,
    name: "MIVI-Bluetooth Soundbar 120W",
    category: "electronics",
    price: 8999,
    description: "Deep bass, Dolby Audio, Bluetooth 5.0, and HDMI ARC support.",
    image: "https://m.media-amazon.com/images/I/71BdSadtfxL._SX522_.jpg"
},
{
    id: 68,
    name: "Gaming Headset with Mic",
    category: "electronics",
    price: 2599,
    description: "Surround sound, noise-canceling mic, RGB lighting, 3.5mm jack.",
    image: "https://m.media-amazon.com/images/I/51s3dJ81zWL._SX679_.jpg"
},
{
    id: 69,
    name: "Baby Feeding Bottle Set",
    category: "kids",
    price: 699,
    description: "BPA-free baby feeding bottles with soft silicone nipples (Pack of 3).",
    image: "https://m.media-amazon.com/images/I/71JAbZ8slrL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg"
},
{
    id: 70,
    name: "Baby Stroller Lightweight",
    category: "kids",
    price: 14999,
    description: "Comfortable, foldable stroller with adjustable canopy and storage basket.",
    image: "https://m.media-amazon.com/images/I/61lVLvdLFHL._SL1500_.jpg"
},
{
    id: 71,
    name: "Dog Food - Pedigree Adult (10kg)",
    category: "pet",
    price: 2499,
    description: "Complete and balanced nutrition for adult dogs with chicken & vegetables.",
    image: "https://m.media-amazon.com/images/I/61eTjy4YbtL._SX522_.jpg"
},
{
    id: 72,
    name: "Cat Scratching Post",
    category: "pet",
    price: 1299,
    description: "Durable sisal scratching post with play ball to keep cats active.",
    image: "https://m.media-amazon.com/images/I/51OT-KDqDVL._SL1200_.jpg"
},
{
    id: 73,
    name: "Dog Bed - Soft Cushion",
    category: "pet",
    price: 1999,
    description: "Washable, comfortable bed for small and medium-sized dogs.",
    image: "https://m.media-amazon.com/images/I/81TlJf2hoFL._SL1500_.jpg"
},
{
    id: 75,
    name: "TULSI-Organic Green Tea (100 Bags)",
    category: "groceries",
    price: 349,
    description: "100% natural green tea rich in antioxidants and flavor.",
    image: "https://m.media-amazon.com/images/I/81cjpz--BGL._SX679_.jpg"
},
{
    id: 76,
    name: "Tata Salt (1kg)",
    category: "groceries",
    price: 28,
    description: "Iodized salt with balanced minerals for healthy living.",
    image: "https://m.media-amazon.com/images/I/51ZkJ-B1EYL._SY300_SX300_QL70_FMwebp_.jpg"
},
{
    id: 77,
    name: "Aashirvaad Atta (10kg)",
    category: "groceries",
    price: 499,
    description: "Whole wheat flour made from high-quality grains for soft chapatis.",
    image: "https://m.media-amazon.com/images/I/9104JpXbv6L._SL1500_.jpg"
},
{
    id: 78,
    name: "Nescafe Classic Coffee (200g)",
    category: "groceries",
    price: 549,
    description: "Rich aroma and flavor for a perfect morning coffee experience.",
    image: "https://m.media-amazon.com/images/I/71PEJiFPwXL._SL1500_.jpg"
},
{
    id: 79,
    name: "Good Day Butter Cookies (Pack of 4)",
    category: "groceries",
    price: 179,
    description: "Crunchy and buttery cookies perfect for snacks and tea time.",
    image: "https://m.media-amazon.com/images/I/617MS6ibaqL._SL1500_.jpg"
},
{
    id: 80,
    name: "Maggi-Instant Noodles (12 Pack)",
    category: "groceries",
    price: 299,
    description: "Delicious instant noodles ready in 2 minutes. Pack of 12.",
    image: "https://m.media-amazon.com/images/I/812ujEPZcML._AC_UL480_FMwebp_QL65_.jpg"
},
{
    id: 81,
    name: "realme Buds",
    category: "electronics",
    price: 1999,
    description: "Touch control, long battery life, water-resistant earbuds.",
    image: "https://m.media-amazon.com/images/I/61dj32WdrxL._SL1500_.jpg"
},
{
    id: 82,
    name: "AGARO-Electric Toothbrush",
    category: "beauty",
    price: 999,
    description: "Rechargeable toothbrush with 3 brushing modes and soft bristles.",
    image: "https://m.media-amazon.com/images/I/51k-u2jecAL._SL1500_.jpg"
},
{
    id: 83,
    name: "Lip Balm Set (Pack of 4)",
    category: "beauty",
    price: 299,
    description: "Moisturizing lip balm set with natural ingredients and fruity flavors.",
    image: "https://m.media-amazon.com/images/I/51aj3eqm5ZL._SL1000_.jpg"
},
{
    id: 84,
    name: "Perfume - Wild Stone Edge",
    category: "beauty",
    price: 749,
    description: "Long-lasting masculine fragrance with woody undertones.",
    image: "https://m.media-amazon.com/images/I/61BXRNekoEL._SL1000_.jpg"
},
{
    id: 85,
    name: "Women’s Makeup Brush Set (12 pcs)",
    category: "beauty",
    price: 999,
    description: "Professional-grade makeup brushes with soft bristles and carrying case.",
    image: "https://m.media-amazon.com/images/I/41lbiQinFFL.jpg"
},
{
    id: 86,
    name: "The Power of Habit by Charles Duhigg",
    category: "books",
    price: 449,
    description: "Bestseller about how habits form and how to change them effectively.",
    image: "https://m.media-amazon.com/images/I/71aMS2VSfeL._SL1500_.jpg"
},
{
    id: 87,
    name: "Atomic Habits by James Clear",
    category: "books",
    price: 499,
    description: "A proven framework for building good habits and breaking bad ones.",
    image: "https://m.media-amazon.com/images/I/81F90H7hnML._SL1500_.jpg"
},
{
    id: 88,
    name: "Think and Grow Rich by Napoleon Hill",
    category: "books",
    price: 349,
    description: "Timeless guide to success and wealth mindset based on real-life examples.",
    image: "https://m.media-amazon.com/images/I/61bfj+-wArL._SL1400_.jpg"
},
{
    id: 89,
    name: "Wireless Charging Pad",
    category: "electronics",
    price: 1299,
    description: "Fast 15W wireless charging pad compatible with iPhone and Android.",
    image: "https://m.media-amazon.com/images/I/71VBkV4+9KL._SL1500_.jpg"
},
{
    id: 90,
    name: "Portable Air Cooler (12L)",
    category: "home",
    price: 5999,
    description: "Compact and energy-efficient air cooler with honeycomb pads.",
    image: "https://m.media-amazon.com/images/I/51SKchiKLQL._SL1500_.jpg"
},
{
    id: 91,
    name: "Men’s Leather Wallet",
    category: "fashion",
    price: 499,
    description: "Premium leather bi-fold wallet with multiple card slots and coin pocket.",
    image: "https://m.media-amazon.com/images/I/81S4AK8JtmL._SL1500_.jpg"
},
{
    id: 92,
    name: "BATA-Women’s Heeled Sandals",
    category: "fashion",
    price: 1399,
    description: "Stylish block heels with cushioned sole for comfort and elegance.",
    image: "https://m.media-amazon.com/images/I/61FUg9im1FL._SY695_.jpg"
},
{
    id: 93,
    name: "IMOU-Wireless Security Camera",
    category: "electronics",
    price: 3599,
    description: "1080p Full HD Wi-Fi security camera with night vision, motion detection, and 2-way audio.",
    image: "https://m.media-amazon.com/images/I/315Hg3Saq5L._SY300_SX300_QL70_FMwebp_.jpg"
},
{
    id: 94,
    name: "Ceiling Pendant Light",
    category: "home",
    price: 2499,
    description: "Modern decorative hanging pendant lamp for living rooms and dining spaces.",
    image: "https://m.media-amazon.com/images/I/71ePeFJhoHL._SL1500_.jpg"
},
{
    id: 95,
    name: "Wall Clock – Vintage Style",
    category: "home",
    price: 999,
    description: "Antique look round wall clock with Roman numerals. Battery operated.",
    image: "https://m.media-amazon.com/images/I/614RnzAlVLL._SL1080_.jpg"
},
{
    id: 96,
    name: "Men’s Analog Watch – Fossil",
    category: "fashion",
    price: 8999,
    description: "Stylish stainless-steel watch with chronograph and water resistance up to 50m.",
    image: "https://m.media-amazon.com/images/I/71emqFQwFML._SX679_.jpg"
},
{
    id: 97,
    name: "Women’s Fitness Leggings",
    category: "fashion",
    price: 799,
    description: "High-waist stretchable leggings with moisture-wicking fabric for yoga and workouts.",
    image: "https://m.media-amazon.com/images/I/41FNI0PAvcL._SX679_.jpg"
},
{
    id: 98,
    name: "Hair Dryer & Straightener Combo",
    category: "beauty",
    price: 1999,
    description: "Compact 1000W hair dryer and ceramic straightener set for everyday styling.",
    image: "https://m.media-amazon.com/images/I/61UCubpKE5L._SL1500_.jpg"
},
{
    id: 99,
    name: "Cricket Bat – English Willow",
    category: "sports",
    price: 3599,
    description: "Professional grade cricket bat with anti-scuff sheet and grip cover.",
    image: "https://m.media-amazon.com/images/I/81Fv8LDOfiL._SL1500_.jpg"
},
{
    id: 100,
    name: "The Psychology of Money by Morgan Housel",
    category: "books",
    price: 499,
    description: "Best-selling finance book exploring timeless lessons on wealth, greed, and happiness.",
    image: "https://m.media-amazon.com/images/I/71XEsXS5RlL._SL1500_.jpg"
}

];

// Cart Management
let cart = [];

// Initialize cart from localStorage
function initCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartCount();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cartCount');
    cartCountElements.forEach(el => {
        if (el) el.textContent = count;
    });
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    saveCart();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    if (document.getElementById('cartItems')) {
        loadCart();
    }
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
        if (document.getElementById('cartItems')) {
            loadCart();
        }
    }
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Product Display Functions
function createProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            ${product.price < 50 ? '<span class="product-badge">Sale</span>' : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" referrerpolicy="no-referrer" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${getCategoryName(product.category)}</p>
                <p class="product-price">${formatCurrency(product.price)}</p>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <a href="product-detail.html?id=${product.id}" class="btn-view">View</a>
                </div>
            </div>
        </div>
    `;
}

function getCategoryName(category) {
    const categories = {
        fashion: 'Fashion',
        electronics: 'Electronics',
        home: 'Home & Living',
        sports: 'Sports'
    };
    return categories[category] || category;
}

function loadProducts(category = 'all', sortBy = 'default', search = '') {
    let filteredProducts = category === 'all' 
        ? [...products] 
        : products.filter(p => p.category === category);

    // Text search (name, category, description)
    const q = (search || '').trim().toLowerCase();
    if (q) {
        filteredProducts = filteredProducts.filter(p => {
            const hay = `${p.name} ${p.category} ${p.description || ''}`.toLowerCase();
            return hay.includes(q);
        });
    }

    // Sort products
    switch(sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    const grid = document.getElementById('featuredProducts') || document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');

}

function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        document.getElementById('productDetailContent').innerHTML = `
            <div style="text-align: center; padding: 4rem;">
                <h2>Product not found</h2>
                <a href="products.html" class="btn btn-primary">Back to Products</a>
            </div>
        `;
        return;
    }

    document.getElementById('productNameBreadcrumb').textContent = product.name;
    
    const content = document.getElementById('productDetailContent');
    content.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}" referrerpolicy="no-referrer" loading="lazy">
        </div>
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <p class="product-detail-category">${getCategoryName(product.category)}</p>
            <p class="product-detail-price">${formatCurrency(product.price)}</p>
            <p class="product-detail-description">${product.description}</p>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateProductQuantity(-1)">-</button>
                <input type="number" class="quantity-input" id="quantityInput" value="1" min="1">
                <button class="quantity-btn" onclick="updateProductQuantity(1)">+</button>
            </div>
            <button class="btn btn-primary" id="addToCartBtn" style="width: 100%; padding: 1rem; font-size: 1.125rem;">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;

    // Add event listener for add to cart button
    document.getElementById('addToCartBtn').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('quantityInput').value) || 1;
        addToCart(product.id, quantity);
    });

    // Load related products
    loadRelatedProducts(product.category, productId);
}

function updateProductQuantity(change) {
    const input = document.getElementById('quantityInput');
    if (input) {
        const newValue = Math.max(1, parseInt(input.value) + change);
        input.value = newValue;
    }
}

// Load Related Products
function loadRelatedProducts(category, currentProductId) {
    const relatedProductsGrid = document.getElementById('relatedProducts');
    if (!relatedProductsGrid) return;

    // Prefer same-category items (excluding current), then fill from other categories if needed
    const sameCategoryPool = products.filter(p => p.category === category && p.id !== currentProductId);
    const otherCategoryPool = products.filter(p => p.category !== category && p.id !== currentProductId);

    // Deterministic shuffle per product page, so different products show different suggestions
    const seed = currentProductId || Date.now();
    const shuffledSame = shuffleWithSeed(sameCategoryPool, seed);
    const shuffledOther = shuffleWithSeed(otherCategoryPool, seed + 101);

    // Take up to 4 items, filling from others if not enough in same category
    const selection = [...shuffledSame, ...shuffledOther].slice(0, 4);

    relatedProductsGrid.innerHTML = selection.map(product => createProductCard(product)).join('');
}

// Fisher–Yates shuffle with a simple seeded PRNG to ensure per-product variety
function shuffleWithSeed(array, seed) {
    const result = array.slice();
    let state = (seed >>> 0) || 1;
    function rnd() {
        // LCG parameters (Numerical Recipes)
        state = (1664525 * state + 1013904223) >>> 0;
        return state / 0x100000000;
    }
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

// Navigate to category products
function navigateToCategory(category) {
    window.location.href = `products.html?category=${category}`;
}

function loadCart() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h2>Your cart is empty</h2>
                <p>Start shopping to add items to your cart</p>
                <a href="products.html" class="btn btn-primary">Browse Products</a>
            </div>
        `;
        updateCartSummary();
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" referrerpolicy="no-referrer" loading="lazy">
            </div>
            <div class="cart-item-info">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-category">${getCategoryName(item.category)}</p>
                <p class="cart-item-price">${formatCurrency(item.price)}</p>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span style="padding: 0 1rem; font-weight: 600;">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="cart-remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 10.00 : 0;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    const subtotalEl = document.getElementById('cartSubtotal');
    const shippingEl = document.getElementById('cartShipping');
    const taxEl = document.getElementById('cartTax');
    const totalEl = document.getElementById('cartTotal');

    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
    if (shippingEl) shippingEl.textContent = formatCurrency(shipping);
    if (taxEl) taxEl.textContent = formatCurrency(tax);
    if (totalEl) totalEl.textContent = formatCurrency(total);
}

// Filter and Sort
function setupFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const searchInput = document.getElementById('searchInput');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            loadProducts(this.value, sortFilter ? sortFilter.value : 'default', searchInput ? searchInput.value : '');
        });
    }

    if (sortFilter) {
        sortFilter.addEventListener('change', function() {
            loadProducts(categoryFilter ? categoryFilter.value : 'all', this.value, searchInput ? searchInput.value : '');
        });
    }

    if (searchInput) {
        const handler = function() {
            loadProducts(categoryFilter ? categoryFilter.value : 'all', sortFilter ? sortFilter.value : 'default', searchInput.value);
        };
        searchInput.addEventListener('input', handler);
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handler();
            }
        });
    }
}

// Global navbar search → navigates to products page with ?q=
function setupGlobalSearch() {
    const form = document.getElementById('globalSearchForm');
    const input = document.getElementById('globalSearchInput');
    if (!form || !input) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const term = (input.value || '').trim();
        const url = term ? `products.html?q=${encodeURIComponent(term)}` : 'products.html';
        window.location.href = url;
    });
    // Allow Enter to submit in case form onsubmit is blocked
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const term = (input.value || '').trim();
            const url = term ? `products.html?q=${encodeURIComponent(term)}` : 'products.html';
            window.location.href = url;
        }
    });
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
}

// Checkout Handler
function setupCheckout() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Thank you for your purchase! This is a demo site. In a real application, you would be redirected to a payment gateway.');
            cart = [];
            saveCart();
            loadCart();
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initCart();
    setupGlobalSearch();
    setupMobileMenu();
    setupFilters();
    setupCheckout();

    // Load featured products on home page (first 4 products)
    if (document.getElementById('featuredProducts')) {
        const featuredProducts = products.slice(0, 6);
        const grid = document.getElementById('featuredProducts');
        grid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    }

    // Load products on products page with category filter from URL
    if (document.getElementById('productsGrid')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category') || 'all';
        const sortBy = 'default';
        const q = urlParams.get('q') || '';
        
        // Set category filter if exists
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter && category !== 'all') {
            categoryFilter.value = category;
        }
        const searchInput = document.getElementById('searchInput');
        if (searchInput && q) {
            searchInput.value = q;
        }
        
        loadProducts(category, sortBy, q);
    }

    // Load cart on cart page
    if (document.getElementById('cartItems')) {
        loadCart();
    }
});

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
if (document.head) {
    document.head.appendChild(style);
}

// Currency formatting (Indian Rupee)
function formatCurrency(amount) {
    try {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
    } catch (e) {
        return `₹${(Math.round(amount * 100) / 100).toFixed(2)}`;
    }
}


