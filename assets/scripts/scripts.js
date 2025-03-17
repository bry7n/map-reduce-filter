const menuOptions = [
  {
    name: "Big Burger",
    price: 23.50,
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
    price: 22.00,
    vegan: false,
    src: "./assets/images/menu/burgers/chickenburger.png",
  },
  {
    name: "Classic Burger",
    price: 20.00,
    vegan: false,
    src: "./assets/images/menu/burgers/classicburger.png",
  },
];
 
const list = document.querySelector("ul");
const showAll = document.querySelector("#showAll");
const discountButton = document.querySelector("#discountButton");

function buttonShowAll(productsArray){

    let myLi = "";

productsArray.forEach((burger) => {
  myLi = myLi + `
            <li>
                <img src= ${burger.src}>
                <p>${burger.name}</p>
                <p>R$ ${burger.price.toFixed(2)}</p>
            </li>

            `;

            console.log(myLi)
});

list.innerHTML = myLi
discountButton.style.display = "block";

}

function mapAll(){
const newPrices = menuOptions.map((product) =>({
    ...product,
    price: product.price * .9.toFixed(2),
}))

buttonShowAll(newPrices)
}



discountButton.addEventListener("click", mapAll)
showAll.addEventListener("click",() => buttonShowAll(menuOptions))

