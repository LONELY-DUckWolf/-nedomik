const categories = document.querySelectorAll("#categories > li");

console.log(`${categories.length}`);

categories.forEach((category) => {
  const title = category.firstElementChild;
  const liItem = category.querySelectorAll("h3");

  console.log(`${title.textContent}`);
  console.log(`${liItem.length}`);
});

//2

const ingredients = [

    'Картопля',

    'Гриби',

    'Часник',

    'Помідори',

    'Зелень',

    'Приправи',

];


  const ingredientsList = document.querySelector("#ingredients");
  
  ingredients.forEach((ingredient) => {
    const ingredientItem = document.createElement("li");

    ingredientItem.textContent = ingredient;

    ingredientsList.append(ingredientItem);
  });
  console.log(ingredientsList);


//3

const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];

  
  const imagesElem = images.map((img) => 
  `    <li class="img-item">
      <img class="item-photo" src="${img.url}" alt="${img.alt}">
    </li>`).join("");

console.log(imagesElem)

const galaryList = document.querySelector("#gallery");

galaryList.insertAdjacentHTML("beforeend", imagesElem);

