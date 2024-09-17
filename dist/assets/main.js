// Global Variables
const mobileNav = document.querySelector('.menu-button');
const closeNav = document.querySelector('.close-button');
const navBar = document.querySelector('.navbar');
const navItem = document.querySelectorAll('.navitem');
const morphText = document.querySelector('.text-morph');
const servicesDetailsBtn = document.querySelectorAll('.services-details');
const contactChoice = document.querySelector('.contact-choice');

// Event Listeners
mobileNav.addEventListener('click', () => {
  mobileNav.classList.add('hidden');
  closeNav.classList.remove('hidden');
  navBar.classList.add('appear');
  navBar.classList.add('transparent');
  navBar.classList.add('slide-right');

  setTimeout(() => {
    navBar.classList.remove('transparent');
    navBar.classList.remove('slide-right');
  }, 100);

  setTimeout(() => {
    for (nav of navItem) {
      nav.classList.add('slide-right');
    }
  }, 100);
});

closeNav.addEventListener('click', () => {
  closeNav.classList.add('hidden');
  mobileNav.classList.remove('hidden');
  // navBar.classList.remove('appear');
  navBar.classList.add('transparent');
  navBar.classList.add('slide-right');

  setTimeout(() => {
    navBar.classList.remove('appear');
    for (nav of navItem) {
      nav.classList.remove('slide-right');
    }
  }, 200);
});

for (nav of navItem) {
  nav.addEventListener('click', () => {
    closeNav.classList.add('hidden');

    mobileNav.classList.remove('hidden');
    navBar.classList.add('transparent');
    navBar.classList.add('slide-right');

    setTimeout(() => {
      navBar.classList.remove('appear');
      for (nav of navItem) {
        nav.classList.remove('slide-right');
      }
    }, 200);
  });
}

for (service of servicesDetailsBtn) {
  service.addEventListener('click', (e) => {
    let chevron = e.currentTarget.children[1];
    let targetEl = e.currentTarget.parentElement.nextElementSibling;
    chevron.classList.toggle('rotate90');

    targetEl.classList.toggle('hidden');
  });
}

contactChoice.addEventListener('click', (e) => {
  if (e.target.classList.contains('active')) {
    return;
  } else {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    // console.log(document.querySelector('.active'));
  }

  if (e.target.classList.contains('whatsapp', 'active')) {
    document.querySelector('.whatsapp-wrapper').classList.remove('hidden');
    document.querySelector('.form-wrapper').classList.add('hidden');
  } else {
    document.querySelector('.whatsapp-wrapper').classList.add('hidden');
    document.querySelector('.form-wrapper').classList.remove('hidden');
  }
});

// Functions
function morphingText() {
  setTimeout(() => {
    morphText.textContent = 'Fix';
  }, 0);

  setTimeout(() => {
    morphText.textContent = 'Build';
  }, 2000);

  setTimeout(() => {
    morphText.textContent = 'Repair';
  }, 4000);
}

morphingText();
setInterval(morphingText, 6000);
