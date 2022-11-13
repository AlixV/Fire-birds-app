// ---   FIFTY FIVE TEST ---

// <script>
// window.addEventListener('scroll', function(){
//     let vignette = document.querySelector('#ProductCard');
//     let positionVignette = vignette.getBoundingClientRect();

//     //Checking for full visibility
//     if(positionVignette.top >=0 && positionVignette.bottom <= window.innerHeight){
//         console.log('--- VIGNETTE VISIBLE ')
//     }
// })

// </script>

// TEST
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// productCardsArray.map((productCard) => {
//   // if - to know if displayed on screen

//   window.addEventListener("scroll", function () {
//     let position = productCard.getBoundingClientRect();

//     if (position.top >= 0 && position.bottom <= window.innerHeight) {
//       // if (displayedCards.includes(productCard)){
//       //     console.log(productCard.innerHTML) // Correct to display name and price
//       // displayedCards.push(productCard)
//       // }
//     }
//   });
// });

// --- 5

// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card)=> card === productCard)) {
//         // let priceProduct =
//         //   document.getElementsByClassName("ProductCard__price");
//         // let nameProduct = document.getElementsByClassName("ProductCard__title").getElementByTagName('div');
//         let nameProduct = document.querySelector("ProductCard__title > div")
//         console.log(nameProduct.innerHTML);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

