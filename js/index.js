// Your code goes here

//changes section to pink when clicked on
document.querySelectorAll('.content-section').forEach(travel => {
    travel.addEventListener('click',() => {
        travel.style.color="hotpink";
    })
})

const travel2 = document.querySelector('.content-destination')
    travel2.addEventListener('click',() => {
        travel2.style.color="hotpink";
    })


//enlarges image when hovering over
const destination = document.querySelectorAll('.destination');
console.log(destination);
    destination.forEach((destin) => {

    destin.addEventListener('mouseover', ()=> {
        destin.style.transform = "scale(1.2)";
        destin.style.transition = "0.3s"
    })

    destin.addEventListener('mouseout', ()=> {
        destin.style.transform = 'scale(1.0)';
        destin.style.transition = "0.3s"
    })
})


//changes nav to a teal background with white text when you scroll down
const fullhead =document.querySelector('.main-navigation')
window.onscroll =()=>{
    fullhead.style.backgroundColor ='teal';
    fullhead.style.color='white';
    navLinks.forEach(link => link.style.color ='black')
    if(window.pageYOffset=== 0){
        fullhead.style ='';
        navLinks.forEach(link => link.style.color ='')
    }
}


//creates an alert when image of bus is clicked, stating image alt
let busImage = document.querySelector('.intro img');
let busImageAlt = busImage.alt;

busImage.addEventListener('click', function(event) {
window.alert(`${busImageAlt}`)
event.stopPropagation()
});


//creates an alert when page is loaded
window.addEventListener('load', function(event) {
    alert('You came to the right place!');
    event.stopPropagation();
  });


//foucs event
const navEvent = document.querySelector("nav");

navEvent.addEventListener('focus', (change) => {
  change.target.style.color = 'magenta';    
}, true);


//blur event
const navClicker = document.querySelectorAll("nav") [0];

navClicker.addEventListener('blur', (doAThing) => {
  doAThing.target.style.color = 'black';    
}, true);


//changes background to magenta when the up arrow is pressed
let keyEvent2 = document.querySelector("body");
keyEvent2.addEventListener("keyup", function (event) {
    event.target.style.backgroundColor = "purple";
});


//preventDefault()
document.querySelector("nav").addEventListener("click", function(event){
    event.preventDefault()
    alert ("Won't go");
  });


//resizes "Pick Your Destination" image
  let destinBoatImg = document.querySelector('.content-destination img');
  destinBoatImg.addEventListener('dblclick', () => {
    destinBoatImg.style.width = '70%';
    destinBoatImg.style.display = 'flex';
    destinBoatImg.style.margin = '0 auto';
})