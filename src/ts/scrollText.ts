 
export function scrollText() {
    const heading1 = document.querySelector('.section02Title')!;
    const heading2 = document.querySelector('.span2Section')!;

    const text1 = heading1.innerHTML;  // Note: use innerHTML to retain span elements
    const text2 = heading2.innerHTML;  // Same as above

    heading1.innerHTML = '';
    heading2.innerHTML = '';

    const createTextAnimation = (heading: Element, text: string) => {
        // Create a temporary container to wrap the text content.
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = text;

        tempContainer.childNodes.forEach((node:any) => {
            if (node.nodeType === Node.TEXT_NODE) {
                // Split and create spans for text
                node.textContent!.split('').forEach((letter: string | null) => {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    span.style.opacity = '0';
                    heading.appendChild(span);
                });
            } else if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('spanBack')) {
                // Wrap spanBack in a span and add to the heading
                const backSpan = document.createElement('span');
                backSpan.classList.add('spanBack');
                backSpan.textContent = node.textContent;
                backSpan.style.opacity = '0';
                heading.appendChild(backSpan);
            } else {
                // Append other elements directly
                heading.appendChild(node.cloneNode(true));
            }
        });

        ScrollTrigger.create({
            trigger: heading,
            start: "top 80%",
            end: "200 70%",
            /* markers: true, */

            onUpdate: (self) => {
                const progress = self.progress;
                const totalSpans = heading.querySelectorAll('span').length;
                const visibleCount = Math.floor(progress * totalSpans);
                
                heading.querySelectorAll('span').forEach((span: gsap.TweenTarget, index: number) => {
                    gsap.to(span, {
                        opacity: index < visibleCount ? 1 : 0,
                        duration: 0.3,
                        ease: "power1.out",
                        overwrite: true
                    });
                });
            },

            onLeaveBack: (self) => {
                const progress = self.progress;
                const totalSpans = heading.querySelectorAll('span').length;
                const visibleCount = Math.floor(progress * totalSpans);

                heading.querySelectorAll('span').forEach((span: gsap.TweenTarget, index: number) => {
                    gsap.to(span, {
                        opacity: index >= totalSpans - visibleCount ? 1 : 0,
                        duration: 0.2,
                        ease: "power1.out",
                        overwrite: true
                    });
                });
            }
        });
    }

    createTextAnimation(heading1, text1);
    createTextAnimation(heading2, text2);
}
 