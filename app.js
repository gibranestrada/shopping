


//fetch api data
let phones;
    fetch('http://www.mocky.io/v2/5acfc4df3100006a004eaab4')
    .then(response => {
        return response.json();
    })
    .then(phoneData => {
        phones = phoneData.phones;
        console.log(phones)
    })
    .catch(function(error){
        console.log(error);
        alert("Refresh the page");
    });


//variables
    const phoneCard = document.querySelector('#card');
    let phoneArray,
        phoneArray2,
        infoButton,
        cardsButton,
        deleteButton;

    //load listeners
setTimeout(loadFunction, 400);
setTimeout(loadFunction, 500);

setTimeout(loadEventListeners, 700);



function loadEventListeners(){
    infoButton = document.querySelectorAll(`.more-info`);
    cardsButton = document.querySelector('#shopping-car2');
   

}

setTimeout(info, 900);
function info(){
    infoButton.forEach(aClass => aClass.addEventListener('click', showInfoButton));
    
}
//functions
function loadFunction(){
    phoneArray = phones.map((listing, index) => {
        return listing =

     `<div class='card' key="${index}">
        <img src="${listing.image}" class='phone-image' style="width: 100%"><hr>
        <div class='info-card'>
            <h4>${listing.name} <span class='price'> $${listing.price}</span></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul..</p>
            <a href='#' class='add-to-cart' data-id='${listing.id}'>Add to Cart</a>
            <div class= 'visible-card'>
            <ul>
                <li class = 'submenu-card'>
                    <a class='more-info' id='data-${listing.id}' data-id='${listing.id}' 
                    >More info</a>
                    
                </li>
            </ul>
            </div>
        </div>
    </div><br/>
    ` 
    }).join("")
  
    phoneCard.innerHTML = phoneArray;
   // openCards();
} 
/*
let openButton;
function openCards(){
    openButton = document.querySelectorAll(".more-info");
    openButton.forEach(aClass => aClass.addEventListener('click', openCard));
}
function openCard(e){
    openButton = document.getElementById(e.target.id)
    openButton.style.display = "block";
}

function closeCard(e){
    let closeButton = document.querySelector(".extra-info");
    closeButton.style.display = "none";
} */


function showInfoButton(e){
    cardsButton = document.getElementById(e.target.id);
    e.preventDefault();
    let cardDesc = document.createElement('div');
    cardDesc.classList.add('hello');
    phoneArray = phones.map((listing,id)=> {
        return listing =
        `<div class='extra-info' id='data-${listing.id}'>
        <img src='${listing.image}' id='card-image' style='width:150px; height:150px'>
        <a href='#' class='close-button' id='close-button'><b>X</b></a>
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
    cardDesc.innerHTML = phoneArray;
    cardsButton.appendChild(cardDesc);
    buttonDeleter();
}
function buttonDeleter(){
    deleteButton = document.querySelectorAll('.close-button');
    deleteButton.forEach(deleteBtn => deleteBtn.addEventListener('click', deleteCard));
}
function deleteCard(e){
    e.preventDefault;
    list = document.querySelector('.hello');
    cardsButton.removeChild(list);
} 




