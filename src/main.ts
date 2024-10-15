import './style.scss';
/* import Swiper from 'swiper'; */
import 'swiper/css';
import gsap from 'gsap';
 
import {playerBurgerText} from './ts/playerBurger'; 
import { scrollTriggerTitle } from './ts/scrollTriggerTitle';
import { scrollText } from './ts/scrollText';

gsap.registerPlugin(ScrollTrigger);

const pixels = Array.from(document.querySelectorAll('.pixel'));
/* const totalScrolls = 4;
let currentScroll = 0; */
 

 

// Настройка ScrollTrigger для прокрутки
ScrollTrigger.create({
    trigger: ".track-1", // Секция для активации
    start: "0 65%", // Начало
    end: "50 60%",
    
    // Конец секции
    onEnter: () => {
        console.log('go1');

        // Функция для рандомного выбора элементов
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.11,
                duration: 0.2,
            });
        });
    },
    onLeave: () =>{
        console.log('leave1')
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.24,
                duration: 0.2,
            });
        });
    },
    
    onLeaveBack: () => {
        console.log('onLeaveBack1')
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
         randomizePixels(pixels, randomCount);
        
        pixels.forEach(pixel => {
            gsap.to(pixel, {
                opacity: 0,
                duration: 0.2,
            });
        });
    },
    onEnterBack:() => {
        console.log('onEnterBack1')
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.11,
                duration: 0.2,
            });
        });
    },
    
    scrub: true,
    /* markers: true */ // Маркеры для дебага
});
ScrollTrigger.create({
    trigger: ".track-2", // Секция для активации
    start: "75 65%", // Начало
    end: "125 60%", // Конец секции
    onEnter: () => {
        console.log('go2');

        // Функция для рандомного выбора элементов
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.35,
                duration: 0.2,
            });
        });
    },
    onLeave: () =>{
        console.log('leave2')
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.42,
                duration: 0.2,
            });
        });
    },
    onLeaveBack: () => {
        console.log('onLeaveBack2')
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.20,
                duration: 0.2,
            });
        });
    },
    onEnterBack:() => {
        console.log('onEnterBack2')
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.35,
                duration: 0.2,
            });
        });
    },
    scrub: true,
    /* markers: true */ // Маркеры для дебага
});
ScrollTrigger.create({
    trigger: ".track-3", // Секция для активации
    start: "150 65%", // Начало
    end: "200 60%", // Конец секции
    onEnter: () => {
        console.log('go3');

        // Функция для рандомного выбора элементов
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.55,
                duration: 0.2,
            });
        });
    },
    onLeave: () =>{
        console.log('leave3')
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.68,
                duration: 0.2,
            });
        });
    },
    onLeaveBack: () => {
        console.log('onLeaveBack3')
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.45,
                duration: 0.2,
            });
        });
    },
    onEnterBack:() => {
        console.log('onEnterBack3')
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.60,
                duration: 0.2,
            });
        });
    },
    scrub: true,
    /* markers: true */ // Маркеры для дебага
});
ScrollTrigger.create({
    trigger: ".track-4", // Секция для активации
    start: "225 65%", // Начало
    end: "275 60%", // Конец секции

    onEnter: () => {
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.85,
                duration: 0.2,
            });
        });
        console.log('go4')
        
    },
    onLeave: () =>{
        console.log('leave4')
        pixels.forEach(pixel => {
            gsap.to(pixel, {
                opacity: 1,
                duration:0.2,
                
            });
        });
    },
    onLeaveBack: () => {
        console.log('onLeaveBack4')
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.75,
                duration: 0.2,
            });
        });
    },
    onEnterBack:() => {
        console.log('onEnterBack4')
        function randomizePixels(pixels: any[], count: number) {
            // Перемешиваем массив
            const shuffled = pixels.sort(() => 0.5 - Math.random());
            // Отбираем рандомное количество элементов
            return shuffled.slice(0, count);
        }

        // Укажите количество элементов для выбора
        const randomCount = Math.floor(Math.random() * pixels.length) + 1; // от 1 до числа элементов в pixels
        const randomPixels = randomizePixels(pixels, randomCount);

        randomPixels.forEach((pixel: gsap.TweenTarget) => {
            gsap.to(pixel, {
                opacity: 0.85,
                duration: 0.2,
            });
        });
    },
    scrub: true,
    /* markers: true */ // Маркеры для дебага
});



