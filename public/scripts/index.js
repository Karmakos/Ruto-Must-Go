
import {ImageUploader} from './editor.js';

import{login} from './signup.js'

document.addEventListener("DOMContentLoaded", () => {

    if (window.location.href.includes("/editor")){
            const uploadIconButton = document.getElementById("uploadIcon");
            if(uploadIconButton){
            uploadIconButton.addEventListener("click", () => {
                new ImageUploader("myFile", "imagePreview", "uploadIcon");
                console.log("ImageUploader initialized!");
            });
            } else{
                console.log("Image Upload Icon not Found!");
            }        
    }

    if(window.location.href.includes("/join")){
        login();
    }

});



