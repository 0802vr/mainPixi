
export function scrollTriggerTitle (){
//about the project
const heading = document.querySelector('.aboutProjectHeading')!;
const text = heading.textContent!;
heading.innerHTML = ''; // Очищаем содержимое

// Создаем элементы span для каждого символа, включая пробелы
text.split('').forEach((letter) => {
    const span = document.createElement('span');
    span.textContent = letter;
     
    span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
    heading.appendChild(span);
});

ScrollTrigger.create({
    trigger: heading,
    start: "-200 60%",
    end: "200 45%",
    /* markers: true, */ // Уберите это в продакшене

    onUpdate: (self) => {
        const progress = self.progress;
        const totalSpans = heading.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index < visibleCount ? 1 : 0,
                duration: 0.3,
                ease: "power1.out"
            });
        });
    },

    onLeaveBack: (self) => {
        const progress = self.progress;
        const totalSpans = heading.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность обратно в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index >= totalSpans - visibleCount ? 1 : 0,
                duration: 0.2,
                ease: "power1.out"
            });
        });
    }
});
//Unique classes
const heading2 = document.querySelector('.section03_box_title')!;
const text2 = heading2.textContent!;
heading2.innerHTML = ''; // Очищаем содержимое

// Создаем элементы span для каждого символа, включая пробелы
text2.split('').forEach((letter) => {
    const span = document.createElement('span');
    span.textContent = letter;
     
    span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
    heading2.appendChild(span);
});

ScrollTrigger.create({
    trigger: heading2,
    start: "-100 60%",
    end: "100 45%",
    /* markers: true, */ // Уберите это в продакшене

    onUpdate: (self) => {
        const progress = self.progress;
        const totalSpans = heading2.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading2.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index < visibleCount ? 1 : 0,
                duration: 0.3,
                ease: "power1.out"
            });
        });
    },

    onLeaveBack: (self) => {
        const progress = self.progress;
        const totalSpans = heading2.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading2.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность обратно в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index >= totalSpans - visibleCount ? 1 : 0,
                duration: 0.2,
                ease: "power1.out"
            });
        });
    }
});
//section04Title
const heading3 = document.querySelector('.section04Title')!;
const text3 = heading3.textContent!;
heading3.innerHTML = ''; // Очищаем содержимое

// Создаем элементы span для каждого символа, включая пробелы
text3.split('').forEach((letter) => {
    const span = document.createElement('span');
    span.textContent = letter;
     
    span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
    heading3.appendChild(span);
});

ScrollTrigger.create({
    trigger: heading3,
    start: "-100 60%",
    end: "100 45%",
    /* markers: true, */ // Уберите это в продакшене

    onUpdate: (self) => {
        const progress = self.progress;
        const totalSpans = heading3.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading3.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index < visibleCount ? 1 : 0,
                duration: 0.3,
                ease: "power1.out"
            });
        });
    },

    onLeaveBack: (self) => {
        const progress = self.progress;
        const totalSpans = heading3.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading3.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность обратно в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index >= totalSpans - visibleCount ? 1 : 0,
                duration: 0.2,
                ease: "power1.out"
            });
        });
    }
});
//section05Title 
const heading4 = document.querySelector('.section05Title')!;
const text4 = heading4.textContent!;
heading4.innerHTML = ''; // Очищаем содержимое

// Создаем элементы span для каждого символа, включая пробелы
text4.split('').forEach((letter) => {
    const span = document.createElement('span');
    span.textContent = letter;
     
    span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
    heading4.appendChild(span);
});

ScrollTrigger.create({
    trigger: heading4,
    start: "-100 60%",
    end: "100 45%",
    /* markers: true, */ // Уберите это в продакшене

    onUpdate: (self) => {
        const progress = self.progress;
        const totalSpans = heading4.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading4.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index < visibleCount ? 1 : 0,
                duration: 0.3,
                ease: "power1.out"
            });
        });
    },

    onLeaveBack: (self) => {
        const progress = self.progress;
        const totalSpans = heading4.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading4.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность обратно в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index >= totalSpans - visibleCount ? 1 : 0,
                duration: 0.2,
                ease: "power1.out"
            });
        });
    }
});
//section06BoxFirstTitle
const heading6 = document.querySelector('.section06BoxFirstTitle')!;
const text6 = heading6.textContent!;
heading6.innerHTML = ''; // Очищаем содержимое

