// --- FIFTY FIVE TEST ---

// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// // Array all cards
// let displayedCards = [];
// // Array for cards displayed on screen

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.includes(productCard)) {
//         console.log("Hello"); // Correct to display name and price Ineer HTML
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

//------- 2
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];

// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.includes(productCard)) {
//         console.log("Hello");
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

// ----- 3
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.includes(productCard)) { // MAUVAIS
//         // let priceProduct =
//         //   document.getElementsByClassName("ProductCard__price");
//         // ProductCard__price parent of hasReduction
//         let nameProduct = document.getElementsByClassName("ProductCard__title");
//         console.log(nameProduct.innerHTML);

//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

// --- 4 QLQ CHOSE FONCTIONNE AVEC QUERY SELECTOR, mais toujouts meme produit
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.includes(productCard)) {
//         // let priceProduct =
//         //   document.getElementsByClassName("ProductCard__price");
//         // ProductCard__price parent of hasReduction
//         //let nameProduct = document.getElementsByClassName("ProductCard__title");
//         let nameProduct = document.querySelector(".ProductCard__title div");
//         console.log(nameProduct.innerHTML);

//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

// OUTPUT
// 6512.0f4c30654849e9b5c3d6.js:1 Uncaught TypeError: Cannot read properties of undefined (reading '0')
//     at <anonymous>:14:42
//     at Array.forEach (<anonymous>)
//     at <anonymous>:5:21
//     at r (6512.0f4c30654849e9b5c3d6.js:1:46666)
//  ===>  2 Moussaillon Indigo

// -- INTERSECTION OBSERVER ---

// let observer = new IntersectionObserver(
//   function (entries) {
//     if (entries[0].isIntersecting === true)
//       console.log("Element fully visible ");
//   },
//   { threshold: [1] }
// );

// observer.observe(document.querySelector("#target-container"));

// let observer = new  IntersectionObserver(function(){
//     console.log("Element fully visible ");
//   }, {root:null}); // root = l'environnement
//   observer.observe(document.querySelector("#main-container"))//target

// it can tell whether the target element and the screen overlap (through isIntersecting property),
// and by how much percentage they overlap (through a intersectionRatio property).
// You can create a new IntersectionObserver object, and set a threshold. threshold is
// a number between 0 and 1, that represents the viewable area of the target element
// in the screen. For example, 0 represents no area of element is visible.
// A value of 0.10 represents about 10% area is viewable in screen.
// -> Value of 1 means element is fully viewable in screen.
// You can even specify multiple thresholds.
// Intersection Observer will fire a callback function, once the threshold is passed in
// either direction. For example if you have set threshold to 0.10, callback function
// will be invoked everytime when viewable area becomes greater than 10% or becomes less than 10%.

// To use the Intersection Observer API you will need to create a new IntersectionObserver object. The root element can be set with the root option property. To set the screen as the root element, you can set root to null, or leave it out.

//To start observing the target for intersection,
// you use the observe method.
