import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedItem, setSelectedItem] = useState('TRANG CHỦ');
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className='home'>
      <div className="topsection1">
        <div className="row">
          <div className="left">
            <span className="hotline-label">HOTLINE :</span>
            <span className="hotline-number">1900 6446</span>
          </div>
          <div className="right">
            <img src="/src/assets/Images/icon-EN.png" alt="Hình ảnh ở bên phải" />
          </div>
        </div>
      </div>
      <div className="topsection2">
        <div className="header2">
          <img src="/src/assets/Images/logo_ngang.png" alt="FPT Securities" />
          <span className="tagline">Nơi bạn đặt niềm tin</span>
          <div className="search">
            <input type="text" placeholder="Tìm theo tên hoặc mã CK" />
          </div>
        </div>
      </div>
      <div className="topfooter">
        <div className="topcontainer">
          <ul>
            {['TRANG CHỦ', 'GIAO DỊCH TRỰC TUYẾN', 'SẢN PHẨM DỊCH VỤ', 'CƠ HỘI NGHỀ NGHIỆP', 'HỖ TRỢ KHÁCH HÀNG', 'QUAN HỆ CỔ ĐÔNG', 'VỀ FPTS'].map(item => (
              <li
                key={item}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
                className={selectedItem === item ? 'active' : ''}
              >
                <a
                  href="#"
                  className={selectedItem === item ? 'active' : ''}
                  onClick={() => {
                    setSelectedItem(item);
                    // Optionally handle any other click actions here
                  }}
                >
                  {item}
                </a>
                {item === 'GIAO DỊCH TRỰC TUYẾN' && hoveredItem === item && (
                  <ul className="dropdown-menu">
                    <li><a href="#">Sub Item 1</a></li>
                    <li><a href="#">Sub Item 2</a></li>
                    <li><a href="#">Sub Item 3</a></li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* imprt file footer vào đây */}
    </div>
  );
}

export default App;
