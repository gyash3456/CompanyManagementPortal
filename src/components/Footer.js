import React from 'react';
import './Footer.css';
import pic1 from './../assets/insta.svg';
import pic2 from './../assets/YT.svg';
import pic3 from './../assets/Twitter.png';
import pic4 from './../assets/link.svg';

function Footer() {
  return (
    <div>
      <footer>
        <div class="space">
        <img class="insta"src={pic1} alt=""/>
        </div>
        <div class="space">
        <img class="insta"src={pic2} alt=""/>
        </div>
        <div class="space">
        <img class="insta"src={pic3} alt=""/>
        </div>
        <div class="space">
        <img class="insta"src={pic4} alt=""/>
        </div>
      </footer>
    </div>
  )
}

export default Footer
