import React from 'react';
import './Greetings.css';
import video from './../assets/video.mp4';
import pic1 from './../assets/Yash2.png';
import pic2 from './../assets/saqib1.png';
import pic3 from './../assets/vvv.PNG';


function Greetings() {
  return (
    <>
    <div class="first">
      <div class="main">
        <video id="background-video" autoPlay loop muted controlsList="nodownload"  >
        <source src={video} type="video/mp4" />
        </video>
        <img class="mob-img"src={pic3}/>
        <div class="Emp-card">
        <div class="birthday">
                            <span class="test1">HAPPY BIRTHDAY !</span>
                            <span class="test2">HAPPY BIRTHDAY !</span>



                            <div class="birt-head">
                                <p>BIRTHDAY OF EMPLOYEE</p>
                            </div>
                            <div class="carousel card card text-center">
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active p-0">
                                            <img class="d-block card-img-top p-0 " src={pic1} alt="First slide" />
                                            <div class="card-body ">
                                                <p class="card-text aaa">HAPPY BIRTHDAY</p>
                                                <p class="card-text bbb">NAME:-Yash Gupta</p>
                                                <p class="card-text ccc">DATE:-19-04-1995</p>
                                            </div>

                                        </div>

                                        <div class="carousel-item p-0">
                                            <img class="d-block card-img-top p-0" src={pic2} alt="Second slide" />
                                            <div class="card-body ">
                                                <p class="card-text aaa">HAPPY BIRTHDAY</p>
                                                <p class="card-text bbb">NAME:-Saqib</p>
                                                <p class="card-text ccc">DATE:-22-08-1996</p>
                                            </div>
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
                        </div>

         <div class="birthday">
            <div class="birt-head">
                <p>EMPLOYEE OF THE MONTH</p>
            </div>
            <div class="card card text-center">
            <img class="card-img-top p-0 second" src={pic1} alt="First slide"/>
            <div class="card-body ">
            <p class="card-text kkk">YASH GUPTA</p>
            <p class="card-text nnn">PEGA DEVELOPER</p>
            </div>
            


            </div>
            <p class="card-text mmm">FOR OUTSTANDING SERVICE AND DEDICATION AS A DEVELOPER</p>
            
           
         </div>
         </div>
         

      
      

      </div>

      
    </div>
      </>
  )
}

export default Greetings
