const { Mongoose } = require("Mongoose");
require("../config/dbConfig");
const Bird = require("../models/FireBirds.model");

const birds = [
  {
    name: "Soleil d'or ",
    powers:
      "Il peut augmenter la température du temps, d'un objet, d'un être vivant.",
    colors: "Or, jaune, orange",
    size: "immense",
    picture:
      "https://i.pinimg.com/564x/c4/7b/db/c47bdb0b24eef3b3ff0f4ef4be03a8a1.jpg",
  },
  {
    name: "Coeur Ardant ",
    powers:
      "Quand la peur vient, le contact d'une de ses plumes te donne courage et amour.",
    colors: "Jaune et orange",
    size: "petit",
    picture:
      "https://i.pinimg.com/564x/37/67/10/3767108c7bea9d2838db6cba6c91117f.jpg",
  },
  {
    name: "Étoile du crépuscule",
    powers:
      "Il a le pouvoir de faire fleurir, pousser, grandir, vieillir tout être vivant",
    colors: "Jaune, orange, blanc, rose, bleu et vert",
    size: "grand",
    picture:
      "https://i.pinimg.com/564x/9a/7a/23/9a7a233cbe3c49517c40bfa9a43c536a.jpg",
  },
  {
    name: "Rubi enchanteur",
    powers:
      "Il sait transformer tout ce qu'il souhaite en pierres et métaux précieux",
    colors: "Rouge, orange et jaune",
    size: "moyen",
    picture:
      "https://i.pinimg.com/564x/96/3c/74/963c74230a79eb037e9167647a0b9450.jpg",
  },
  {
    name: "Fruit du diable",
    powers: "Il peut lancer aux fruits et fleurs des sorts de toutes sortes",
    colors: "Rouge, jaune et noir",
    size: "moyen",
    picture:
      "https://i.pinimg.com/564x/db/09/48/db09481afd95651e047013e67e5d9af9.jpg",
  },
  ,
  {
    name: "La perle de vie",
    powers: "Une de ses plumes peut guérir de tous les maux",
    colors: "Rouge, jaune et bleu",
    size: "grand",
    picture:
      "https://i.pinimg.com/564x/98/66/90/986690b650de1d3156b08b8cdcf721d6.jpg",
  },
];

Bird.create(birds)
  .then((response) => {
    console.log("We created " + response.length + " fire birds !");
    process.exit();
  })
  .catch((e) => console.log(e));
