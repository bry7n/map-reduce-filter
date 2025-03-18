const menuOptions = [
  {
    name: "Big Burger",
    price: 23.5,
    vegan: false,
    src: "./assets/images/menu/burgers/bigburger.png",
  },
  {
    name: "Cheddar Burger",
    price: 25.0,
    vegan: false,
    src: "./assets/images/menu/burgers/cheddarburger.png",
  },
  {
    name: "Chicken Burger",
    price: 22.0,
    vegan: false,
    src: "./assets/images/menu/burgers/chickenburger.png",
  },
  {
    name: "Classic Burger",
    price: 20.0,
    vegan: false,
    src: "./assets/images/menu/burgers/classicburger.png",
  },

  {
    name: "Veggie Burger",
    price: 23,
    vegan: true,
    src: "./assets/images/menu/veggie/veggie1.png",
  },

  {
    name: "Veggie Classic",
    price: 21,
    vegan: true,
    src: "./assets/images/menu/veggie/veggie2.png",
  },
];


const list = document.querySelector("ul");
const showAll = document.querySelector("#showAll");
const discountButton = document.querySelector("#discountButton");
const totalValue = document.querySelector("#totalValue");
const pTotal = document.querySelector("#modal-text");
const greenOption = document.querySelector("#showVeggie")


function buttonShowAll(productsArray) {
  let myLi = "";

  productsArray.forEach((burger) => {
    myLi =
      myLi +
      `
            <li>
                <img src= ${burger.src}>
                <p>${burger.name}</p>
                <p>R$ ${burger.price.toFixed(2)}</p>
            </li>

            `;

    console.log(myLi);
  });

  list.innerHTML = myLi;
  discountButton.style.display = "block";
  totalValue.style.display = "block";
}

function mapAll() {
  const currentItems = Array.from(list.querySelectorAll("li")).map((li) => {
    const name = li.querySelector("p").textContent;
    return menuOptions.find((item) => item.name === name);
  });

  const discountedItems = currentItems.map((product) => ({
    ...product,
    price: Number((product.price * 0.9).toFixed(2)),
  }));

  buttonShowAll(discountedItems);
  totalValue.onclick = () => showTotal(discountedItems);
}

function showTotal(filteredItems) {
  const total = filteredItems.reduce((acc, current) => acc + current.price, 0);

  pTotal.textContent = `The total is: R$ ${total.toFixed(2)}`;
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
}

function optionGreen(){

  const veggieItem = menuOptions.filter((burger) => burger.vegan === true)

  buttonShowAll(veggieItem)
}

function hideModal() {
  modal.style.visibility = "hidden";
  modal.style.opacity = "0";
}
discountButton.addEventListener("click", mapAll);
totalValue.addEventListener("click", () => showTotal(menuOptions));
closeModal.addEventListener("click", hideModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    hideModal();
  }
});
showAll.addEventListener("click", () => buttonShowAll(menuOptions));totalValue.onclick = () => showTotal(menuOptions);

greenOption.addEventListener("click", () => {
  const veggieItem = menuOptions.filter((burger) => burger.vegan);
  buttonShowAll(veggieItem);
  totalValue.onclick = () => showTotal(veggieItem);
});