// Создаем элементы span для каждого символа, включая пробелы
text6.split('').forEach((letter) => {
    const span = document.createElement('span');
    span.textContent = letter;
     
    span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
    heading6.appendChild(span);
});

ScrollTrigger.create({
    trigger: heading6,
    start: "-100 60%",
    end: "100 45%",
    /* markers: true, */ // Уберите это в продакшене

    onUpdate: (self) => {
        const progress = self.progress;
        const totalSpans = heading6.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading6.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index < visibleCount ? 1 : 0,
                duration: 0.3,
                ease: "power1.out"
            });
        });
    },

    onLeaveBack: (self) => {
        const progress = self.progress;
        const totalSpans = heading6.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading6.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность обратно в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index >= totalSpans - visibleCount ? 1 : 0,
                duration: 0.2,
                ease: "power1.out"
            });
        });
    }
});
//section08Title
const heading8 = document.querySelector('.section08Title')!;
const text8 = heading8.textContent!;
heading8.innerHTML = ''; // Очищаем содержимое

// Создаем элементы span для каждого символа, включая пробелы
text8.split('').forEach((letter) => {
    const span = document.createElement('span');
    span.textContent = letter;
     
    span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
    heading8.appendChild(span);
});

ScrollTrigger.create({
    trigger: heading8,
    start: "-100 60%",
    end: "100 45%",
    /* markers: true, */ // Уберите это в продакшене

    onUpdate: (self) => {
        const progress = self.progress;
        const totalSpans = heading8.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading8.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index < visibleCount ? 1 : 0,
                duration: 0.3,
                ease: "power1.out"
            });
        });
    },

    onLeaveBack: (self) => {
        const progress = self.progress;
        const totalSpans = heading8.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading8.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность обратно в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index >= totalSpans - visibleCount ? 1 : 0,
                duration: 0.2,
                ease: "power1.out"
            });
        });
    }
});
//section09Title
const heading9 = document.querySelector('.section09Title')!;
const text9 = heading9.textContent!;
heading9.innerHTML = ''; // Очищаем содержимое

// Создаем элементы span для каждого символа, включая пробелы
text9.split('').forEach((letter) => {
    const span = document.createElement('span');
    span.textContent = letter;
     
    span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
    heading9.appendChild(span);
});

ScrollTrigger.create({
    trigger: heading9,
    start: "-100 60%",
    end: "100 45%",
    /* markers: true, */ // Уберите это в продакшене

    onUpdate: (self) => {
        const progress = self.progress;
        const totalSpans = heading9.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading9.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index < visibleCount ? 1 : 0,
                duration: 0.3,
                ease: "power1.out"
            });
        });
    },

    onLeaveBack: (self) => {
        const progress = self.progress;
        const totalSpans = heading9.querySelectorAll('span').length;
        const visibleCount = Math.floor(progress * totalSpans); // Количество видимых букв

        heading9.querySelectorAll('span').forEach((span, index) => {
            // Устанавливаем непрозрачность обратно в зависимости от индекса и прогресса
            gsap.to(span, {
                opacity: index >= totalSpans - visibleCount ? 1 : 0,
                duration: 0.2,
                ease: "power1.out"
            });
        });
    }
});

 // Находим заголовки
const headings = document.querySelectorAll('.section01MainBoxTitle .section01MainTitle') as any;

// Функция для анимации заголовка
const animateHeading = (heading: Element, delay: number) => {
    const text = heading.textContent;
    heading.innerHTML = ''; // Очищаем содержимое

    // Создаем элементы span для каждого символа, включая пробелы
    text?.split('').forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;

        span.style.opacity = '0'; // Устанавливаем начальную прозрачность на 0
        heading.appendChild(span);
    });

    // Анимация с помощью gsap
    const spans = heading.querySelectorAll('span');
    spans.forEach((span, index) => {
        gsap.to(span, {
            opacity: 1,
            duration: 0.4,
            delay: index * 0.1 + delay, // задержка для каждой буквы
            ease: "power1.out"
        });
    });
};

// Анимация заголовков при загрузке страницы
window.addEventListener('load', () => {
    animateHeading(headings[0], 0); // Анимируем "peexi" сначала
    animateHeading(headings[1], headings[0].textContent.length * 0.1); // Затем "punk" с учетом задержки
});

}
