// код для 3-х секций светофора
const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');

function makeGreen(){
    trafficLightGreen.style.background = ('green');
    trafficLightYellow.style.background = ('');
    trafficLightRed.style.background = ('');
}

function makeYellow(){
    trafficLightGreen.style.background = ('');
    trafficLightYellow.style.background = ('yellow');
    trafficLightRed.style.background = ('');
}

function makeRed(){
    trafficLightGreen.style.background = ('');
    trafficLightYellow.style.background = ('');
    trafficLightRed.style.background = ('red');
}

function flashOneLight() {
    let isGreen = trafficLightGreen.style.background;
    let isYellow = trafficLightYellow.style.background;
    let isRed = trafficLightRed.style.background;
    if(isGreen === '' && isYellow === '' && isRed === ''||isRed === 'red'){
        makeGreen();
    } else if(isGreen === 'green') {
        makeYellow();
    } else if(isYellow === 'yellow') {
        makeRed();
    }
}

function setAllOff() {
    trafficLightGreen.style.background = ('');
    trafficLightYellow.style.background = ('');
    trafficLightRed.style.background = ('');
}

document.getElementById('set').addEventListener('click', () => {
    flashOneLight();    
})

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		setAllOff();
	}
});


// оригинальный код для одной секции светофора
/* function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}
function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}
function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen); */