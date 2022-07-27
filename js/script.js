const arr = [
  {
    id: 0,
    img: './media/messi.jpg',
    name: 'Lionel Messi',
    title: 'The Legend & arguablly the GOAT player',
    teams: 'Plays with Argentina & PSG. Played with Barcelona.',
  },
  {
    id: 1,
    img: './media/ronaldo.jpg',
    name: 'Christiano Ronaldo',
    title: 'Juve star, the one and only CR7',
    teams: 'Plays with Portugal & Juve. Played with Man United & Real Madrid.',
  },
  {
    id: 2,
    name: 'Kylian Mbappe',
    img: './media/mbappe.jpg',
    title: '"Catch me if you can" -Mbappe',
    teams: 'Plays with France & PSG',
  },
  {
    id: 3,
    name: 'Kevin De Bruyne',
    img: './media/debruyne.jpg',
    title: 'Pundits have often described him as a "complete footballer"',
    teams: 'Plays with Belgim & Man City. Played with Chelsea & Wolfsburg.',
  },
  {
    id: 4,
    name: 'Mohamed Salah',
    img: './media/salah.jpg',
    title: 'As a defender you know what he\'s gonna do but you won\'t be able to stop it',
    teams: 'Plays with Egypt & Liverpool. Played with AC Roma.',
  },
  {
    id: 5,
    name: 'Zlatan Ibrahimović',
    img: './media/ibrahimovic.jpg',
    title: 'The only player that combined kick-boxing with soccer',
    teams: 'Plays with Sweden & AC Milan. Played with Barcelona & PSG.',
  },
];

const Speakers = document.createElement('section');
Speakers.id = 'speakers';
const program = document.querySelector('#program');
program.after(Speakers);
const SpeakersHeading = document.createElement('h2');
SpeakersHeading.textContent = "Featured Speakers"
Speakers.appendChild(SpeakersHeading);
const underline = document.createElement('div');
underline.classList.add('underline');
Speakers.appendChild(underline);
const SpeakersList = document.createElement('ul');

arr.forEach((ele) => {
  const Li = document.createElement('li');
  const Img = document.createElement('img');
  Img.src = ele['img'];
  Img.alt = ele['name'];
  const TextBlock = document.createElement('div');
  TextBlock.classList.add('text-block');
  const H3 = document.createElement('h3');
  H3.textContent = ele['name'];
  const Title = document.createElement('p');
  Title.classList.add('title');
  Title.textContent = ele['title'];
  const underline2 = document.createElement('div');
  underline2.classList.add('underline-2');
  const Teams = document.createElement('p');
  Teams.textContent = ele['teams'];
  Li.appendChild(Img);
  TextBlock.appendChild(H3);
  TextBlock.appendChild(Title);
  TextBlock.appendChild(underline2);
  TextBlock.appendChild(Teams);
  Li.appendChild(TextBlock);
  SpeakersList.appendChild(Li);
  Speakers.appendChild(SpeakersList);
});

const menu = document.querySelector('#mobile');
const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');
menuContainer.classList.add('hidden');
const closeBtn = document.createElement('button');
closeBtn.type = 'button';
const closeIcon = document.createElement('img');
closeIcon.src = './media/Icons/close.svg';
closeIcon.alt = 'close sign';
closeBtn.appendChild(closeIcon);
menuContainer.appendChild(closeBtn);
const logo = document.createElement('a');
logo.href = './index.html';
const logoImg = document.createElement('img');
logoImg.src = './media/Logos/logo.svg';
logoImg.alt = 'logo';
logo.appendChild(logoImg);
menuContainer.appendChild(logo);
const linksList = document.createElement('ul');
const aboutLink = document.createElement('a');
aboutLink.href = './pages/about.html';
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
