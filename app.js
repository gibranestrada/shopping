


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
    let phoneArray;

    //load function
setTimeout(loadFunction, 700);

//functions
function loadFunction(){
    phoneArray = phones.map((listing, index) => {
        return listing =

     `<div class='card' key = ${index}>
        <img src="${listing.image}" class='phone-image' style="width: 100%"><hr>
        <div class='info-card'>
            <h4>${listing.name}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul..</p>
            <p class='price'>$400 <span>$300</span></p>
            <a href='#' class='button primary button input add-to-cart' data-id='1'>Add to Cart</a>
            <a href='#' class='button primary button input add-to-cart' data-id='1'>More info</a>
        </div>
        </div><br/>
    ` 
    }).join("")
    phoneCard.innerHTML = phoneArray;
} 
