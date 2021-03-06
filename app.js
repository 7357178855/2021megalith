
                       // starter animation started
const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const tl = new TimelineMax();
tl.fromTo(hero, 1, { height: "0%"}, { height: "80%", ease: Power2.easeInOut })
.fromTo(
    hero,
    1.2,
    { width:"100%"},
    { width: "80%", ease: Power2.easeInOut}
)
.fromTo(
    slider,
    1.2, 
    { x: "-100%" }, 
    { x: "0%", ease: Power2.easeInOut },     
    
    "-=1.2")



                          //video animation started
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement:section,
  triggerHook: 0.5
})
  .addIndicators()
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 150;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);
  video.currentTime = scrollpos;
}, 33.3);



                      //signUP signIn button functions
let choosesignup = function() {
    let getcontentsignup = document.querySelector(".Sign-up-box");
    let getcontentsignin = document.querySelector(".Sign-in-box");

    getcontentsignup.style.visibility="visible";
    getcontentsignup.style.height="auto";
    getcontentsignin.style.visibility="hidden"
    getcontentsignin.style.height="0";
  }
  
let choosesignin = function() {
  let getcontentsignup = document.querySelector(".Sign-up-box");
  let getcontentsignin = document.querySelector(".Sign-in-box");
  let getcontentregoption2= document.querySelector(".reg-option-2");

  getcontentsignup.style.visibility="hidden";
  getcontentsignup.style.height="0";
  getcontentsignin.style.visibility="visible"
  getcontentsignin.style.height="auto";
  getcontentsignin.style.transform="translatey(-10px)";
}