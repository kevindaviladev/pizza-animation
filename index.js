const INGREDIENTS = [
  {
    name: "Mushroom",
    quantity: 4,
    imgPath: "images/mushroom.png",
    positions: [
      {
        top: "30%",
        left: "70%",
      },
      {
        top: "20%",
        left: "30%",
      },
      {
        top: "50%",
        left: "15%",
      },
      {
        top: "70%",
        left: "50%",
      },
    ],
  },

  {
    name: "Onions",
    quantity: 4,
    imgPath: "images/onion.png",
    positions: [
      {
        top: "45%",
        left: "50%",
      },
      {
        top: "26%",
        left: "12%",
      },
      {
        top: "67%",
        left: "30%",
      },
      {
        top: "20%",
        left: "63%",
      },
    ],
  },

  {
    name: "Olive",
    quantity: 4,
    imgPath: "images/olive_unit.png",
    positions: [
      {
        top: "35%",
        left: "60%",
      },
      {
        top: "66%",
        left: "32%",
      },
      {
        top: "17%",
        left: "40%",
      },
      {
        top: "63%",
        left: "20%",
      },
    ],
  },
];


function setIngredient(index) {
  const pizza = document.getElementById("pizza");
  const fragment = document.createDocumentFragment();
  const ingredient = INGREDIENTS[index];

  for (let i = 0; i < ingredient.quantity; i++) {
    const img = document.createElement("img");
    img.style.width = "40px";
    img.src = ingredient.imgPath;
    // img.classList.add(["ingredient", "animate__animated", "animate__backInUp"]);
    img.classList.add("ingredient", "animate__animated", "animate__backInUp");
    img.style.top = ingredient.positions[i].top;
    img.style.left = ingredient.positions[i].left;
    fragment.appendChild(img);
  }
  console.log(fragment);
  pizza.appendChild(fragment);
}

function pay() {
  const container = document.getElementById("container");
  const pizza = document.getElementById("pizza");
  const fragment = document.createDocumentFragment();

  const boxFront = document.createElement("img");
  boxFront.src = "images/box_front.png";
  boxFront.classList.add(
    "box-front",
    "animate__animated",
    "animate__flipInX",
    "animate__delay-1s"
  );

  const boxBack = document.createElement("img");
  boxBack.src = "images/box_inside.png";
  boxBack.classList.add("box-back", "animate__animated", "animate__flipInX");
  fragment.append(boxFront, boxBack);
  pizza.classList.add("pizza-buy");
  container.appendChild(fragment);
  container.classList.add(
    "animate__animated",
    "animate__zoomOutRight",
    "animate__delay-2s"
  );
}
