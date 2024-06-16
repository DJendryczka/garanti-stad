const main = document.querySelector('main');
const nav = document.getElementById('navbar');
const navLinks = nav.querySelectorAll('a');

main.addEventListener('scroll', function() {
  if (main.scrollTop > 100) {  
    nav.classList.add('scrolled');
    nav.classList.remove('not-scrolled');
    navLinks.forEach(link => link.classList.add('scrolled-link'));
  } else {
    nav.classList.remove('scrolled');
    nav.classList.add('not-scrolled');
    navLinks.forEach(link => link.classList.remove('scrolled-link'));
  }
});

document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const intervalTime = 3000; // Interval time in milliseconds

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.display = 'none';
            slide.classList.remove('active');
        });
        slides[index].style.display = 'block';
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    let slideInterval = setInterval(nextSlide, intervalTime);

    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
        resetInterval();
    });

    document.querySelector('.next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        resetInterval();
    });

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    showSlide(currentIndex); // Show the first slide initially
});

document.querySelectorAll('.flip-card').forEach(function(card) {
    card.addEventListener('click', function() {
      card.classList.toggle('flipped');
    });
  });

const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    function forceReflow(element) {
        void element.offsetWidth;
    }
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            link.classList.remove('fade-in'); 
            forceReflow(link); 
            link.style.setProperty('--index', index);
            link.classList.add('fade-in'); 
        });
        
        burger.classList.toggle('toggle');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.stopPropagation();
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
            link.classList.remove('fade-in'); 
        });
    });

    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();