const abilities = [
    {
        title: "Unique abilities",
        imgSrc: "./assets/skill1.png",
        imgSrcMain:'./assets/magic/1.gif',
        description: "In the world of Peexi Punk, a variety of classes are presented, each with unique abilities and playstyles. Players are given the opportunity to choose a class that matches their preferences and combat strategy.",
    },
    {
        title: "Active abilities",
        imgSrc: "./assets/skill2.png",
        imgSrcMain:'./assets/magic/2.gif',
        description: "In Peexi Punk, players have access to abilities that deal damage, provide defense, or perform other actions during battles, actively interacting with the world and influencing the outcome of the fights.",
    },
    {
        title: "Passive abilities",
        imgSrc: "./assets/skill3.png",
        imgSrcMain:'./assets/magic/3.gif',
        description: "Passive abilities are constantly active, enhancing the character's attributes or providing additional advantages without requiring activation, allowing players to continually improve their character and adapt to various situations on the battlefield.",
    }
];

let currentAbilityIndex = 0;

const titleElement = document.querySelector('.section04BoxTitle')!;
const imgElement = document.querySelector('.section04BoxImemsImg')! as HTMLImageElement;
const imgElementMain = document.querySelector('.section04BoxLeftImg')! as HTMLImageElement;
const textElement = document.querySelector('.section04BoxText')!;
const prevBtn = document.querySelector('.section04BoxImagePrev')!;
const nextBtn = document.querySelector('.section04BoxImageNext')!;
/* const imgPrev = document.querySelector('.section04BoxImgLeft')! as HTMLImageElement;
const imgNext = document.querySelector('.section04BoxImgRight')! as HTMLImageElement; */

function updateAbility() {
    const ability = abilities[currentAbilityIndex];
    titleElement.textContent = ability.title;
    imgElement.src = ability.imgSrc;
    imgElement.alt = ability.title;
    imgElementMain.src = ability.imgSrcMain;
    textElement.textContent = ability.description;

    // Disable buttons based on current ability index
    prevBtn.classList.toggle('active', currentAbilityIndex > 0);
    nextBtn.classList.toggle('active', currentAbilityIndex < abilities.length - 1);
     
}

// Initial load
updateAbility();

