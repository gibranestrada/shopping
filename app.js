
//fetch api data from mocky
//https://www.mocky.io/v2/5ad5471a3200006600202a94 works on github
//https://www.mocky.io/v2/5acfc4df3100006a004eaab4
let phones;
    fetch('https://www.mocky.io/v2/5ad642b52e00005300c93aef')
    .then(response => {
        return response.json();
    })
    .then(phoneData => {
        phones = phoneData.phones;

        //load functions
        loadFunction();
        loadEventListeners();
        infoCard();
        loadEventListenersCart();
    })
    .catch(function(error){
        console.log(error);
        alert("Refresh the page");
    });

//variables
    const phoneCard = document.querySelector('#card');
    let phoneArray,
        infoButton,
        cardsButton,
        deleteButton;

//load listeners
function loadEventListeners(){
    infoButton = document.querySelectorAll(`.more-info`);
   }
//event listener
function infoCard(){
    infoButton.forEach(aClass => aClass.addEventListener('click', showInfoButton));
    }
//Map through phones(api data) save it to phoneArray
function loadFunction(){
    phoneArray = phones.map((listing, index) => {
        return listing =
        `<div class='card' key="${index}">
            <img src="${listing.image}" class='phone-image' style="width: 100%"><hr>
            <div class='info-card'>
                <h4>${listing.name} <span class='price'>$${listing.price}</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul..</p>
                <a href='#' class='add-to-cart' data-id='${listing.id}'>Add to Cart</a>
                <div class= 'visible-card'>
                <ul>
                    <li class = 'submenu-card'>
                        <a class='more-info' id='data-${listing.id}' data-id='${listing.id}'
                        >More info<div class='test' id='test${listing.id}'></div></a>

                    </li>
                </ul>
                </div>
            </div>
        </div><br/>
    `
    }).join("")
    //add phoneArray(mapped api data) to phoneCard
    phoneCard.innerHTML = phoneArray;
}

//run through the api data again for the hidden card
function showInfoButton(event){
    event.preventDefault();
    if(event.target.firstElementChild === null){
        return '';
    }else{
      cardsButton = document.getElementById(event.target.firstElementChild.id);
    }

    //create cardDesc(div) and add a class
    let cardDesc = document.createElement('div');
    cardDesc.classList.add('hello');
    phoneArray = phones.map((listing,id)=> {
        return listing =
        `<div class='extra-info' id='data-${listing.id}'>
        <img src='${listing.image}' id='card-image' style='width:150px; height:150px'>
        <a href='javascript:;' class='close-button' id='close-button'>X</a>
            <table>
                <thead>
                    <tr>
                        <th>CPU: ${listing.cpu}</th>
                        <th>CAMERA: ${listing.camera}</th>
                        <th>SIZE: ${listing.size}</th>
                        <th>WEIGHT: ${listing.weight}</th>
                        <th>DISPLAY: ${listing.display}</th>
                        <th>BATTERY: ${listing.battery}</th>
                        <th>MEMORY: ${listing.memory}</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table><br/>
            <span style='color: royalblue'>${listing.name} <span><b>$${listing.price}</b></span><br />
            <span>${listing.description}</span>
        </div>
        `
    });

    //Match event id with phoneArray id
    if(event.target.id == 'data-1' &&  phoneArray[0].includes('data-1') == true){
        phoneArray = phoneArray[0];
    }else if (event.target.id == 'data-2' &&  phoneArray[1].includes('data-2') == true){
        phoneArray = phoneArray[1]
    }else if (event.target.id == 'data-3' &&  phoneArray[2].includes('data-3') == true){
        phoneArray = phoneArray[2]
    }else if (event.target.id == 'data-4' &&  phoneArray[3].includes('data-4') == true){
        phoneArray = phoneArray[3]
    }else if (event.target.id == 'data-5' &&  phoneArray[4].includes('data-5') == true){
        phoneArray = phoneArray[4]
    }else  if(event.target.id == 'data-6' &&  phoneArray[5].includes('data-6') == true){
        phoneArray = phoneArray[5]
    }

    //add phoneArray to cardDesc
    cardDesc.insertAdjacentHTML('beforeend', phoneArray);
    //if cardsButton is true appendChild if false don't show anything
    if(cardsButton) {
        cardsButton.appendChild(cardDesc);
    }
    buttonDeleter();
}
//adds click event listener to all .close-button
function buttonDeleter(){
    deleteButton = document.querySelectorAll('.close-button');
    deleteButton.forEach(deleteBtn => deleteBtn.addEventListener('click', deleteCard));
}
//deletes all classes named .hello
function deleteCard(e){
    e.preventDefault;
    let removeElement = e.target.parentElement.parentElement.parentElement;
    //removeElement.firstElementChild.remove();
    while(removeElement.firstElementChild) {
     removeElement.removeChild(removeElement.firstElementChild);
    }
  }

