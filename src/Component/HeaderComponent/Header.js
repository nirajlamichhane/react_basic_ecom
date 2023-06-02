import React from 'react';
import './Header.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LockIcon from '@mui/icons-material/Lock';
// import { fontSize } from '@mui/system';
function Header() {
  return (
    <div className='header'>
        <div className="header__top">
            <div className="header__top__icons">
                <TwitterIcon  className="icons"  />
                <FacebookRoundedIcon  className="icons" />
                <WhatsappRoundedIcon  className="icons" />
                <PhoneRoundedIcon  className="icons" />
            </div>
            <p> Free delivery Anywhere on All Products</p>
        </div>
        <div className="header__bottom">
                <div className="title">
                    <BusinessCenterIcon style={{fontSize:32}} className="title__icons"/>
                    <h1>CompanyName</h1>
                </div>
                <div className="navbar">
                    <a href="#"> <span>Homepage</span> </a>
                    <a href="#"> <span>Shop</span> </a>
                    <a href="#"> <span>Contact</span> </a>
                    <a href="#"> <span>My Account</span> </a>
                    <span><LockIcon /></span>
                </div>
        </div>
    </div>
  );
}

export default Header