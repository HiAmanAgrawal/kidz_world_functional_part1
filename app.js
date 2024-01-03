let cart = document.getElementById("cart-value");
let cartButtons = document.querySelectorAll(".button");
let cartDiv = document.getElementById("cart");

let items=[
    { Itemname: "This was our pact",quantity: 0,price:7.48},
    { Itemname: "The famous five",quantity: 0,price:4.59 },
    { Itemname: "Matilda",quantity: 0,price:4.59 },
    { Itemname: "Harry Potter",quantity: 0,price:6.80},
    { Itemname: "For Young Readers",quantity: 0,price:7.29},
    { Itemname: "Wimpy kid - DIY",quantity: 0,price:4.99},
    { Itemname: "DART Board",quantity: 0,price:17.49},
    { Itemname: "Connect Four",quantity: 0,price:17.99},
    { Itemname: "Jenga",quantity: 0,price:20.99},
    { Itemname: "Monopoly",quantity: 0,price:19.49},
    { Itemname: "Bookmarks",quantity: 0,price:6.49},
    { Itemname: "Birthday Card",quantity: 0,price:8.49},
    { Itemname: "Stuffed toys",quantity: 0,price:3.99},
    { Itemname: "Dream catcher drawing",quantity: 0,price:14.49},
];

let count = 0;
let cartItems = [];
let total = 0;
let itemDetail = "";

for (let i = 0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener("click", () => {
    count++;
    cart.textContent = count;
    items[i].quantity++;
  });
}

cartDiv.onclick = () => {
  itemDetail = "";
  items.forEach((item) => {
    if (item.quantity > 0) {
      cartItems.push(item);
    }
  });

  cartItems.forEach((item) => {
    itemDetail += `Item name: ${item.Itemname} - Quantity: ${item.quantity} ` + '\n';
    total += item.price * item.quantity;
  });

  console.log(itemDetail);
  console.log(`Total Price: $${total.toFixed(2)}`);
  console.log(`Quantity: ${count}`);

  itemDetail = "";
  total = 0;
  cartItems = [];
};
