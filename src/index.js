import _ from 'lodash';
import Images from '../images';  //figure out importing images from a folder

console.log('whaaat?');

var Home;
var Menu;
var Contact;
var Greeting;
var Description;
var openingImage;


function addButton(){
    const button = document.createElement('button');
    return button;
}


Home = addButton();
Home.innerHTML = (['Home']);
document.body.appendChild(Home);

Menu = addButton();
Menu.innerHTML = (['Menu']);
document.body.appendChild(Menu);

Contact = addButton();
Contact.innerHTML = (['Contact']);
document.body.appendChild(Contact);



function addHeader1(){
    const h1 = document.createElement('h1');
    return h1;
}

function addHeader3(){
    const h2 = document.createElement('h3');
    return h2;
}

Greeting = addHeader1();
Greeting.innerHTML = (['Mademoiselle Macaron']);
document.body.appendChild(Greeting);

Description = addHeader3();
Description.innerHTML = (['Authentic French bakery ~ made with love']);
document.body.appendChild(Description);


function addImage(){
    const img = document.createElement('image');
    return img;
}

openingImage = addImage();
openingImage.src = (['../images/macarons.jpg']);
document.body.appendChild(openingImage);