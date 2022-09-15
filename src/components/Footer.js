import React from 'react';
import './Footer.css';
import pic1 from './../assets/insta.svg';
import pic2 from './../assets/YT.svg';
import pic3 from './../assets/Twitter.png';
import pic4 from './../assets/link.svg';

function Footer() {
  return (
    <div className='footer-main'>
      <footer>
        <div class="space">
        <a href="https://www.instagram.com/accounts/login/?next=/mlesystems/" target="_blank">
        <img class="insta"src={pic1} alt=""/>
        </a>
        </div>
        <div class="space">
        <a href="https://www.youtube.com/channel/UC1oBbX4rsg4vBzPcXuwuGFA" target="_blank">
        <img class="insta"src={pic2} alt=""/>
        </a>
        </div>
        <div class="space">
        <a href="https://twitter.com/SystemsMle" target="_blank">
        <img class="insta"src={pic3} alt=""/>
        </a>
        </div>
        <div class="space">
        <a href="https://www.linkedin.com/company/mlesystems/mycompany/" target="_blank">
        <img class="insta"src={pic4} alt=""/>
        </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
