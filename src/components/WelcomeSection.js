import React from 'react';
import './WelcomeSection.css';
import pic from './../assets/MicrosoftTeams-image.png'

function WelcomeSection() {
  return (
    <div class="Welcome">
    <div class="WelcomeSection">
      <div class="Welcomeclass">
      <div class="WelcomeNote">
        <p class="head1">
          Hi,Vikas
      
        </p>
        <p class="text1">
          This is your Employee management dashboard . Look around and act.
        </p>
      </div>
        <div class="Image">
          <img src={ pic}></img>

        </div>
        </div>
      

      
    </div>
    </div>
  )
}

export default WelcomeSection
