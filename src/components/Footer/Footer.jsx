import React from 'react';
import './Footer.scss';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="left">
                <div className="text-shop">SHOP</div>
                <div className="text">
                    <p>FAQ</p>
                    <p>Shiping</p>
                    <p>Return</p>
                    <p>About Us</p>
                </div>
                <div className="icon">
                    <img src="https://highook.com/wp-content/uploads/2024/03/visa.png" alt="" />
                    <img src="https://highook.com/wp-content/uploads/2024/03/mastercard.png" alt="" />
                    <img src="https://highook.com/wp-content/uploads/2024/03/paypal.png" alt="" />
                </div>
            </div>
            <div className="right">
                <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
                <p>
                    Join our herd to gain access to our latest drops,<br></br>
                    exclusive content, secret perks & more.
                </p>
                <div className="email">
                    <input type="text" placeholder='Email Address'/>
                    <span>SUBMIT</span>
                </div>
                <div className="icon">
                    <img src="https://highook.com/wp-content/uploads/2024/03/facebook_icon.png" alt="" />
                    <img src="https://highook.com/wp-content/uploads/2024/03/instagram_icon.png" alt="" />
                </div>
            </div>
        </div>
        <div className="center"></div>
        <div className="bottom">
            <div className="left">
                <p>Terms & Condition</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>
            <div className="right">
            © 2024 | Highook Limited | All Rights Reserved
            </div>
        </div>
    </div>
  )
}

export default Footer