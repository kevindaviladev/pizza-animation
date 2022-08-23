//If you want to add new Ingredients, add a new object with
// that ingredient info.
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
]

function setIngredient(index) {
  const pizza = document.getElementById("pizza")
  const fragment = document.createDocumentFragment()
  const ingredient = INGREDIENTS[index]

  for (let i = 0; i < ingredient.quantity; i++) {
    const img = document.createElement("img")
    img.style.width = "40px"
    img.src = ingredient.imgPath
    img.classList.add("ingredient", "backInUp")
    img.style.top = ingredient.positions[i].top
    img.style.left = ingredient.positions[i].left
    fragment.appendChild(img)
  }
  console.log(fragment)
  pizza.appendChild(fragment)
}

function pay() {
  let tl = gsap.timeline()

  tl.to(".pizza", {
    duration: 1,
    scale: "0.5",
    y: 66,
  })

  const pizza = document.getElementById("pizza")
  const pizzaBox = document.getElementById("pizza-box")

  tl.to(".box", {
    autoAlpha: 1,
  })

  tl.to(".tapa", {
    rotateX: 0,
    autoAlpha: 1,
  })

  setTimeout(() => {
    pizza.style.opacity = 0;
    pizzaBox.classList.add("outRight")
    tl.to(".box", {
      autoAlpha: 0,
    })
  }, 3000)
}
