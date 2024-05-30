import Emoji from '../img/thumb-up.png';

export default function printEmoji(arg) {

    // Add the image to our existing div.
    const myEmoji = new Image();
    myEmoji.src = Emoji;
    myEmoji.setAttribute('style','width:25%;height:30%;padding:5%');
    
    const parentElement = arg.parentNode;
    parentElement.appendChild(myEmoji);  

}