


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
    });
    

/* const phone = async () => {
    const response = await fetch('http://www.mocky.io/v2/5acfc4df3100006a004eaab4');
    const json = await return response.json();
    
    console.log(json);
} */


//variables
    const phoneCard = document.querySelector('#card');

//load function
setTimeout(loadFunction, 1000);

//functions
function loadFunction(){
    phoneCard.innerHTML = `
    
        <img src="${phones[0].image}" class='phone-image'>
        <div class='info-card'>
            <h4>Apple iPhone 5c</h4>
            <p>${phones[0].description}</p>
            <img src=''>
            <p class='price'>$400 <span>$300</span></p>
            <a href='#' class='button primary button input add-to-cart' data-id='1'>Add to Cart</a>
        </div>
        
    `
} 