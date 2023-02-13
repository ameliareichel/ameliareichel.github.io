let careerHeader = document.querySelector('.career-header');
let careerDescription = document.querySelector("#career > p");
let aboutHeader = document.querySelector("#about > h2");
let aboutDescription = document.querySelector("#about > div > p");

let gymPic = document.querySelector("#hobbies > div > img.gym-pic");
let githubPic = document.querySelector("#hobbies > div > img.github-pic");
let artPic = document.querySelector("#hobbies > div > img.art-pic");
let projectH = document.querySelector(".project-header");

let scrolltopButton = document.querySelector(".scroll-top-button");

const aboutSection = document.querySelector("#about");
const careerSection = document.querySelector("#career");

const showDesc = () => {
    careerDescription.classList.add('unfolded');
};

const disappear = () => {
    careerSection.classList.add('disappeared');
};

// const showG = () => {
//     gymPic.classList.toggle('show');
// };

// const showGT = () => {
//     githubPic.classList.toggle('show');
// };

// const showA = () => {
//     artPic.classList.toggle('show');
// };

const showButton = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        scrolltopButton.style.display = "block";
    }
    else {
        scrolltopButton.style.display = "none";
    };
};

const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

//CUSTOM CURSOR:

const cursorLED = document.querySelector('.cursor');

const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorLED.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', moveCursor);

//CURSOR FOLLOWING LIGHT:

let lightSpot = document.querySelector('.light-spot');
const onMouseMove = (e) => {
    lightSpot.style.left = e.clientX + 'px';
    lightSpot.style.top = e.clientY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

window.addEventListener('scroll', showButton);
scrolltopButton.addEventListener('click', scrollUp);
careerHeader.addEventListener('mouseover', showDesc);
careerSection.addEventListener('wheel', disappear);