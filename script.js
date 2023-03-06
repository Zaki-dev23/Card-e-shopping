// console.log("hello DOM")

const products = [
  {
    name: "product 1",
    price: 100,
    imgURL:
      "https://media.wired.com/photos/621980b1aaf30ea1c35e400a/125:94/w_1822,h_1370,c_limit/Gear-Samsung-S22-Series.jpg",
  },
  {
    name: "product 2",
    price: 899,
    imgURL:
      "https://i.pcmag.com/imagery/reviews/03POP0TjDjuXonJXI16Omn2-1..v1663720055.jpg",
  },
  {
    name: "product 3",
    price: 300,
    imgURL:
      "https://i.pcmag.com/imagery/reviews/03POP0TjDjuXonJXI16Omn2-1..v1663720055.jpg",
  },
  {
    name: "product 4",
    price: 999,
    imgURL:
      "https://i.pcmag.com/imagery/reviews/03POP0TjDjuXonJXI16Omn2-1..v1663720055.jpg",
  },
];

const cart = [];
console.log(cart)

// console.log(products)
const container = document.querySelector("#productsList");
const totalOfAllProducte = document.querySelector('.total');
var total_is ;

products.forEach((product) => {
  const theProductElement = document.createElement("div");
  const theProductTitle = document.createElement("h4");
  const theProductImage = document.createElement("img");
  const theProductPrice = document.createElement("span");
  const theProductBTN = document.createElement("button");

  theProductTitle.innerHTML = product.name;
  theProductImage.setAttribute("src", product.imgURL);
  theProductPrice.innerHTML= product.price;
  theProductPrice.style.textAlign = "center"

  theProductBTN.innerText = "Buy";

  theProductElement.appendChild(theProductTitle);
  theProductElement.appendChild(theProductImage);
  theProductElement.appendChild(theProductPrice);
  theProductElement.appendChild(theProductBTN);
  theProductElement.classList.add("product");


  container.appendChild(theProductElement);
  // theProductElement.
  
  // function addProductToCart(productName) {
  //   cart.push(products.find((product) => product.name == productName));
  // }
  function addProductToCart(productName) {
    // Check if the product is already in the cart
    const cartItem = cart.find(item => item.name === productName);
  
    if (cartItem) {
      // If the product is already in the cart, update the quantity
      cartItem.quantity++;
    } else {
      // If the product is not in the cart, add it as a new item
      cart.push({ name: productName, quantity: 1 });
    }
  
    // Update the cart UI
    // updateCartUI();
    buildCartDOM();
  }
  

  theProductBTN.onclick = (e) =>
    addProductToCart(e.target.parentElement.childNodes[0].innerText);

});



/*------------split------------*/
const split = document.createElement('hr')
container.appendChild(split)


function buildCartDOM() {
  const exist = document.querySelector('ul');
  exist && exist.remove()
  const cartList = document.createElement("ul");
  cartList.className = "cartsList"
  cart.forEach((productBuyed) => {
    const theProductElement = document.createElement("li");
    const theProductTitle = document.createElement("h4");
    const addQuantetie = document.createElement("button");
    const spanqte = document.createElement("span");
    const strQuantetie = document.createElement("button");

    addQuantetie.textContent = "+";
    spanqte.textContent = "1";
    strQuantetie.textContent = "-";
    theProductElement.appendChild(theProductTitle);
    theProductElement.classList.add("productBuyed");

    cartList.appendChild(theProductElement);
    theProductTitle.innerHTML = productBuyed.name;

    theProductElement.appendChild(addQuantetie);
    theProductElement.appendChild(spanqte);
    theProductElement.appendChild(strQuantetie);


    const DeleteProducte = document.createElement("img");
    const Like = document.createElement("img");
    // Like.style.filter =""
    Like.addEventListener('click', () => {
      console.log("like");
      Like.className = "filtre";
    })

    DeleteProducte.src = "delete.png";
    Like.src = "thumbs-up.png";
    theProductElement.appendChild(DeleteProducte);
    theProductElement.appendChild(Like);
    

    /*-------------add str-------------*/
    // function removeProductToCart(productName) {
    //   for (let i = 0; i <= cart.length; i++) {
    //     if (products.name == productName) {
    //       products.name.pop(products.find((product) => product.name == productName));
          
          
    //     }
    //   }
    //   removeProductToCart(cart)
    //   buildCartDOM();
    // }


    var index = 0;
    var indexstr = 0;


    function removeDuplicates(arr) {
      return arr.filter((item,
          index) => arr.indexOf(item) === index);
  }
    addQuantetie.addEventListener("click", () => {
      index++;
      spanqte.innerHTML = index;
      spanqte.className = "nbrProduct btn";
      if (index == 0) {
        spanqte.textContent = 1;
      }
      console.log("hello")
      


      //calculeted total of our productes
      total_is = spanqte.textContent * products[0].price
      console.log(totalOfAllProducte.textContent = total_is);
    })
    strQuantetie.addEventListener("click", () => {
      --index;
      spanqte.innerHTML = index;
      spanqte.className = "spanqte btn";
      if (index <= 0) {
        index = 1;
        spanqte.innerHTML = 1;
      }

      //calculeted total of our productes
      total_is = spanqte.textContent * products[0].price
      console.log(totalOfAllProducte.textContent = total_is);
    })
  //   DeleteProducte.addEventListener('click', removeProductToCart())

  // })
function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

  // DeleteProducte.addEventListener('click', ()=>{
  //   cartList.removeChild(theProductElement)

  // })

  })

  document.body.appendChild(cartList);
}

// DeleteProducte.addEventListener('click', ()=>{
//   cartList.removeChild(theProductElement)

/*        +            */
  DeleteProducte.addEventListener('click', () => {
    // Remove the product from the cart array
    cart = cart.filter(item => item.name !== productName);
  
    // Remove the product element from the UI
    cartList.removeChild(theProductElement);
  
    // Update the cart UI
    buildCartDOM();
  });
  /*       +            */
  
  // updateCartTotal()
  // updateCartCount()
// })

// function updateCartTotal() {
//   let cartItems = cartList.getElementsByClassName('cart-item')
//   let total = 0
//   for (let i = 0; i < cartItems.length; i++) {
//       let cartItem = cartItems[i]
//       let priceElement = cartItem.getElementsByClassName('cart-price')[0]
//       let price = parseFloat(priceElement.innerText.replace('$', ''))
//       total += price
//   }
//   document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
// }

// function updateCartCount() {
//   let cartItems = cartList.getElementsByClassName('cart-item')
//   let count = cartItems.length
//   document.getElementsByClassName('cart-count')[0].innerText = count
// }






// arr = arr.filtre((item) => item.id !== item.id)



