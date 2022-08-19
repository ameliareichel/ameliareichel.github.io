let button = document.getElementById('get-data');

let div = document.createElement('div');
divAtt = document.createAttribute('id');
divAtt.value = 'dane-programisty';
div.setAttributeNode(divAtt);
document.body.appendChild(div);

const getData = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(response => response.json())
        .then((data) => {

            let nameElement = document.createElement('p');
            let lastNameElement = document.createElement('p');
            let occupationElement = document.createElement('p');
            let companyElement = document.createElement('p');

            nameElement.innerText = `- Name: ${data.imie}`;
            lastNameElement.innerText = `- Last name: ${data.nazwisko}`;
            occupationElement.innerText = `- Occupation: ${data.zawod}`;
            companyElement.innerText = `- Company name: ${data.firma}`;

            div.appendChild(nameElement);
            div.appendChild(lastNameElement);
            div.appendChild(occupationElement);
            div.appendChild(companyElement);
        });
}

button.addEventListener('click', getData);