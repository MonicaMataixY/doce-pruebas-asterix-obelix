
//capturo las cuerdas-notas

let doNote = document.querySelector('#do');
let reNote = document.querySelector('#re');
let faNote = document.querySelector('#fa');
let solNote = document.querySelector('#sol');
let laNote = document.querySelector('#la');

//capturo los audios
let audioDo = document.querySelector('.audio_do');
let audioRe = document.querySelector('.audio_re');
let audioFa = document.querySelector('.audio_fa');
let audioSol = document.querySelector('.audio_sol');
let audioLa = document.querySelector('.audio_la');


//le digo que por cada cuerda-nota me cargue su audio
doNote.addEventListener("mouseover", () =>{
    audioDo.setAttribute("src", "notas/do.mp3")
    audioDo.play()
})

reNote.addEventListener("mouseover", () =>{
    audioRe.setAttribute("src", "notas/re.mp3")
    audioRe.play()
})
faNote.addEventListener("mouseover", () =>{
    audioFa.setAttribute("src", "notas/fa.mp3")
    audioFa.play()
})
solNote.addEventListener("mouseover", () =>{
    audioSol.setAttribute("src", "notas/sol.mp3")
    audioSol.play()
})
laNote.addEventListener("mouseover", () =>{
    audioLa.setAttribute("src", "notas/la.mp3")
    audioLa.play()
})