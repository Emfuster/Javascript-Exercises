
const text ='gracioso-pero-no-gracioso-de-risa-gracioso-de-raro'

splitText = text.split("-").map(splitText => splitText[0].toUpperCase() + splitText.substring(1, splitText.length)).join(" ");
console.log(splitText);

let newText = "";
let nextToUpper = true;
for (let index = 0; index < text.length; index++) {
    const char = text[index];
    
    if(nextToUpper){
        const copyText = char.toUpperCase();
        newText += copyText;
        nextToUpper = false;
    } else if (char === "-"){
        nextToUpper = true;
        newText += " ";
    } else {
        newText += char;
    }
}

console.log(newText)
