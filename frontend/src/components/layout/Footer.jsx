import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterStyles = styled.div`
  margin-top: 50px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  padding-top: 50px;
  background-color: #f0f0f0;
  .footer-top {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .footer-column {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
  }
  .footer-title {
    font-size: 20px;
    font-weight: 600;
    position: relative;
  }
  .footer-title::after {
    position: absolute;
    content: "";
    top: 100%;
    width: 40%;
    left: 0;
    height: 4px;
    background-color: ${(props) => props.theme.primary};
  }
  .footer-content {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
  }
  .footer-content p {
    font-size: 14px;
    color: #333;
  }
  .footer-link:hover {
    color: ${(props) => props.theme.primary};
  }
  .footer-link {
    font-size: 16px;
    color: #333;
  }
  @media screen and (max-width: 768px) {
    .footer-top {
      grid-template-columns: repeat(1, 1fr);
    }
    .footer-content p {
      font-size: 16px;
    }
    .footer-title::after {
      height: 0;
    }
    .footer-link {
      font-size: 14px;
    }
    .map {
      width: 100%;
      height: 250px;
    }
    .footer-title {
      font-size: 18px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer-top py-3">
          <div className="footer-column">
            <NavLink>
            <img src="data:image/jpeg;base64,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" alt="" className="w-[120px]" />
        
            </NavLink>
            <ul className="footer-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                libero id et, in gravida. Sit diam duis mauris nulla cursus.
                Erat et lectus vel ut sollicitudin elit at amet.
              </p>  
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">CHÍNH SÁCH HỖ TRỢ</h3>
            <ul className="footer-content">
              <NavLink className="footer-link">
                Chính sách đổi - trả - hoàn tiền
              </NavLink>
              <NavLink className="footer-link">Chính sách bảo hành</NavLink>
              <NavLink className="footer-link">Chính sách vận chuyển</NavLink>
              <NavLink className="footer-link">
                Phương thức thanh toán và xuất HĐ
              </NavLink>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">DỊCH VỤ</h3>
            <ul className="footer-content">
              <NavLink className="footer-link">Điều khoản sử dụng</NavLink>
              <NavLink className="footer-link">
                Chính sách bảo mật thông tin cá nhân
              </NavLink>
              <NavLink className="footer-link">
                Chính sách bảo mật thanh toán
              </NavLink>
              <NavLink className="footer-link">
                Hệ thống trung tâm - nhà sách
              </NavLink>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">LIÊN HỆ</h3>
            <ul className="footer-content">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8857432929085!2d108.16728081477798!3d16.07141778887958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218e0ffef24e7%3A0x997b4bc2eeeaa45a!2zMTEzIE5ndXnhu4VuIFjDrSwgSG_DoCBNaW5oLCBMacOqbiBDaGnhu4N1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1679305327010!5m2!1svi!2s"
                width="300px"
                height="100"
                allowFullScreen=""
                loading="lazy"
                className="map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p>
                <span>SĐT:</span> <span>0123456789</span>
              </p>
              <p>
                <span>email</span> <span>Exam@gmail.com</span>
              </p>
              <p>
                <span>Địa chỉ:</span>{" "}
                <span>
                  113 Nguyễn Xí -P.Hoà Minh - Q.Liên Chiểu - TP.Đà Nẵng
                </span>
              </p>
            </ul>
          </div>
        </div>
      </div>
    
    </FooterStyles>
  );
};

export default Footer;
