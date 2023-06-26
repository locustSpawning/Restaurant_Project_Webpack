
function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    const cookieImage = document.createElement('img');
    cookieImage.src = 'images2/macarons.jpg';
    cookieImage.alt = 'Macarons';

    home.appendChild(createParagraph('Authenic French bakery ~ made with care'));
    home.appendChild(cookieImage);
    home.appendChild(createParagraph('Hours<br>Thursday-Saturday<br>11am-5pm<br>Sundays-Private Events'));
    home.appendChild(createParagraph('Location<br>La Mademoiselle Macaron<br>41 S Main Street<br>Mullica Hill, NJ 08062'));

    return home;
}

function createParagraph(text){
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    return paragraph;
}

function loadHome(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;