import React from "react";
import './ErrorModal.css'
function ErrorModal(props) {
  
  
    
    return (


        <div>
            <div class='modal'>
                <div class='title'>
                    <p>{props.title}</p>
                </div>
                <div class='message'>
                    <p>{props.message}</p>
                </div>
                <button id='button' onClick={props.onConfirm}>okay</button>
            </div>
        </div>
    );
}

export default ErrorModal;
