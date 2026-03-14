particlesJS("particles-js", {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#00aaff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.7
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00aaff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      repulse: {
        distance: 120
      }
    }
  },
  retina_detect: true
});



const words = [
"Just an ordinary developer",
"GYM Enthusiast",
"Backend Learner",
"Merchant worker",
"Frontend Enthusiast",
"Young creator"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){

currentWord = words[i];

if(isDeleting){
j--;
}else{
j++;
}

document.getElementById("typing").textContent = currentWord.substring(0,j);

if(!isDeleting && j === currentWord.length){
isDeleting = true;
setTimeout(type,1200);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i++;
if(i === words.length){
i = 0;
}
}

setTimeout(type,isDeleting ? 40 : 80);

}

type();

