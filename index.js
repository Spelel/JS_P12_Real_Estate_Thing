import { placeholderPropertyObj as PPO} from "./properties/placeholderPropertyObj.js"
import { propertyForSaleArr as PFSarr } from "./properties/propertyForSaleArr.js"


function getPropertyHtml() {
    let feedHtml =``

    PFSarr.forEach(function (line) {
        if (line.priceGBP > 0) {

        }feedHtml +=`
        <section class="card">
        <img src="/images/${line.image}">
            <div class="card-right">
                <h2>${line.propertyLocation}</h2>
                <h3>£${line.priceGBP}</h3>
                <p>${line.comment}</p>
                <h3>${line.roomsM2.reduce(function(total, value){
                    return total + value
                })} m&sup2;</h3>
            </div>
        </section> 
        `
    })
    return feedHtml
}


















document.getElementById('container').innerHTML = getPropertyHtml()







