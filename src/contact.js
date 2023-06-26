function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.innerHTML = '🕿<br>Tel: 856-478-8176'

    const address = document.createElement('p');
    address.innerHTML = '🫖<br>La Mademoiselle Macaron<br> 41 S Main Street<br> Mullica Hill, NJ 08062'

    contact.appendChild(phoneNumber);
    contact.appendChild(address);

    return contact;
}

function loadContact(){
    const main = document.getElementById('main');
    main.textContent = ''
    main.appendChild(createContact());
}

export default loadContact;