//listeners
function loadEventListenersCart(){
  //add to shopping cart menu and localStorage
  //variables
  let phoneBtn = document.querySelectorAll('.add-to-cart'),
    clearCartBtn = document.querySelector('#clear-cart');
    shoppingCartContent = document.querySelector('#cart-content tbody'),

    shoppingCard();
  //the the add to cart button is clicked
  function shoppingCard(){
      phoneBtn.forEach(aClass => aClass.addEventListener('click', buyPhone));
      }
  //phoneBtn.addEventListener('click', buyPhone);

//when the remove button is clicked
  shoppingCartContent.addEventListener('click', removePhone);

  //when the clearcart button is clicked
  clearCartBtn.addEventListener('click', clearCart);

  //Document ready
  getFromLocalStorage();
}

//functions
function buyPhone(e){
  e.preventDefault();
  //find phone that was added by using delegation
  if(e.target.classList.contains('add-to-cart')){
    const cellPhone = e.target.parentElement.parentElement;

    //read the values
    getPhoneInfo(cellPhone);
    }
  }

//reads html information of the selected phones
function getPhoneInfo(cellPhone){
  //create object with phone data
  const phoneInfo = {
    image: cellPhone.querySelector('img').src,
    title: cellPhone.querySelector('h4').textContent,
    price: cellPhone.querySelector('h4 span').textContent,
    id: cellPhone.querySelector('a').getAttribute('data-id')
  }

  //insert into the shopping Cart
  addIntoCart(phoneInfo);
}

function addIntoCart(cellPhone) {
  const row = document.createElement('tr');

  //build the template
  row.innerHTML = `
        <tr>
            <td>
                <img src="${cellPhone.image}" width=100>
            </td>
            <td>${cellPhone.title}</td>
            <td>${cellPhone.price}</td>
            <td>
                <a href="#" class='remove' data-id="${cellPhone.id}">X</a>
            </td>
        </tr>
  `;
  //add into the shopping Cart
  shoppingCartContent.appendChild(row);

  //add phone into storage
  saveIntoStorage(cellPhone);
}

//add the phone into local storage

function saveIntoStorage(cellPhone) {
  let phonesStorage = getPhonesFromStorage();

  //add the phone into the array
  phonesStorage.push(cellPhone);

  //convert JSON into String
  localStorage.setItem('phones', JSON.stringify(phonesStorage));
}


//get the contents from the saved storage
function getPhonesFromStorage() {
let phonesStorage;
  //if something exist on storage then we get the value, otherwise create an empty array
  if(localStorage.getItem('phones') === null) {
    phonesStorage = [];
  }else {
    phonesStorage = JSON.parse(localStorage.getItem('phones'));
  }
  return phonesStorage;
}

//remove phone from the DOM
function removePhone(e) {
  let phone, phoneId;

  //remove from the DOM
  if (e.target.classList.contains('remove')){
    e.target.parentElement.parentElement.remove();
    phone = e.target.parentElement.parentElement;
    phoneId = phone.querySelector('a').getAttribute('data-id');
  }
  //remove from local storage
  removePhoneLocalStorage(phoneId)
}

//remove from local storage
function removePhoneLocalStorage(id){
  //get the local storage data
  let phonesLS = getPhonesFromStorage();

  //loop through the array and find the index to remove
  phonesLS.forEach(function(phoneLS, index){
    if(phoneLS.id === id){
      phonesLS.splice(index, 1);
    }
  });
  //add the rest of the array
  localStorage.setItem('phones', JSON.stringify(phonesLS));
}


//clears the shopping cart
function clearCart(){

  while(shoppingCartContent.firstChild) {
    shoppingCartContent.removeChild(shoppingCartContent.firstChild);
  }

  //clear from local storage
  clearLocalStorage();
}

//clears the whole local storage
function clearLocalStorage(){
  localStorage.clear();
}

//loads when document is ready and print phones into shopping cart
function getFromLocalStorage(){
  let phonesLS = getPhonesFromStorage();
  //loop through phones and print into the cart
  phonesLS.forEach(function(phone){
    //create the <tr>
    const row = document.createElement('tr');
    //print the content
    row.innerHTML = `
        <tr>
            <td>
                <img src="${phone.image}" width=100>
            </td>
            <td>${phone.title}</td>
            <td>${phone.price}</td>
            <td>
                <a href="#" class='remove' data-id="${phone.id}">X</a>
            </td>
        </tr>
      `;
      shoppingCartContent.appendChild(row);
  });
}
