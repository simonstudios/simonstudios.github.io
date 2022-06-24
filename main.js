const businessList = document.querySelector('ul');

fetch('https://richmond-card-web-server.herokuapp.com/businesses')
    .then(businesses => businesses.json())
    .then(businesses => {
        for (const business of businesses) {
            console.log(business);
            const listItem = document.createElement('li');
            listItem.textContent = business.name;
            businessList.appendChild(listItem);
        }
    })
    .catch(error => console.log(error));