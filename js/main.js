let careerHeader = document.querySelector('.career-header');
let careerDescription = document.querySelector("#career > p");
let aboutHeader = document.querySelector("#about > h2");
let aboutDescription = document.querySelector("#about > div > p");

let gymH = document.querySelector(".gym-header");
let codingH = document.querySelector(".coding-header");
let artH = document.querySelector(".art-header");

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

const showG = () => {
    gymPic.classList.toggle('show');
};

const showGT = () => {
    githubPic.classList.toggle('show');
};

const showA = () => {
    artPic.classList.toggle('show');
};

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

careerHeader.addEventListener('mouseover', showDesc);
careerSection.addEventListener('wheel', disappear);
gymH.addEventListener('mouseover', showG);
codingH.addEventListener('mouseover', showGT);
artH.addEventListener('mouseover', showA);
window.addEventListener('scroll', showButton);
scrolltopButton.addEventListener('click', scrollUp);