// ---6
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.includes(productCard)) {   // INCLUDES
//         //  (!displayedCards.find((card)=> card === productCard))
//         // let priceProduct =
//         //   document.getElementsByClassName("ProductCard__price");
//         // let nameProduct = document.getElementsByClassName("ProductCard__title").getElementByTagName('div');
//         let nameProduct = document.querySelector("ProductCard__title > div") // marche pas ??
//         console.log(nameProduct.innerHTML);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });
// // => 202
// Uncaught TypeError: Cannot read properties of null (reading 'innerHTML')
//     at <anonymous>:15:33
//     at Array.forEach (<anonymous>)
//     at <anonymous>:5:21
//     at r (6512.0f4c30654849e9b5c3d6.js:1:46666)

// --- 7
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card)=> card === productCard)){  // FIND
//         //  (!displayedCards.includes(productCard))
//         // let priceProduct =
//         //   document.getElementsByClassName("ProductCard__price");
//         // let nameProduct = document.getElementsByClassName("ProductCard__title").getElementByTagName('div');
//         let nameProduct = document.querySelector("ProductCard__title > div") //
//         console.log(nameProduct.innerHTML);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });
// = > Un million de
// Uncaught TypeError: Cannot read properties of null (reading 'innerHTML')
//     at <anonymous>:15:33
//     at Array.forEach (<anonymous>)
//     at <anonymous>:5:21
//     at r (6512.0f4c30654849e9b5c3d6.js:1:46666)

// document.querySelector("td1 > div").innerHTML

// document.getElementById("td1").getElementsByTagName('div')[0].innerHTML

// ---- V8
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card)=> card === productCard)){  // FIND
//         //  (!displayedCards.includes(productCard))
//         // let priceProduct =
//         //   document.getElementsByClassName("ProductCard__price");
//         // let nameProduct = document.getElementsByClassName("ProductCard__title").getElementByTagName('div');
//         let nameProduct = document.querySelector("ProductCard__title > div") //
//         console.log(nameProduct.innerHTML);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

// CECI FONCTIONNE - ME RENVOIE LE NOM DU MAILLOT PUIS undefined :
// let nameProduct = document.getElementsByClassName("ProductCard__title")[0].getElementsByTagName('div')[0].innerHTML;
// console.log(nameProduct);

// V9
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card)=> card === productCard)){  // FIND
//         //  (!displayedCards.includes(productCard))
//         let nameProduct = document.getElementsByClassName("ProductCard__title")[0].getElementsByTagName('div')[0].innerHTML;
//         console.log(nameProduct);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

// => RENVOIE que Moussaillon

// V10
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card)=> card === productCard)){  // FIND
//         //  (!displayedCards.includes(productCard))
//         let nameProduct = productCard.getElementsByClassName("ProductCard__title")[0].getElementsByTagName('div')[0].innerHTML;
//         console.log(nameProduct);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });
// => display juste Moussaillon indigo

// v11
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card)=> card === productCard)){  // FIND
//         //  (!displayedCards.includes(productCard))

//         console.log(productCard);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

// => me display une seule fois la vignette

// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card)=> card === productCard)){  // FIND
//         //  (!displayedCards.includes(productCard))
//         let testPDT = productCard.getElementsByClassName("ProductCard__title")[0]
//         console.log(testPDT.getElementsByTagName('div')[0].innerHTML);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

// // FONCTIONNE
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card) => card === productCard)) {
//         //  (!displayedCards.includes(productCard))
//         let itemName = productCard
//           .getElementsByClassName("ProductCard__title")[0]
//           .getElementsByTagName("div")[0].innerHTML;
//         let itemPrice = productCard
//           .getElementsByClassName("ProductCard__price")[0]
//           .getElementsByTagName("strong")[0].innerHTML;
//         console.log(itemName);
//         displayedCards.push(productCard + "" + itemPrice);
//       }
//     }
//   });
// });

// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card)=> card === productCard)){  // FIND
//         //  (!displayedCards.includes(productCard))
//         let itemName = productCard.getElementsByClassName("ProductCard__title")[0].getElementsByTagName('div')[0].innerHTML
//         let itemPrice = productCard.getElementsByClassName("ProductCard__price")[0].getElementsByTagName('strong')[0].innerHTML
//         console.log(itemName + '' + itemPrice);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card)=> card === productCard)){  // FIND
//         //  (!displayedCards.includes(productCard))
//         let itemName = productCard.getElementsByClassName("ProductCard__title")[0].getElementsByTagName('div')[0].innerHTML
//         let itemPrice = productCard.getElementsByClassName("ProductCard__price")[0].getElementsByTagName('strong')[0].innerHTML
//         console.log(itemName  + `  ` +  itemPrice);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

// BON
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card)=> card === productCard)){  // FIND
//         //  (!displayedCards.includes(productCard))
//         let itemName = productCard.getElementsByClassName("ProductCard__title")[0].getElementsByTagName('div')[0].innerHTML
//         let itemPrice = productCard.getElementsByClassName("ProductCard__price")[0].getElementsByTagName('strong')[0].innerHTML
//         console.log(itemName," ",itemPrice);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

// BON 2
// Ressac   105.00€
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card)=> card === productCard)){
//         //  (!displayedCards.includes(productCard))
//         //let itemName = productCard.getElementsByClassName("ProductCard__title")[0].getElementsByTagName('div')[0].innerHTML
//         let itemName = productCard.querySelector("ProductCard__title > div").innerHTML
//         let itemPrice = productCard.getElementsByClassName("ProductCard__price")[0].getElementsByTagName('strong')[0].innerHTML
//         console.log(itemName," ",itemPrice);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// });

// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// window.addEventListener("scroll", function () {
//   productCardsArray.forEach((productCard) => {
//     let positionCard = productCard.getBoundingClientRect();

//     if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
//       if (!displayedCards.find((card)=> card === productCard)){
//         //  (!displayedCards.includes(productCard))
//         //let itemName = productCard.getElementsByClassName("ProductCard__title")[0].getElementsByTagName('div')[0].innerHTML
//         let itemName = productCard.querySelector("ProductCard__title > div").innerHTML
//         // let itemPrice = productCard.getElementsByClassName("ProductCard__price")[0].getElementsByTagName('strong')[0].innerHTML
//         let itemPrice = productCard.querySelector("ProductCard__price > strong").innerHTML
//         console.log(itemName," ",itemPrice);
//         displayedCards.push(productCard);
//       }
//     }
//   });
// })

// CODE envoyé
const productCardsArray = [...document.getElementsByClassName("ProductCard")];
let displayedCards = [];
window.addEventListener("scroll", function () {
  productCardsArray.forEach((productCard) => {
    let positionCard = productCard.getBoundingClientRect();
    if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
      if (!displayedCards.find((card) => card === productCard)) {
        let itemName = productCard.querySelector(
          ".ProductCard__title > div"
        ).innerHTML;
        let itemPrice = productCard.querySelector(
          ".ProductCard__price > strong"
        ).innerHTML;
        console.log(itemName, " ", itemPrice);
        displayedCards.push(productCard);
      }
    }
  });
});

