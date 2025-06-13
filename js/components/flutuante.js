const imageInstagram = document.getElementById('flutuante_instagram');
const imageLinkedin = document.getElementById('flutuante_linkedin');
let tempoInstagram = 0;
let tempoLinkedin = 0;

function fluctuation(){
    const deslocationInstagram = Math.sin(tempoInstagram) * 10;
    imageInstagram.style.transform = `translatey(${deslocationInstagram}px)`;

    const deslocationLinkedin = Math.sin(tempoLinkedin) * 15;
    imageLinkedin.style.transform = `translatey(${deslocationLinkedin}px)`;

    tempoInstagram += 0.05;
    tempoLinkedin += 0.03;
    requestAnimationFrame(fluctuation); 
}

fluctuation();