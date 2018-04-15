


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
setTimeout(loadFunction, 500);

//functions
function loadFunction(){
    phoneArray = phones.map((listing, id) => {
        return listing =

     `<div class='card' key = ${id}>
        <img src="${listing.image}" class='phone-image' style="width: 100%"><hr>
        <div class='info-card'>
            <h4>${listing.name} <span class='price'> $${listing.price}</span></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nul..</p>
            <a href='#' class='add-to-cart' data-id='1'>Add to Cart</a>
            <div class= 'visible-card'>
            <ul>
                <li class = 'submenu-card'>
                    <a class='more-info' id='more-info' data-id='1'>More info</a>
                    <div id='shopping-card'>
                    <img src='${listing.image}' id='card-image' style='width:200px; height:200px'>
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
                        </table>
                        <span style='color: royalblue'>${listing.name} <span><b>$${listing.price}</b></span><br />
                        <span>${listing.description}</span>
                    </div>
                </li>
            </ul>
            </div>
        </div>
    </div><br/>
    ` 
    }).join("")
    phoneCard.innerHTML = phoneArray;
    console.log(phoneCard.innerHTML)
} 




      /* <a class='more-info' id='more-info' data-id='1'>More info</a>
            <div class ='container-card'>
            <div class ='submenu-card' id='submenu-card'>
                <img src="${listing.image}" id='img-card' style='width:100px; height:100px'>
                <div id='shopping-card'>
                    <p> hello</p>
                </div>
             </div>
             </div>  */