// BROUILLON

// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// productCardsArray.forEach((productCard) => {
//   let observer = new IntersectionObserver(
//     function (entries) {
//       if (entries[0].isIntersecting === true)
//         if (!displayedCards.find((card) => card === productCard)) {
//           let itemName = productCard.querySelector(
//             ".ProductCard__title > div"
//           ).innerHTML;
//           let itemPrice = productCard.querySelector(
//             ".ProductCard__price > strong"
//           ).innerHTML;
//           console.log(itemName, " ", itemPrice);
//           displayedCards.push(productCard);
//         }
//     },
//     { threshold: [1] }
//   );
//   observer.observe(productCard); // COOL
// });
// FONCTIONNE
// if(entries[0]['isIntersecting']=== true)
// if(entries[0]['intersectionRatio' ]=== 1)

// FONCTIONNE
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];
// let displayedCards = [];

// productCardsArray.forEach((productCard) => {
//   let observer = new IntersectionObserver(
//     function (entries) {
//       if (entries[0].isIntersecting)
//         if (!displayedCards.find((card) => card === productCard)) {
//           let itemName = productCard.querySelector(
//             ".ProductCard__title > div"
//           ).innerHTML;
//           let itemPrice = productCard.querySelector(
//             ".ProductCard__price > strong"
//           ).innerHTML;
//           console.log(itemName, " ", itemPrice);
//           displayedCards.push(productCard);
//         }
//     },
//     { threshold: [1] }
//   );
//   observer.observe(productCard);
// });

// /// with unobserve

// const productCardsArray = [...document.getElementsByClassName("ProductCard")];

// productCardsArray.forEach((productCard) => {
//   let observer = new IntersectionObserver(
//     function (entries, observer) {
//       if (entries[0].isIntersecting) {
//         let itemName = productCard.querySelector(
//           ".ProductCard__title > div"
//         ).innerHTML;
//         let itemPrice = productCard.querySelector(
//           ".ProductCard__price > strong"
//         ).innerHTML;
//         console.log(itemName, " ", itemPrice);
//         observer.unobserve(productCard);
//       }
//     },
//     { threshold: [1] }
//   );
//   observer.observe(productCard);
// });

// const productCardsArray = [...document.getElementsByClassName("ProductCard")];

// productCardsArray.forEach((productCard) => {
//   let observer = new IntersectionObserver(
//     function (entries, observer) {
//       if (entries[0].isIntersecting) {
//         let itemName = productCard.querySelector(
//           ".ProductCard__title > div"
//         ).innerHTML;
//         let itemPrice = productCard.querySelector(
//           ".ProductCard__price > strong"
//         ).innerHTML;
//         console.log(itemName, " ", itemPrice);
//         observer.unobserve(productCard);
//       }
//     },
//     { threshold: [1] }
//   );
//   observer.observe(productCard);
// });

// --- VERSION ENVOYÉE ---
// const productCardsArray = [...document.getElementsByClassName("ProductCard")];

// productCardsArray.forEach((productCard) => {
//   let observer = new IntersectionObserver(
//     function (entries, observer) {
//       if (entries[0].isIntersecting) {
//         let itemName = productCard.querySelector(
//           ".ProductCard__title > div"
//         ).innerHTML;
//         let itemPrice = productCard.querySelector(
//           ".ProductCard__price > strong"
//         ).innerHTML;
//         console.log(itemName, " ", itemPrice);
//         observer.unobserve(productCard);
//       }
//     },
//     { threshold: [1] }
//   );
//   observer.observe(productCard);
// });
