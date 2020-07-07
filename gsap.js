// Selector

// Services
let servicesBlock = document.getElementById('services-id');

let allSElement = servicesBlock.getElementsByClassName('services-block__elem'); // All services Element


// About Us
let aboutBlock = document.getElementById('about-us-id');

let allAElement = aboutBlock.getElementsByClassName('about-us__elem'); // All services Element



// Project Us
let projectBlock = document.getElementById('projects-id');
let pElem1 = projectBlock.getElementsByClassName('elem__1');
let pElem2 = projectBlock.getElementsByClassName('elem__2');
let pElem3 = projectBlock.getElementsByClassName('elem__3');


// Team
let teamBlock = document.getElementById('team-id');

let allTElement = teamBlock.getElementsByClassName('team-block-outer'); // All services Element


// News

let newsBlock = document.getElementById('news-id');
let nElem1 = newsBlock.getElementsByClassName('elem__1');
let nElem2 = newsBlock.getElementsByClassName('elem__2');



gsap.registerPlugin(ScrollTrigger);

// Services 

gsap.from(allSElement, {
    opacity: 0,
    duration: .5,
    y: 1000,
    ease: 'easeOut',
    stagger: {
        each: .1
    },
    scrollTrigger: {
        trigger: servicesBlock,
        start: 'top 80%',
        end: 'bottom 25%'

    }
});




// About us

gsap.from(allAElement, {
    opacity: 0,
    duration: .8,
    y: 1000,
    ease: 'easeOut',
    stagger: {
        each: .1
    },
    scrollTrigger: {
        trigger: aboutBlock,
        start: 'top 80%',
        end: 'bottom 25%'

    }
});


// Projects 

gsap.from(pElem1, {
    opacity: 0,
    duration: 1,
    x: -1000,
    ease: 'easeOut',
    scrollTrigger: {
        trigger: projectBlock,
        start: 'top 80%',
        end: 'bottom 25%'

    }
});

gsap.from(pElem2, {
    opacity: 0,
    duration: .8,
    y: 1000,
    ease: 'easeOut',
    scrollTrigger: {
        trigger: projectBlock,
        start: 'top 80%',
        end: 'bottom 25%'

    }
});

gsap.from(pElem3, {
    opacity: 0,
    duration: 1,
    x: 1000,
    ease: 'easeOut',

    scrollTrigger: {
        trigger: projectBlock,
        start: 'top 80%',
        end: 'bottom 25%'

    }
});



// Team


gsap.from(allTElement, {
    opacity: 0,
    duration: .5,
    y: 1000,
    ease: 'easeOut',
    stagger: {
        each: .1
    },
    scrollTrigger: {
        trigger: teamBlock,
        start: 'top 80%',
        end: 'bottom 25%'

    }
});


// News  

gsap.from(nElem1, {

    duration: 1,
    y: 1000,
    ease: 'easeOut',
    scrollTrigger: {
        trigger: newsBlock,
        start: 'top 80%',
        end: 'bottom 25%'

    }
});

gsap.from(nElem2, {

    duration: 1,
    x: 1000,
    ease: 'easeOut',
    scrollTrigger: {
        trigger: newsBlock,
        start: 'top 80%',
        end: 'bottom 25%'

    }
});