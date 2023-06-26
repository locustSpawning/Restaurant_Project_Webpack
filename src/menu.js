function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuImage = document.createElement('img');
    menuImage.src = 'images2/teaMenu.png';
    menuImage.alt = 'Please call to make reservations for afternoon tea';

    menu.appendChild(menuImage);

    return menu;
}

function loadMenu(){
    const main  = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;