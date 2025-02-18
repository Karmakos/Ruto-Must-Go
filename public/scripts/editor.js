export class ImageUploader {
    constructor(uploadInputId, previewImageId, uploadIcon) {
      this.imageUpload = document.getElementById(uploadInputId);
      this.imagePreview = document.getElementById(previewImageId);
      this.uploadIcon = document.getElementById(uploadIcon);


      this.imageUpload.addEventListener("change", this.handleUpload.bind(this));
        
      

      
    }


  
    handleUpload() {
      const file = this.imageUpload.files[0];
      if (!file) return;
  
      // Validate file type (Only images)
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }
  
      // Validate file size (Max: 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("File is too large. Max size is 2MB.");
        return;
      }
  
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview.src = e.target.result;
        this.imagePreview.style.display = "block";
        this.uploadIcon.style.display = "none";

      };

  
      reader.readAsDataURL(file);

    }
   

  
  }

  export function submitForms(){
    
  const blogPost = document.forms["blogPost"];
  if (blogPost.checkValidity() === true) {
      blogPost.submit();
    } else {
     return alert("Add article content!");
  }
  
  }

