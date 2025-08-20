import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Style.css'
import MBookImage from './MBook.jpg'  // Import the image
import mac from './mac2.jpg';
import Samsung from './Samsung.jpg';
import Samsung2 from './Samsung2.jpg';
import Dell from './Dell.jpg';
import Dell2 from './Dell2.jpg';
import Dell3 from './Dell3.jpg';
import Dell4 from './Dell4.jpg';
import ecommerce from './E-Commerce1.jpg'
import Lenovo from './Lenovo.jpg';
import Lenovo1 from './Lenovo1.jpg';
import Lenovo2 from './Lenovo2.jpg';
import Lenovo3 from './Lenovo3.jpg';

function Template() {
    const [searchText, setSearchText] = useState('');
    const [cartItems, setCartItems] = useState(0);
    const [location, setLocation] = useState('Sacramento, 95829');
    const [isScrolled, setIsScrolled] = useState(false);
    const [toast, setToast] = useState(null);
    const [modalProduct, setModalProduct] = useState(null);
    const navigate = useNavigate();
    const { isLoggedIn, user, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toast logic
    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 2000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const handleSearch = () => {
        alert(`Searching for: ${searchText}`);
    };

    const addToCart = () => {
        setCartItems(prev => prev + 1);
        setToast('Added to cart!');
    };

    const handleLogout = () => {
        logout();
    };

    const handleBuyNow = (productName) => {
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }
        setToast(`Proceeding to checkout for ${productName}`);
    };

    const promotionalBlocks = [
        {
            title: "All you need for a beach trip",
            emoji: "🏖️",
            items: ["Sunscreen", "Sunglasses", "Beach Towels"],
            type: "Seasonal",
            category: "Summer Essentials",
            image: "/summer_essentials/logo.png"
        },
        {
            title: "Delivery in as fast as 1 hour*",
            emoji: "🎧",
            items: ["Headphones", "Skincare", "Snacks"],
            badge: "Express Delivery",
            category: "Quick Delivery"
        },
        {
            title: "New: PrettyGarden fashion",
            emoji: "👗",
            items: ["Floral Dresses", "Summer Collection", "Designer Wear"],
            category: "Fashion → Women's"
        },
        {
            title: "Toys & outdoor play from $5",
            emoji: "🧸",
            items: ["Sidewalk Chalk", "Art Kit", "Outdoor Games"],
            category: "Kids / Outdoor Activities"
        },
        {
            title: "Up to 50% off",
            emoji: "💊",
            items: ["Magnesium Glycinate", "Vitamins", "Supplements"],
            badge: "50% OFF",
            category: "Health & Wellness"
        },
        {
            title: "The women's shoe edit",
            emoji: "👠",
            items: ["Open-toe Shoes", "Sandals", "Heels"],
            category: "Fashion → Footwear"
        },
        {
            title: "Mother's Day cards",
            emoji: "💐",
            items: ["Cards", "Bouquets", "Gift Sets"],
            category: "Gift / Stationery"
        },
        {
            title: "Must-have reads",
            emoji: "📚",
            items: ["Sunrise on the Reaping", "Bestsellers", "New Releases"],
            category: "Books / Media"
        },
        {
            title: "Beauty & Skincare",
            emoji: "🧴",
            items: ["Lotion", "Face Wash", "Moisturizer"],
            category: "Beauty / Skincare"
        },
        {
            title: "Men's Fashion",
            emoji: "🧢",
            items: ["Caps", "Sunglasses", "Belts"],
            category: "Fashion → Men"
        },
        {
            title: "Kids Fashion",
            emoji: "🎽",
            items: ["T-shirts", "Summer Wear", "Hats"],
            category: "Fashion → Children"
        },
        {
            title: "Home Organization",
            emoji: "🧺",
            items: ["Baskets", "Organizers", "Storage"],
            category: "Home Essentials"
        },
        {
            title: "Furniture",
            emoji: "🛋️",
            items: ["Sofas", "Patio Chairs", "Living Room"],
            category: "Furniture / Living"
        },
        {
            title: "Grocery Delivery",
            emoji: "🧃",
            items: ["Cereal", "Snacks", "Breakfast"],
            category: "Grocery / Food"
        },
        {
            title: "Sports & Fitness",
            emoji: "⚽",
            items: ["Dumbbells", "Yoga Mats", "Sports Gear"],
            category: "Sports & Fitness"
        }
    ];

    return (
        <div className="container">
            {/* Toast Notification */}
            {toast && (
                <div className="toast">
                    {toast}
                </div>
            )}

            {/* Product Modal */}
            {modalProduct && (
                <div className="modal-overlay" onClick={() => setModalProduct(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2>{modalProduct.title}</h2>
                        <ul>
                            {modalProduct.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <button onClick={() => setModalProduct(null)}>Close</button>
                    </div>
                </div>
            )}

            <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="site-brand">
                    <img src={ecommerce} alt="WraithCart Logo" className="site-logo" />
                    <div className="brand-text">
                        <h1>WraithCart</h1>
                        <span className="domain">.com</span>
                    </div>
                </div>

                {/* Location Bar */}
                <div className="location-bar">
                    <span>How do you want your items? </span>
                    <button className="location-btn">
                        📍 {location} – Sacramento Supercenter
                    </button>
                    <span className="location-prompt">Is this the right location?</span>
                </div>

                {/* Main Header */}
                <div className="main-header">
                    {/* Search Section */}
                    <div className="search-section">
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Search everything at WraithCart online and in store"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <button onClick={handleSearch}>🔍</button>
                        </div>
                    </div>

                    {/* Account Section */}
                    <div className="account-section">
                        {isLoggedIn ? (
                            <>
                                <span>Welcome, {user.name}</span>
                                <button onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <button onClick={() => navigate('/login')}>Sign In</button>
                        )}
                        <div className="cart-btn">
                            🛒 <span className="cart-amount">${(cartItems * 0).toFixed(2)}</span>
                        </div>
                        <button
                            className="admin-login-btn"
                            onClick={() => navigate('/admin')}
                            style={{
                                marginLeft: '15px',
                                background: '#222',
                                color: '#fff',
                                borderRadius: '8px',
                                padding: '8px 18px',
                                border: 'none',
                                cursor: 'pointer',
                                fontWeight: 600,
                                transition: 'background 0.2s'
                            }}
                        >
                            Admin Login
                        </button>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="main-nav">
                    {['Departments', 'Services', 'Pharmacy Delivery', 'New',
                        'Mother\'s Day', 'The Beauty Event', 'Fashion', 'Home',
                        'Patio & Garden', 'Electronics', 'Grocery', 'Registry', 'OnePay'
                    ].map(item => (
                        <span key={item} className="nav-item">{item}</span>
                    ))}
                </nav>
            </div>

            {/* Promotional Blocks */}
            <div className="promo-grid">
                {promotionalBlocks.map((block, index) => (
                    <div 
                        key={index} 
                        className="promo-block"
                        style={{ '--index': index }}
                        tabIndex={0}
                        onClick={() => setModalProduct(block)}
                        onKeyPress={e => { if (e.key === 'Enter') setModalProduct(block); }}
                    >
                        <div className="promo-header">
                            <div className="promo-content">
                                <span className="emoji-icon">{block.emoji}</span>
                                <span className="category-tag">{block.category}</span>
                            </div>
                            {block.image && (
                                <img 
                                    src={block.image}
                                    alt="Category Icon"
                                    className="category-logo"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        objectFit: 'contain',
                                        marginLeft: 'auto'
                                    }}
                                />
                            )}
                        </div>
                        <h3>{block.title}</h3>
                        <ul className="promo-items">
                            {block.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        {block.badge && (
                            <span className="badge">{block.badge}</span>
                        )}
                        <button
                            className="shop-now"
                            onClick={e => { e.stopPropagation(); setToast('Shop now clicked!'); }}
                        >
                            Shop now
                        </button>
                    </div>
                ))}
            </div>

            <div className="middle1" style={{ 
                transition: 'all 0.3s ease'
            }}>
                <div className="plogo" style={{
                    border: '2px solid black',
                    padding: '10px',
                    background: 'white'
                }} >
                    <img src={MBookImage} alt="NO IMAGE" width={280} height={300} />
                    <img src={mac} alt="No Image Found" width={270} height={300} />
                </div>

                <div className="desc" style={{
                    border: '5px solid white',
                    padding: '10px',
                    borderRadius: '50px',
                    background: 'pink',
                    color: 'blueviolet'
                }}>
                    <details>
                        <summary>
                            <b><ins>Discription : </ins></b>
                        </summary>
                        <p>Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage,Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey
                        </p>
                    </details>
                    <p><b>Price :</b> $1000</p>
                    <details>
                        <summary>
                            <b><ins>Specification</ins></b>
                        </summary>
                        <details>
                            <summary>Generel</summary>
                            <p> Sales Package  : MacBook Air, 35W Dual USB-C Port Power Adapter, USB-C to MagSafe 3 Cable</p>
                            <p>Model Number : MLXX3HN/A </p>
                            <p>Model Name : MacBook Air</p>
                            <p>Series : MacBook AIR </p>
                            <p>Color : Space Grey </p>
                            <p>Type : Thin and Light Laptop</p>
                            <p>Suitable For : Processing & Multitasking</p>
                            <p>Battery Backup : Up to 18 hours </p>
                            <p>Power Supply : 35 W Dual USB-C Port Power </p>
                            <p>MS Office Provided : No</p>
                        </details>
                        <details>
                            <summary>Processor And Memory Features</summary>
                            <p>Processor Brand : Apple </p>
                            <p>Processor Name : M2 </p>
                            <p>SSD : Yes </p>
                            <p>SSD Capacity : 512 GB </p>
                            <p>RAM : 8 GB </p>
                            <p>RAM Type : Unified Memory </p>
                            <p>Processor Variant : Apple M2 Chip </p>
                            <p>Graphic Processor : NA </p>
                            <p>Number of Cores : 8 </p>
                            <p>Storage Type : SSD </p>
                        </details>
                        <details>
                            <summary>Operating System</summary>
                            <p><ins>Operating System</ins>: Mac OS Monterey</p>
                        </details>
                        <details>
                            <summary>Port And Slot Features</summary>
                            <p>Mic In : Yes </p>
                            <p>USB Port : 2 x Thunderbolt / USB 4 Ports , USB 4 (up to 40 Gbps), USB 3.1 Gen 2 (up to 10 Gbps)</p>
                        </details>
                        <details>
                            <summary>Display And Audio Features</summary>
                            <p>Touchscreen : No </p>
                            <p>Screen Size : 34.54 cm (13.6 Inch) </p>
                            <p>Screen Resolution : 2560 x 1664 Pixel </p>
                            <p>Screen Type : Liquid Retina display, LED-backlit display with IPS technology, 500 nits brightness, Wide colour (P3), True Tone technology </p>
                            <p>Speakers : Built-in Speakers </p>
                            <p>Internal Mic : Three-mic array with directional beamforming </p>
                            <p>Sound Properties : Stereo Speakers, Wide Stereo Sound, Support for Dolby Atmos</p>
                        </details>
                        <details>
                            <summary>Connectivity Features</summary>
                            <p>Wireless LAN : 802.11ax Wi-Fi 6 wireless networking </p>
                            <p>Bluetooth : v5.0</p>
                        </details>
                        <details>
                            <summary>Dimensions</summary>
                            <p>Dimensions : 304.1 x 215.0 x 11.3 mm </p>
                            <p>Weight : 1.24 Kg</p>
                        </details>
                        <details>
                            <summary>Additional Features</summary>
                            <p>Disk Drive : Not Available </p>
                            <p>Web Camera : 1080p FaceTime HD camera </p>
                            <p>Keyboard : Backlit Magic Keyboard </p>
                            <p>Pointer Device : Force Touch Trackpad </p>
                            <p>
                                Included Software : Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player
                            </p>
                            <p>Additional Features : 52.6 Watt Hour Lithium polymer Battery</p>
                        </details>
                        <details>
                            <summary>Warranty</summary>
                            <p>Warranty Summary : 1 Year Limited Warra­nty </p>
                            <p>Warranty Service Type : Onsite </p>
                            <p>Covered in Warranty : Manufacturing Defects </p>
                            <p>Not Covered in Warranty : Physical Damage </p>
                            <p>Domestic Warranty : 1 Year</p>
                        </details>
                    </details>
                    <p><b>Available Colours :</b> Silver / Black / Rose Gold</p>
                    <p><b>Rating :</b> ⭐⭐⭐⭐ 4.5 </p>

                    <a target="_blank" href="https://amzn.in/d/bMxxaNp"> <ins><b>Product Link : Amazon</b></ins></a> <br />
                    <a target="_blank" href="https://dl.flipkart.com/s/!kJrFBNNNN"><ins><b>Product Link : FlipCart</b></ins></a>

                    <div className="product-actions" style={{
                        display: 'flex',
                        gap: '10px',
                        marginTop: '10px'
                    }}>
                        <button
                            onClick={addToCart}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#8B4513',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={() => handleBuyNow('Apple MacBook Air')}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="middle2" style={{ 
                transition: 'all 0.3s ease'
            }}>
                <div className="plogo" style={{
                    border: '2px solid black',
                    padding: '10px'
                }}>
                    <img src={Samsung} alt="No Image Found" width={270} height={250} />
                    <img src={Samsung2} alt="No Image Found" width={270} height={250} />
                </div>

                <div className="desc" style={{
                    border: '2px solid white',
                    padding: '10px',
                    borderRadius: '50px',
                    background: 'paleturquoise',
                    color: 'blueviolet'
                }}>
                    <hr />
                    <marquee behavior="" direction="">
                        <p>
                            <b>Product : </b> Samsung Galaxy Book3 360 Laptop
                        </p>
                    </marquee>
                    <hr />

                    <details>
                        <summary>
                            <b><ins>Discription : </ins></b>
                        </summary>
                        <p>Samsung Galaxy Book3 360 Intel 13th Gen i5 EvoTM 39.6cm(15.6") Super Amoled 2-in-1 Touchscreen Laptop(16 GB/512GB SSD/Windows11/MS Office/Backlit KB/Fingerprint Sensor/Graphite/1.46Kg),NP750QFG-KA2IN
                        </p>
                    </details>
                    <p><b>Price :</b> $950</p>
                    <p><b>Available Colours :</b> Platinum Silver / Moonstone Gray</p>
                    <p><b>Rating :</b> ⭐⭐⭐⭐ 4.5 </p>

                    <a target="_blank" href="https://amzn.in/d/hDh1ETo"> <ins><b>Product Link : Amazon</b></ins></a>

                    <div className="product-actions" style={{
                        display: 'flex',
                        gap: '10px',
                        marginTop: '10px'
                    }}>
                        <button
                            onClick={addToCart}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#8B4513',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={() => handleBuyNow('Samsung Galaxy Book3 360')}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="middle3" style={{ 
                transition: 'all 0.3s ease'
            }}>
                <div className="plogo" style={{
                    border: '2px solid black',
                    padding: '10px'
                }}>
                    <img src={Dell} alt="No Image Found" width={270} height={270} />
                    <img src={Dell2} alt="No Image Found" width={270} height={270} />
                </div>

                <div className="desc" style={{
                    border: '2px solid black',
                    padding: '10px',
                    borderRadius: '50px',
                    background: 'skyblue',
                    color: 'darkslateblue'
                }}>
                    <hr />
                    <marquee behavior="" direction="">
                        <p>
                            <b>Product : </b> Dell Inspiron 7430 Laptop
                        </p>
                    </marquee>
                    <hr />

                    <details>
                        <summary>
                            <b><ins>Discription : </ins></b>
                        </summary>
                        <p>Dell Inspiron 7430 2in1 Touch Laptop, Intel Core i7-1355U Processor/16GB/512GB SSD/14.0" FHD+ 16:10 Aspect Ratio/ Active Pen/Backlit KB + FPR/Windows 11 + MSO'21/McAfee 15 Months/Platinum Silver/1.58kg
                        </p>
                    </details>
                    <p><b>Price :</b> $1299</p>
                    <details>
                        <summary>
                            <b><ins>Specifications</ins></b>
                        </summary>
                        <p> <b>Brand : Dell</b></p>
                        <p><b>Model Name :	</b>Inspiron 7430</p>
                        <p><b>Display : </b> 14 Inches</p>
                        <p><b>Colour :</b> Platinum Silver</p>
                        <p><b>Hard Disk Size :</b> 512 GB</p>
                        <p><b>CPU Model :</b> Core i7</p>
                        <p><b>RAM Memory Installed Size :</b> 16 GB</p>
                        <p><b>Operating System :</b>	Windows 11</p>
                        <p><b>Special Feature :</b> Fingerprint Reader, Backlit Keyboard, Integrated Graphics Card</p>
                        <p><b>Graphics Card :</b>	Integrated</p>
                    </details>
                    <p><b>Available Colours :</b> Platinum Silver / Black / Brown</p>
                    <p><b>Rating :</b> ⭐⭐⭐⭐ 4.5 </p>

                    <a target="_blank" href="https://amzn.in/d/2FyRaw8"> <ins><b>Product Link : Amazon</b></ins></a>

                    <div className="product-actions" style={{
                        display: 'flex',
                        gap: '10px',
                        marginTop: '10px'
                    }}>
                        <button
                            onClick={addToCart}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#8B4513',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={() => handleBuyNow('Dell Inspiron 7430')}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="middle4" style={{ 
                transition: 'all 0.3s ease'
            }}>
                <div className="plogo" style={{
                    border: '2px solid black',
                    padding: '10px'
                }}>
                    <img src={Lenovo} alt="No Image Found" width={270} height={250} />
                    <img src={Lenovo1} alt="No Image Found" width={270} height={250} />
                </div>

                <div className="desc" style={{
                    border: '2px solid black',
                    padding: '10px',
                    borderRadius: '50px',
                    background: 'lightcyan',
                    color: 'blueviolet'
                }}>
                    <hr />
                    <marquee behavior="" direction="">
                        <p>
                            <b>Product : </b>Lenovo Legion 7 Laptop
                        </p>
                    </marquee>
                    <hr />

                    <details>
                        <summary>
                            <b><ins>Discription : </ins></b>
                        </summary>
                        <p>Lenovo Legion 7 Intel Core i9-14900HX 16" (40.64cm) 3.2K IPS 430Nits 165Hz Gaming Laptop
                            (16GB/1TB SSD/Window 11/Office 2021/NVIDIA RTX 4060 8GB/100% DCI-P3/3 Month Game Pass/Grey/2.24Kg), 83FD000YIN
                        </p>
                    </details>
                    <p><b>Price :</b> $1999</p>
                    <details>
                        <summary>
                            <b><ins>Specifications</ins></b>
                        </summary>
                        <p><b>Brand :</b> Lenovo</p>
                        <p><b>Model Name :</b> Legion 7 </p>
                        <p><b>Screen Size :</b> 16 Inches </p>
                        <p><b>Hard Disk Size :</b> 1 TB  </p>
                        <p><b>CPU Model :</b> Intel Core i9 </p>
                    </details>
                    <p><b>Available Colours :</b> Silver / Eclipse Black / Brown</p>
                    <p><b>Rating :</b> ⭐⭐⭐⭐ 4.7 </p>

                    <a target="_blank" href="https://amzn.in/d/61hUZMt"> <ins><b>Product Link : Amazon</b></ins></a>

                    <div className="product-actions" style={{
                        display: 'flex',
                        gap: '10px',
                        marginTop: '10px'
                    }}>
                        <button
                            onClick={addToCart}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#8B4513',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={() => handleBuyNow('Lenovo Legion 7')}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            <footer className="modern-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Shop</h3>
                        <ul>
                            <li>Deals</li>
                            <li>New Arrivals</li>
                            <li>Bestsellers</li>
                            <li>Gift Cards</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Help</h3>
                        <ul>
                            <li>Your Orders</li>
                            <li>Returns</li>
                            <li>Shipping Rates</li>
                            <li>Customer Service</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>About</h3>
                        <ul>
                            <li>Our Story</li>
                            <li>Careers</li>
                            <li>Press Center</li>
                            <li>Investors</li>
                        </ul>
                    </div>
                    <div className="footer-section newsletter">
                        <h3>Stay Connected</h3>
                        <p>Subscribe for exclusive offers and updates</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button>Subscribe</button>
                        </div>
                        <div className="social-icons">
                            <span className="social-icon">📱</span>
                            <span className="social-icon">💻</span>
                            <span className="social-icon">📨</span>
                            <span className="social-icon">🌐</span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="payment-methods">
                        <span>💳</span>
                        <span>🏦</span>
                        <span>📱</span>
                        <span>💰</span>
                    </div>
                    <p className="copyright">
                        © 2024 WraithCart.com | All rights reserved
                        <span className="security-badge">🔒 Secure Shopping</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Template;