prevBtn.addEventListener('click', () => {
    if (currentAbilityIndex > 0) {
        currentAbilityIndex--;
        updateAbility();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentAbilityIndex < abilities.length - 1) {
        currentAbilityIndex++;
        updateAbility();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const subtitles = document.querySelectorAll('.joinExploreSubtitle')!;
    const worldDescription = document.querySelector('.worldDescription')!;
    const projectBox = document.querySelector('.aboutProjectBox')!;
    const rectWhoWeAreSectionBox = document.querySelector('.rectWhoWeAreSectionBox')! as HTMLElement;
    const imgMainBanner = document.querySelector('.rectWhoWeAreSectionImg')! as HTMLElement;
    const projectContent = [
        {
            description: "Our world is one of neon lights in megacities, giant corporations, and endless opportunities for exploration and adventure. In Peexi Punk, you will:",
            elements: [
                "Explore detailed locations, from grim alleyways to high-tech laboratories.",
                "Meet and interact with numerous unique NPCs, each with their own goals and stories.",
                "Engage in dynamic events and missions that develop the main storyline."
            ],
            src: './assets/01/01.png'
        },
        {
            description: "Peexi Punk is integrated into the Haqq Network, ensuring the security and reliability of all in-game transactions. Blockchain technologies empower the game to achieve:",
            elements: [
                "Affordable transactions, allowing players to easily exchange items and resources.",
                "Convenient and secure crafting, creating unique items and equipment.",
                "Efficient auction system functioning, where every player can trade and sell their discoveries."
            ],
            src: './assets/01/02.png'
        },
        {
            description: "In Peexi Punk, there are no limits to your imagination and possibilities. Start your adventure today and become part of our growing community. Be ready for the unknown, and let your cyberpunk dreams become reality. Welcome to the future. Welcome to Peexi Punk.",
            elements: [
                 
            ],
            src: './assets/01/03.png'
        }
    ];

    subtitles.forEach((subtitle) => {
        subtitle.addEventListener('click', () => {
            // Remove active class from all subtitles
            subtitles.forEach((sub, _) => sub.classList.remove('joinExploreSubtitleActive'));
            // Add active class to the clicked subtitle
            subtitle.classList.add('joinExploreSubtitleActive');

            // Get the index of the clicked subtitle
            const index = subtitle.getAttribute('data-index') as unknown as number;
             
            /* imgMainBanner.src = projectContent[index].src; */
            rectWhoWeAreSectionBox.style.transform = `translateX(-${imgMainBanner.clientWidth * index}px)`; // Make sure to append 'px'
            // Update the world description and project box content
            worldDescription.textContent = projectContent[index].description;
            projectBox.innerHTML = projectContent[index].elements.map(element => `
                <div class="aboutProjectBoxElement">
                    <div class="rectAdventureSection"></div>
                    <p class="aboutProjectBoxElementText">${element}</p>
                </div>
            `).join('');
        });
    });
});


const playerData = [
    {
        id: '04',
        title: 'Healer',
        description: 'Restores health using nanobots.',
        backgroundImage: './assets/class/04b.svg',
        mainImage: './assets/players/04.png'
    },
    {
        id: '05',
        title: 'Ranger',
        description: 'Utilizes cutting-edge high-tech rifles.',
        backgroundImage: './assets/class/05b.svg',
        mainImage: './assets/players/05.png'
    },
    {
        id: '01',
        title: 'Battle Mage',
        description: 'Uses ancient crystals for pyromancy and other forms of magic.',
        backgroundImage: './assets/class/b01.svg',
        mainImage: './assets/players/01.png'
    },
    {
        id: '02',
        title: 'Warrior',
        description: 'Assault class: tank and damage dealer with paired light swords.',
        backgroundImage: './assets/class/02b.svg',
        mainImage: './assets/players/02.png'
    },
    {
        id: '03',
        title: 'Summoner',
        description: 'Uses summoning items to call forth different creatures that deal damage to enemy NPCs.',
        backgroundImage: './assets/class/03b.svg',
        mainImage: './assets/players/03.png'
    },
];

let activeIndex = 2; // Начальный активный индекс
const playerCont = document.querySelector('.playerBoxContainer')! as HTMLElement;

// Отрисовка слайдера
const renderSlider = () => {
    playerCont.innerHTML = ''; // Очищаем контейнер
    const totalItems = playerData.length;
    
    // Начальный индекс для отображения
    const startIndex = (activeIndex - 2 + totalItems) % totalItems; // Начинаем с 2 элементов слева от активного

    for (let i = 0; i < 5; i++) {
        const index = (startIndex + i) % totalItems; // Циклический индекс
        const player = playerData[index];
        const isActive = index === activeIndex;

        const playerBox = document.createElement('div');
        playerBox.className = `playerBox `
         
        if(i === 0 || i === 1) {
            
            playerBox.innerHTML = `
            <div class="playerItems">
                <div class="playerItemsImages">
                    <img class="playerItemsImageBack" src="${player.backgroundImage}" alt="Background image of ${player.title}" />
                    <img class="playerItemsImageMain" src="${player.mainImage}" alt="Main image of ${player.title}" />
                     
                </div>
                <div class="playerBoxRow">
                    <div class="playerBoxCol">
                        <h6 class="playerBoxTitle">${player.title}</h6>
                        <h3 class="playerBoxNum">${player.id}</h3>
                    </div>
                    <p class="playerBoxText">
                        ${player.description}
                    </p>
                    
                </div>
                
            </div>
        `;
        }
        else if(i === 2) {
            playerBox.innerHTML = `
            <div class="playerItems">
                <div class="playerItemsImages">
                    <img class="playerItemsImageBack" src="${player.backgroundImage}" alt="Background image of ${player.title}" />
                    <img class="playerItemsImageMain" src="${player.mainImage}" alt="Main image of ${player.title}" />
                     
                </div>
                <div class="playerBoxRow">
                    <div class="playerBoxCol">
                        <h6 class="playerBoxTitle">${player.title}</h6>
                        <h3 class="playerBoxNum">${player.id}</h3>
                    </div>
                    <p class="playerBoxText">
                        ${player.description}
                    </p>
                    
                </div>
                
            </div>
        `;

        }
        else if (i === 3 || i === 4){
            
            playerBox.innerHTML = `
            <div class="playerItems">
                <div class="playerItemsImages">
                    <img class="playerItemsImageBack" src="${player.backgroundImage}" alt="Background image of ${player.title}" />
                    <img class="playerItemsImageMain" src="${player.mainImage}" alt="Main image of ${player.title}" />
                     

                </div>
                <div class="playerBoxRow">
                    <div class="playerBoxCol">
                        <h6 class="playerBoxTitle">${player.title}</h6>
                        <h3 class="playerBoxNum">${player.id}</h3>
                    </div>
                    <p class="playerBoxText">
                        ${player.description}
                    </p>
                    
                </div>
                
            </div>
        `;
        }
        
        /*   */
        if(isActive){
            playerBox.classList.add('playerBoxActive')
        }

        // При клике изменяем активный элемент
        playerBox.addEventListener('click', () => updateSlider(index));
        playerCont.appendChild(playerBox);
        
    }
        
     
     
    let activeBox = document.querySelector('.playerBoxActive .playerItemsImageBack')! as HTMLElement;
    let playerBox = document.querySelector('.playerBoxContainer')! as HTMLElement;
    let textBox = document.querySelector('.playerBoxActive .playerBoxRow ') ! as HTMLElement;
    /* playerBox.style.height = '300px' */
    console.log(playerBox.clientHeight, textBox.clientHeight,  activeBox.clientHeight)
    // Добавляем imgElement в playerCont
 

};

// Функция обновления слайдера
const updateSlider = (index:number) => {
    if (index !== activeIndex) {
        console.log(index, activeIndex)
        // Обновляем активный индекс
        activeIndex = index;
        renderSlider();
       
    }
     // Перерисовываем слайдер
};

// Изначальное отображение
renderSlider();

 


// Получаем все элементы с классом 'section05Col'
if(window.innerWidth < 980){
    const cols: NodeListOf<HTMLElement> = document.querySelectorAll('.section05Col');

    // Добавляем обработчики событий для каждого элемента
    cols.forEach((col: any) => {
      /* col.addEventListener('mouseenter', () => {
        col.classList.add('section05ColActive');
      });
    
      col.addEventListener('mouseleave', () => {
        col.classList.remove('section05ColActive');
      }); */
      col.addEventListener('click', () => {
        cols.forEach((item: HTMLElement) => {item.classList.remove('section05ColActive')});
        col.classList.add('section05ColActive');
        
         
      });
    });
}
const cols: NodeListOf<HTMLElement> = document.querySelectorAll('.section05Col');
let activeColClass = 0
// Добавляем обработчики событий для каждого элемента
cols.forEach((col: HTMLElement) => {
  col.addEventListener('mouseenter', () => {
    if (col !== col.parentNode?.lastElementChild) {
    cols[activeColClass].classList.remove('section05ColActive');

    col.classList.add('section05ColActive');
    activeColClass = Array.from(cols).indexOf(col);
    }
  });
 
   
});

document.addEventListener("DOMContentLoaded", function() {
    const collectionsButton = document.querySelector('.collectionsButton')!;
    const additionalBlock = document.querySelector('.additionalBlock')! as HTMLElement;
    const collectionsImage = document.querySelector('.collectionsImage')! as HTMLElement;
    
    collectionsButton.addEventListener('mouseenter', function() {
      additionalBlock.style.opacity = '1'; // Показываем блок при наведении
      collectionsImage.style.rotate = '60deg';
      additionalBlock.addEventListener('mouseleave', function(e) {

        additionalBlock.style.opacity = '0'; 
        collectionsImage.style.rotate = '0deg';// Скрываем блок при выводе курсора
        console.log(e.target, 11)
      });
      console.log(22)
    });
  
    
  
    collectionsButton.addEventListener('click', function() {
      // Переключаем видимость блока при клике
      if (additionalBlock.style.opacity === '1') {
        additionalBlock.style.opacity = '0';
        collectionsImage.style.rotate = '0deg';
      } else {
        additionalBlock.style.opacity = '1';
        collectionsImage.style.rotate = '60deg';
      }
    });
    const playerButton = document.querySelector('.playerInfoSection')!;
    const playerBox = document.querySelector('.additionalBlockPlayer')! as HTMLElement;
    
    playerButton.addEventListener('mouseenter', function() {
        playerBox.style.opacity = '1'; // Показываем блок при наведении
    });
  
    playerBox.addEventListener('mouseleave', function() {
        playerBox.style.opacity = '0'; // Скрываем блок при выводе курсора
    });
    function checkMouseDistance(e:any) {
        const rect = playerBox.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
    
        // Проверяем, находится ли мышь более чем в 100 пикселях от playerBox
        const isFarFromBox = (
            mouseX < rect.left - 50 || 
            mouseX > rect.right + 50 || 
            mouseY < rect.top - 50 || 
            mouseY > rect.bottom + 50
        );
    
        // Если мышь далеко от playerBox, устанавливаем opacity = 0
        if (isFarFromBox) {
            playerBox.style.opacity = '0';
        }  
    }
    
    // Добавляем обработчик события mousemove для проверки положения мыши
    document.addEventListener('mousemove', checkMouseDistance);
  
    playerButton.addEventListener('click', function() {
      // Переключаем видимость блока при клике
      if (playerBox.style.opacity === '1') {
        playerBox.style.opacity = '0';
      } else {
        playerBox.style.opacity = '1';
      }
    });


  });

if (window.innerWidth < 1250) {


const burger = document.querySelector('.burger');
const burger_btn = document.querySelector('.burger_btn');
const lineBurger1 = document.querySelector('.burgerLine1');
const lineBurger2 = document.querySelector('.burgerLine2');
const lineBurger3 = document.querySelector('.burgerLine3');
const burger_Back = document.querySelector('.burger_Back');
const burger_menu = document.querySelector('.burger_menu')!;
const burgerMenuContainer = document.querySelector('.burger_menu_container')! as HTMLElement;
const section01NavBox = document.querySelector('.section01NavBox');
/* const section01Nav = document.querySelector('.section01Nav')! as HTMLElement; */
const playerBurger = document.querySelector('.section01NavBoxRight');

let modalOpen = false;
let modalPlace = '';
playerBurger?.addEventListener('click',()=> {
    
    if(!modalOpen){
        toggleBurger()
        modalOpen = !modalOpen
    }
    else {
       if(modalPlace === 'player'){
        toggleBurger()
        removeNavBox_Active()
        modalOpen = !modalOpen
        burgerMenuContainer.innerHTML = '';
        modalPlace = ''
        return
       }
    }
    burgerMenuContainer.innerHTML = playerBurgerText;
    modalPlace = 'player';
    removeBtn_Burger()
    addNavBox_Active()
} );

burger?.addEventListener('click', ()=> {
    
    if(!modalOpen){
        toggleBurger();
        
        modalOpen = !modalOpen
    }
    else {
        if(modalPlace === 'burger'){
            toggleBurger()
            modalOpen = !modalOpen
            burgerMenuContainer.innerHTML = '';
            removeBtn_Burger();
            modalPlace = ''
            return
           }
    }
    modalPlace = 'burger'
    burgerMenuContainer.innerHTML = burgerList.burger
    removeNavBox_Active()
    addBtn_Burger()
} );
burger_menu?.addEventListener('click', (e:any) => {
    if(e.target.classList[0] === 'burger_menu'){
        console.log(e.target.classList[0]);
        toggleBurger(); 
        removeBtn_Burger();
        removeNavBox_Active()
        modalOpen = false;
        
    }
    
    
});

function toggleBurger() {
    document.body.classList.toggle('overflow-hidden'); //menu
    burger?.classList.toggle('burgerActive');
     
    section01NavBox?.classList.toggle('section01NavBox_Active');

    burger_menu.classList.toggle('burger_menu_active');
    
}
function addBtn_Burger(){
    if(!burger_btn?.classList.contains('burger_btn_Active')){
        burger_btn?.classList.add('burger_btn_Active');
        lineBurger1?.classList.add('lineActive');
        lineBurger2?.classList.add('lineActive');
        lineBurger3?.classList.add('lineActive');
        burger_Back?.classList.add('burger_Back_Active');
    }
    
    const burger_box_2 = document.querySelector('.burger_box_2');
    console.log(burger_box_2)
    burger_box_2?.addEventListener('click', (e:any)=> {
    
        if(e.target.className !== 'burger_title' && e.target.className !== 'burger_box_link' && burger_box_2.classList.contains('burger_box_2_Active')) {
            console.log(e.target.className)
            burger_box_2?.classList.remove('burger_box_2_Active')
            return
        }
        if(!burger_box_2.classList.contains('burger_box_2_Active')){
            burger_box_2?.classList.add('burger_box_2_Active')
        }
    });
}
function removeBtn_Burger(){
    if(burger_btn?.classList.contains('burger_btn_Active')){
        burger_btn?.classList.remove('burger_btn_Active');
        lineBurger1?.classList.remove('lineActive');
        lineBurger2?.classList.remove('lineActive');
        lineBurger3?.classList.remove('lineActive');
        burger_Back?.classList.remove('burger_Back_Active');
    }
}
function addNavBox_Active(){
    if(!section01NavBox?.classList.contains('section01NavBox_Active_2')){
        section01NavBox?.classList.add('section01NavBox_Active_2');
    }
    /* section01Nav.style.marginTop = '26px'; */
}
function removeNavBox_Active(){
    if(section01NavBox?.classList.contains('section01NavBox_Active_2')){
        section01NavBox?.classList.remove('section01NavBox_Active_2');
    }
    /* section01Nav.style.marginTop = '40px'; */
}


const burgerList = {
    burger :`
<div class="burger_menu_container">
        <div class="burger_line"></div>
        <div class="burger_box">
            <div class="burger_box_2">
                <h3 class="burger_title">Collections 
                <svg class="burger_title_svg" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12L13.9282 0H0.0717969L7 12Z" fill="#121212"/>
                    </svg>
                </h3>
                <div class="burger_box_links">
                    <p class="burger_box_link">Skins</p>
                    <p class="burger_box_link">Weapons</p>
                    <p class="burger_box_link">Lands</p>
                </div>
                
            </div>
            <h3 class="burger_title">White paper</h3>
            <h3 class="burger_title">Blog</h3>
        </div>
        <div class="burger_menu_btn_box">
            <button class="burger_menu_btn">Play Demo</button>
            <img  class="burger_menu_btn_img" src="./assets/burger/svgB.svg" alt="icon"/>
                <button class="burger_menu_btn_img_mob"></button>
             
        </div> 
    </div>
    `}


}
/* const body = document.body;
body.addEventListener('mouseenter', () => {
    body.classList.add('custom-scroll');
});

body.addEventListener('mouseleave', () => {
    body.classList.remove('custom-scroll');
}); */
 
scrollTriggerTitle()
scrollText()



