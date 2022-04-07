const homeEl = document.querySelector(".home-menu");
const payEl = document.querySelector(".payment-menu");
const budgetEl = document.querySelector(".budget-menu");
const cardEl = document.querySelector(".card-menu");
const moreEl = document.querySelector(".more-menu");

//  ==== this is for showing and hiding card details
const cardShow = document.querySelector(".show-details");
const cardHide = document.querySelector(".hide-details");
const cardFront = document.querySelector(".card-img1");
const cardBack = document.querySelector(".card-img2");

cardShow.addEventListener("click", ()=>{
    cardFront.style.display = "none"
    cardBack.style.display = "block"
    cardHide.style.display = "block"
    cardShow.style.display = "none"
})

cardHide.addEventListener("click", ()=>{
    cardFront.style.display = "block"
    cardBack.style.display = "none"
    cardHide.style.display = "none"
    cardShow.style.display = "block"
})