const menu = document.querySelector('#mobile');
const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');
menuContainer.classList.add('hidden');
const closeBtn = document.createElement('button');
closeBtn.type = 'button';
const closeIcon = document.createElement('img');
closeIcon.src = '../media/Icons/close.svg';
closeIcon.alt = 'close sign';
closeBtn.appendChild(closeIcon);
menuContainer.appendChild(closeBtn);
const logo = document.createElement('a');
logo.href = '../index.html';
const logoImg = document.createElement('img');
logoImg.src = '../media/Logos/logo.svg';
logoImg.alt = 'logo';
logo.appendChild(logoImg);
menuContainer.appendChild(logo);
const linksList = document.createElement('ul');
const aboutLink = document.createElement('a');
aboutLink.href = '../pages/about.html';
aboutLink.textContent = 'About';
linksList.appendChild(aboutLink);
const links =
['Program', 'Join', 'Sponsor', 'News']
const Campaign = document.createElement('span');
Campaign.textContent = 'GSC Campaign';

links.forEach((i) => {
  const Li = document.createElement('li');
  Li.textContent = i;
  linksList.appendChild(Li);
});

menuContainer.appendChild(linksList);
menuContainer.appendChild(Campaign);

const menuBtn = menu.querySelector('button');
menuBtn.after(menuContainer);

const body = document.querySelector('body');
menuBtn.addEventListener('click', () => {
  menuContainer.style.right = 0;
  menuContainer.style.left = 0;
  body.style.overflowY = 'hidden';
});

closeBtn.addEventListener('click', () => {
  menuContainer.style.right = '100%';
  menuContainer.style.left = '-100%';
  body.style.overflowY = 'auto';
});

const imgText = document.querySelectorAll('.img-text');
const eventImg = document.querySelectorAll('.img-container');
for (let i = 0; i < imgText.length; i++) {
  eventImg[i].addEventListener('mouseover', () => {
    imgText[i].style.scale = 0;
  });
};
for (let i = 0; i < imgText.length; i++) {
  eventImg[i].addEventListener('mouseout', () => {
    imgText[i].style.scale = 1;
  });
};