var images= ['tech.jpg', 'tech3.jpg', 'code2.jpg']; 
let currentindex= 0;

var img= document.querySelector(".slider img");

var btn1= document.getElementById("prev");
var btn2= document.getElementById("next");




btn1.addEventListener("click", ()=>{
    
    if(currentindex > 0){                       // (for left side button                                
        currentindex= currentindex-1;                 
    }
    else{
        currentindex= images.length -1;         
    }
    img.src= images[currentindex];             // display and image
});

btn2.addEventListener("click", ()=>{
    if(currentindex< images.length -1){          //  for right side button
        currentindex= currentindex + 1;
    }
    else{
        
        currentindex=0;
    }
    img.src= images[currentindex];               // display an image
});











































// const img = ['tech.jpg', 'tech3.jpg', 'code2.jpg'];
// let currentIndex = 0;
//     var images = document.querySelectorAll(".slider-image");
//     var left= document.getElementById("prev");
//     var right= document.getElementById("next");


//     left.addEventListener("click", ()=>{
//         currentIndex= (currentIndex -1 + images.length)% images.length;
//         img.src= images[currentIndex]
        
//          console.log(img)

//          console.log(currentIndex);
//     });


//     right.addEventListener("click", ()=>{
//         currentIndex = (currentIndex + 1) % images.length;
//         img.src= images[currentIndex]
//         console.log(currentIndex);
                
//         console.log(img);

//     });




















































// const images = ['tech.jpg', 'tech3.jpg', 'code2.jpg']; 
// let currentIndex = 0;

// const carouselImage = document.querySelector('.image-div img');
// const prevButton = document.querySelector('.button-div1 button');
// const nextButton = document.querySelector('.button-div2 button');

// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     carouselImage.src = images[currentIndex];
// });

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     carouselImage.src = images[currentIndex];
// });





// const images = ['tech.jpg', 'tech3.jpg', 'code2.jpg']; 
// let currentIndex = 0;

// const carouselImage = document.querySelector('.image-div img');
// const prevButton = document.querySelector('.button-div1 button');
// const nextButton = document.querySelector('.button-div2 button');

// prevButton.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex -= 1;
//         carouselImage.src = images[currentIndex];
//     }
// });

// nextButton.addEventListener('click', () => {
//     if (currentIndex < images.length - 1) {
//         currentIndex += 1;
//         carouselImage.src = images[currentIndex];

