var myArray = ["- Welcome!", "- Välkommen!", "- Bienvenido!", "- Willkommen!", "- Bonjour!"];
var rand = Math.floor(Math.random() * myArray.length);

function showquote(){
    document.getElementById('p1').textContent = myArray[rand];
}
showquote();
