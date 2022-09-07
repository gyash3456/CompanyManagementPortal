import React from 'react';
import './SocialMedia.css'
import Navbar from './Navbar';
import pic1 from './../assets/insta.svg';
import pic2 from './../assets/YT.svg';
import pic3 from './../assets/Twitter.png';
import pic4 from './../assets/link.svg';
import pic5 from './../assets/social.PNG';
import pic6 from './../assets/snow.PNG';
import Footer from './Footer';

function SocialMedia() {
  return (
    <>
    <Navbar/>
    <div class="soc-main">
      <div class="soc-head">
        <p>
          Social Media Campaign
        </p>
      </div>
      <div class="banner">
      <div class="carousel">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active p-0">
      <img class="d-block w-100 h-100 p-0" src={pic5} alt="First slide"/>
    </div>
    <div class="carousel-item p-0">
      <img class="d-block w-100 h-100 p-0" src={pic6} alt="Second slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>

      </div>
      <div class="soc-icons">
      
        <div class="soc-space">
        <a href="https://www.instagram.com/accounts/login/?next=/mlesystems/" target="_blank"><img className='socialimg'src={pic1} alt=""/></a>
        </div>
        <div class="soc-space">
        <a href="https://www.youtube.com/channel/UC1oBbX4rsg4vBzPcXuwuGFA" target="_blank"><img className='socialimg'src={pic2} alt=""/></a>
        </div>
        <div class="soc-space">
        <a href="https://twitter.com/SystemsMle" target="_blank"><img className='socialimg'src={pic3} alt=""/></a>
        </div>
        <div class="soc-space">
        <a href="https://www.linkedin.com/company/mlesystems/mycompany/" target="_blank"><img className='socialimg'src={pic4} alt=""/></a>
        </div>
      

      </div>


      
    </div>
    </div>
    <Footer/>
    </>

  )
}

export default SocialMedia
