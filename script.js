// =======================
// THEME SWITCHER FUNCTIONALITY
// =======================
console.log('Theme script working');

let theme = localStorage.getItem('theme');

if (theme === null) {
  setTheme('blue');
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  const themeLink = document.getElementById('theme-style');
  if (!themeLink) return;

  switch (mode) {
    case 'light':
      themeLink.href = 'default.css';
      break;
    case 'blue':
      themeLink.href = 'blue.css';
      break;
    case 'green':
      themeLink.href = 'green.css';
      break;
    case 'purple':
      themeLink.href = 'purple.css';
      break;
  }

  localStorage.setItem('theme', mode);
}

// =======================
// SOCIAL IMAGE SWITCHER
// =======================
window.addEventListener('DOMContentLoaded', () => {
  const socialImages = ['https://ucarecdn.com/05fc1e20-2aab-4680-8434-9be3b7f49d94/Linkedin.png', 'https://ucarecdn.com/37b97cf3-0efb-4808-9f8b-a47ef5149076/Github.jpg'];
  let currentImageIndex = 0;
  const socialImg = document.getElementById('social_img');

  if (!socialImg) return;

  function switchSocialImage() {
    socialImg.style.opacity = '0';

    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % socialImages.length;

      const nextImg = new Image();
      nextImg.onload = function () {
        socialImg.src = socialImages[currentImageIndex];
        socialImg.style.opacity = '1';
      };
      nextImg.src = socialImages[currentImageIndex];
    }, 150);
  }

  setInterval(switchSocialImage, 5000);
});
// Fix iOS Safari scroll prevention on first touch
// Optimized scroll animation observer
document.addEventListener('DOMContentLoaded', function() {
    // Check if device supports smooth animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth <= 768;
    
    if (prefersReducedMotion || isMobile) {
        // Skip animations on mobile or if user prefers reduced motion
        const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right');
        animatedElements.forEach(el => {
            el.classList.add('animated');
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }
    
    // Desktop animation observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right');
    animatedElements.forEach(el => observer.observe(el));
});

