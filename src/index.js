import _ from 'lodash';
import './style.css';
import Macarons from './macarons2.jpg';  


console.log('whaaat?');

var Home;
var Menu;
var Contact;
var Greeting;
var Description;
var openingImage;
var Hours;
var Location;
const content = document.getElementById('content');


function addButton(){
    const button = document.createElement('button');
    return button;
}


Home = addButton();
Home.innerHTML = (['Home']);
content.appendChild(Home);

Menu = addButton();
Menu.innerHTML = (['Menu']);
content.appendChild(Menu);

Contact = addButton();
Contact.innerHTML = (['Contact']);
content.appendChild(Contact);



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
content.appendChild(Greeting);

Description = addHeader3();
Description.innerHTML = (['Authentic French bakery ~ made with love']);
content.appendChild(Description);


openingImage = new Image();
openingImage.src = Macarons;
content.appendChild(openingImage);

function addP(){
    const p = document.createElement('p');
    return p;
}

Hours = addP();
Hours.innerHTML = (['Hours<br>Thursday-Saturday<br>11am-5pm Sundays-Private Events']);
content.appendChild(Hours);

Location = addP();
Location.innerHTML = (['Location<br>La Mademoiselle Macaron<br>41 S Main Stree<br>Mullica Hill, NJ 08062']);
content.appendChild(Location);