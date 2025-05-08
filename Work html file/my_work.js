document.addEventListener('DOMContentLoaded', function() {
  
    /*creating a new element which will have all the shooting stars*/
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';   /*assigning the star class for styling in css*/
    document.body.appendChild(starsContainer);    /*adding the stars to the webpage*/
  
  
    /*making a function to create shooting star*/
    function createStar() {
      const star = document.createElement('div'); /*creating a new div element for the star*/
      star.className = 'star';
      /*the star gets positioned randomly on the screen*/
      star.style.left = `${Math.random() * 100}vw`; /*horizontal position*/
      star.style.top = `${Math.random() * 100}vh`;  /*vertical position*/
      
      /*setting random animation between 5 secods*/
      const duration = Math.random() * 3 + 2;
      star.style.animationDuration = `${duration}s`;
      
  
  
      /*adding delay before animation begins*/
      star.style.animationDelay = `${Math.random() * 10}s`;
      /*adding visual effects to the stars*/
      const brightness = Math.random() * 0.5 + 0.5;
      star.style.opacity = brightness;
      
      starsContainer.appendChild(star);
      
      /*once the animations ends , the star gets removed*/
      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    }
  
   /*using for loop to create 50 stars when page loads*/
  for (let i = 0; i < 50; i++) {
      setTimeout(createStar, Math.random() * 5000);
    }
  
  /*the interval remains every time and continues to give a loop effect while the user is going through the website*/
    setInterval(createStar, 300);
  });