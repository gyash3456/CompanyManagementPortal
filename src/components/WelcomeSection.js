import React from 'react';
import './WelcomeSection.css';
import pic from './../assets/MicrosoftTeams-image.png'

function WelcomeSection() {
  return (
    <div class="Welcome">
    <div class="WelcomeSection">
      <div class="Welcomeclass">
      <div class="WelcomeNote">
        <p class="headname">
          Hi,Vikas
        </p>
        <p class="textmsg">
          This is your Employee management dashboard . Look around and act.
        </p>
      </div>
        <div class="welcomeImage">
          <img  className='welcomeimg' src={ pic}></img>

        </div>
        </div>
      

      
    </div>
    </div>
  )
}

export default WelcomeSection
