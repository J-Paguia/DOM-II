// Your code goes here


// mouseenter event
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseenter', () => { 
  logoHeading.style.transform = 'scale(1.2)';
  logoHeading.style.transition = 'transform 0.3s'
  logoHeading.style.color = '#FDBA4D';
});

// mouseleave event
logoHeading.addEventListener('mouseleave', () => {
  logoHeading.style.transform = 'scale(1.0)';
  logoHeading.style.color = 'black';
});

// click event  // preventDefault()   // stopPropagation
const navLink = document.querySelectorAll('.nav-link')
navLink.forEach( el => {
  el.addEventListener('click', () => {
    el.style.color = 'red';
    el.preventDefault();
    event.stopPropagation;
  })
})

//click event // stopPropagation
const body = document.querySelector('body')
  body.addEventListener('click', () => {
  body.style.backgroundColor = '#fff';
})

// dblclick event
const funBusImg = document.querySelector('.intro img');

  funBusImg.addEventListener('dblclick', () => {
    funBusImg.src = 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'

  })

// resize event 
const destinationImage = document.querySelector('.content-destination img');
window.addEventListener('resize', () => {
  destinationImage.src = 'https://images.unsplash.com/photo-1474874055390-459bc92357f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2046&q=80'
});

// wheel event
const button = document.querySelector('.destination .btn');
  button.addEventListener('wheel', () => {
    button.textContent = 'wheel event';
    button.style.backgroundColor = 'yellow';
    button.style.color = '#777';
  })

// mousemove event
const welcomeH2 = document.querySelector('.intro h2');
  welcomeH2.addEventListener('mousemove', runEvent);

  const mainNavigation = document.querySelector('.main-navigation')

  function runEvent(e) {
    welcomeH2.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, 200, 200)`; 
  }

  // mousedown event
  const mouseDownBtn = document.querySelectorAll('.btn')[1];
    mouseDownBtn.addEventListener('mousedown', () => {
      mouseDownBtn.style.backgroundColor = 'red';
      mouseDownBtn.style.color = 'white'
      mouseDownBtn.textContent = 'mousedown event'
      console.log(mouseDownBtn);

    })

  // mouseup event
  const mouseUpBtn = document.querySelectorAll('.btn')[2];
  mouseUpBtn.addEventListener('mousedown', () => {
    mouseUpBtn.style.backgroundColor = 'orange';
    mouseUpBtn.style.color = 'white'
    mouseUpBtn.textContent = 'mouseup event'

  })