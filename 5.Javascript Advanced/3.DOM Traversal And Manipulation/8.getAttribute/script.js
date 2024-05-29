//For this example, let's consider a gallery of images where each image has an associated data attribute called `data-author` that stores the author's name. You want to filter the images by author.

// Get all images
const imageElements = document
  .getElementById("imageGallery")
  .querySelectorAll("img");

  console.log(imageElements);

//   Create an array to store images by Alice
const imagesByAlice = [];
imageElements.forEach( (image) => {
    const authorImage = image.getAttribute('data-author');
    console.log(authorImage);
    if(authorImage === 'Alice'){
        imagesByAlice.push(authorImage);
    }
})

for(let i=0;i<imagesByAlice.length;i++){
    console.log(imagesByAlice[i]);
}

imageElements.forEach( (image) =>{
    if(!imagesByAlice.includes(image)){
        image.style.display = 'none';
    }
})