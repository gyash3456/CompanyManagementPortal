import React from 'react';
import './Carousel.css';
import pic1 from './../assets/pega.PNG';
import pic2 from './../assets/snow.PNG';


function Carousel() {
  return (
    <div class="crousel">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active p-0">
      <img class="d-block w-100 h-100 p-0" src={pic1} alt="First slide"/>
    </div>
    <div class="carousel-item p-0">
      <img class="d-block w-100 h-100 p-0" src={pic2} alt="Second slide"/>
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
  )
}

export default Carousel
