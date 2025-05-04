import React, { useEffect, useState } from 'react';
import { categoryData } from './categorydata';
import logo from '../assets/images/amazon_logo.png';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Amazon = () => {
  const [record, setRecord] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getAmazon = () => {
    fetch(`https://mocki.io/v1/6bdae5f6-c66e-4fef-ba7e-da7d4c90e7c1`)
      .then(res => res.json())
      .then((data) => {
        setRecord(data);

        const shopSection = data.find(item => item.section === 'shop');
        if (shopSection) {
          setFilteredCategories(shopSection.categories.slice(0, 4));
          setCategoryList(Object.keys(categoryData));
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getAmazon();
  }, []);

  const filterByCategory = (category) => {
    const shopSection = record.find(item => item.section === 'shop');
    if (!shopSection) return;

    if (category === "All") {
      setFilteredCategories(shopSection.categories.slice(0, 8));
      setSelectedCategory(null);
    } else {
      const newFiltered = categoryData[category] || [];
      setFilteredCategories(newFiltered);
      setSelectedCategory(category);
    }
  };

  return (
    <div>
      {record.map((section, index) => {
        if (section.section === 'header') {
          return (
            <div key={index}>
              <header className="header">
                <img src={logo} width={100} style={{ height: 60 }} alt="" />
                <div className="address">
                  <span>{section.navbar.address.line1}</span>
                  <strong>{section.navbar.address.line2}</strong>
                </div>
                <div className="search-bar">
                  <select>
                    {section.navbar.search.dropdown.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                  <input type="text" placeholder={section.navbar.search.placeholder} />
                  <button className="search-button">🔍</button>
                </div>
                <div className="nav-options">
                  <div className="nav-item">
                    <span>{section.navbar.signin.line1}</span><br />
                    <strong>{section.navbar.signin.line2}</strong>
                  </div>
                  <div className="nav-item">
                    <span>{section.navbar.returns.line1}</span><br />
                    <strong>{section.navbar.returns.line2}</strong>
                  </div>
                  <div className="nav-item cart">
                    🛒 <strong style={{ marginLeft: "2px" }}>{section.navbar.cart}</strong>
                  </div>
                </div>
              </header>


              <nav className="panel">
                <div className="menu">{section.panel.menu}</div>
                <div className="options">
                  {section.panel.options.map((opt, i) => (
                    <span key={i}>{opt}</span>
                  ))}
                </div>
                <div className="highlight">{section.panel.highlight}</div>
              </nav>



              <div className="hero-section">
                <div className="hero-msg">
                  <p>You are on amazon.com. You can also shop on Amazon India for millions of Products with fast local
                    delivery. <a href="#"> Click here to go to amazon.in </a></p>
                </div>
              </div>


              <div className="card-section">
                {/* Card 1 */}
                <div className="card">
                  <h3>Minimum 40% off | Electronics, cloth & more</h3>
                  <div className="grid-2x2">
                    <div>
                      <img src="https://a.media-amazon.com/images/I/61PZ+Szw+kL._SX679_.jpg" alt="Tishart Collection" />
                      <p>Tishart Collection</p>
                    </div>
                    <div>
                      <img src="https://a.media-amazon.com/images/I/71ojDi0wKlL._SY679_.jpg" alt="Women Kurti" />
                      <p>Women Kurti</p>
                    </div>
                    <div>
                      <img src="https://a.media-amazon.com/images/I/61L5Qm8jJWL._SY679_.jpg" alt="Sunglasses" />
                      <p>Sunglasses</p>
                    </div>
                    <div>
                      <img src="https://a.media-amazon.com/images/I/51R-GxKyMsL._SY695_.jpg" alt="Shoes" />
                      <p>Shoes</p>
                    </div>
                  </div>
                  <a href="#">See all deals</a>
                </div>

                {/* Card 2 */}
                <div className="card">
                  <h3>Minimum 50% off | Home, kitchen & more</h3>
                  <div className="grid-2x2">
                    <div>
                      <img src="https://a.media-amazon.com/images/I/71jjewsnjWL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="Kitchen" />
                      <p>Kitchen essentials</p>
                    </div>
                    <div>
                      <img src="https://a.media-amazon.com/images/I/71Mq0xq6M4L.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="Home Decor" />
                      <p>Home decor</p>
                    </div>
                    <div>
                      <img src="https://a.media-amazon.com/images/I/41lFui9z+hL._SY300_SX300_.jpg" alt="Furniture" />
                      <p>Furniture</p>
                    </div>
                    <div>
                      <img src="https://a.media-amazon.com/images/I/61sHXVsbXAL.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="Home Improvement" />
                      <p>Home improvement</p>
                    </div>
                  </div>
                  <a href="#">See all deals</a>
                </div>

                {/* Card 3 */}
                <div className="card">
                  <h3>Deals on accessories from your top smartphone brands</h3>
                  <div className="grid-2x2">
                    <div>
                      <img src="https://graphicsprings.com/wp-content/uploads/2023/07/image-58-1024x512.png" alt="Apple" />
                      <p>Apple | Up to 20%</p>
                    </div>
                    <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp28KNbT_76szjMx8V-F90zVouUYg3BblgtA&s" alt="Samsung" />
                      <p>Samsung | Up to 60% off</p>
                    </div>
                    <div>
                      <img src="https://logos-world.net/wp-content/uploads/2023/03/OnePlus-Logo.png" alt="Oneplus" />
                      <p>Oneplus | Starting ₹599</p>
                    </div>
                    <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAiEwg09Zf7_7HvEUDb3Tv1ZohycVMQ0VCA&s" alt="Xiaomi" />
                      <p>Xiaomi | Up to 70% off</p>
                    </div>
                  </div>
                  <a href="#">See all offers</a>
                </div>

                {/* Card 4 */}
                <div className="card">
                  <h3>Smartphones curated for you</h3>
                  <div className="grid-2x2">
                    <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdch6emNPiIfopVAq4pQuIR2XYizQDt_cnaQ&s" alt="Budget" />
                      <p>Budget | Under ₹10,000</p>
                    </div>
                    <div>
                      <img src="https://www.stuff.tv/wp-content/uploads/sites/2/2024/07/Best-mid-range-phones.jpg" alt="Mid-range" />
                      <p>Mid-range | ₹10,000 - ₹25,000</p>
                    </div>
                    <div>
                      <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/best_flagship_phones_2022-sixteen_nine.png?VersionId=lKQmaYZA1HRWyTjTm5OdBO9egK0J29OB" alt="Premium" />
                      <p>Premium | ₹25,000 - ₹40,000</p>
                    </div>
                    <div>
                      <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/best_flagship_phones-sixteen_nine.png?VersionId=pqxw9Nm0AfimmY0BMnNiaxRHUXW4FZ0M" alt="Ultra Premium" />
                      <p>Ultra Premium | Above ₹40,000</p>
                    </div>
                  </div>
                  <a href="#">See all offers</a>
                </div>
              </div>
            </div>
          );
        }


        if (section.section === 'shop') {
          return (
            <section key={index} className="shop-section">
              {/* Filter Buttons */}
              <div className="filter-buttons">
                <button
                  className={selectedCategory === null ? "active" : ""}
                  onClick={() => filterByCategory("All")}
                >
                  All
                </button>
                {categoryList.map((cat, idx) => (
                  <button
                    key={idx}
                    className={selectedCategory === cat ? "active" : ""}
                    onClick={() => filterByCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Filtered Shop Cards */}
              <div className="shop-categories">
                {filteredCategories.map((category, catIndex) => (
                  <div key={catIndex} className="shop-card">
                    <h3>{category.title}</h3>
                    <img src={category.image} alt={category.title} />
                    <div className="shop-links">
                      <a href="#">See More</a>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ Auto Slider below shop section */}
              {/* ✅ Slider with 7–8 images visible at once */}
              <div className="slider-container">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={7} // Show 7 images at a time
                >
                  {[
                    "https://images.pexels.com/photos/31862813/pexels-photo-31862813/free-photo-of-stunning-hyacinth-macaw-in-natural-habitat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
                    "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
                    "https://images.pexels.com/photos/460607/pexels-photo-460607.jpeg",
                    "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
                    "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
                    "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg",
                    "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  ].map((imgUrl, index) => (
                    <SwiperSlide key={index}>
                      <img src={imgUrl} alt={`Slide ${index + 1}`} className="slider-img-multi" />
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>
            </section>
          );
        }

        if (section.section === 'footer') {
          return (
            <footer key={index} className="footer-section">
              <div className="back-to-top">Back to Top</div>

              <div className="footer-links">
                {section.infoSections.map((info, idx) => (
                  <div key={idx} className="footer-column">
                    <h3>{info.title}</h3>
                    <ul>
                      {info.links.map((link, liIdx) => (
                        <li key={liIdx}>{link}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="footer-bottom">
                {section.bottomLogo && (
                  <img src={logo} width={140} alt="" />
                )}
                <div className="footer-bottom-links">
                  {section.footerLinks.map((link, idx) => (
                    <span key={idx}>
                      {link}
                      {idx !== section.footerLinks.length - 1 && <span className="divider"> | </span>}
                    </span>
                  ))}
                </div>
                <p className="footer-copyright">
                  {section.copyright}
                </p>
              </div>
            </footer>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Amazon;
