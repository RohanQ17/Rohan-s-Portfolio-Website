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
