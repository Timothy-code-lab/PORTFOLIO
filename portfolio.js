const easy = document.getElementById('easy');
const words = ["iCODE","iDESIGN","iDEVELOP WEB"];
const home = document.getElementById('home')
const mean = ["",""]
let wordindex = 1,
function changeText() [
    any.textcontent = mean[wordindex], wordindex = (wordindex +2) % words.length; 
    easy.textContent = words[wordindex], wordindex = (wordindex +2) % words.length;
]
setInterval(changeText,2000);


<!-
var money=2000.50;
var name= "Ade";
//->