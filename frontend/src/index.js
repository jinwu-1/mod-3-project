document.addEventListener("DOMContentLoaded", () => {

    let cartArray = [];
    let subTotal = [];
    const findDiv = document.querySelector("#clothes-box")
    const findListOfItems = document.querySelector(".list-of-items")

    function renderOneProduct(product){
        const newElement = document.createElement("div")
        newElement.className = "content"
        newElement.innerHTML = `
            <div class="item-card"> 
                <div class="center">
                    <img src="${product.image_url}" class="image">
                    <h2>${product.name}</h2>
                    <p>Price: $${product.price}</p>
                    <button class="add-item">Add to Cart</button>
                <div>
            </div>
        `
        findDiv.append(newElement)

        const addButton = newElement.querySelector(".add-item")
        addButton.addEventListener("click", event => {
            findListOfItems.innerText = ""
             
            fetch("http://localhost:3000/cart_items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    cart_id: 1,
                    product_id: product.id
                })
            })
            .then(response => response.json())
            .then(newCartItem => {
                cartArray.push(newCartItem);
                renderAllCartItems(cartArray)
            })
        })
    }

    function renderCartItem(cartItem){
        const newLi = document.createElement("li")
        let quantity = 1
        let var1 = cartItem.product.price * quantity
        newLi.innerHTML = `
            <p id="pTag"> ${cartItem.product.name}: $${var1.toFixed(2)}
            <button id="delete">remove</button>
            </p>
        `
        findListOfItems.append(newLi)

        const removeButton = newLi.querySelector("#delete")
        removeButton.addEventListener("click", event => {
            newLi.remove()
            fetch(`http://localhost:3000/cart_items/${cartItem.id}`, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(results => {
                cartArray = results
                findListOfItems.innerHTML = ""
                renderAllCartItems(cartArray)
            })
        })
    }

    function renderAllCartItems(cartItemsArray){
        cartItemsArray.forEach(cartItem => renderCartItem(cartItem))
        const checkOut = document.querySelector("#checkout")
        const newDiv = document.createElement("div")
        subTotal = cartItemsArray.map(item => item.product.price)
        const subFloat = subTotal.map(num => parseFloat(num))
        let sum = subFloat.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
        }, 0)
        let tax = sum * .08
        checkOut.innerHTML = ""
        newDiv.innerHTML = `
            <hr>
            <p id="subtotal"> Subtotal: $${sum.toFixed(2)} </p>
            <p id="taxes"> Tax: $${tax.toFixed(2)}</p>
            <p id="total"> Total: $${((sum + tax).toFixed(2))}</p>
            <button id="check-out">Check Out</button>
            `
        checkOut.append(newDiv)

        const subtotals = document.querySelector("#subtotal")
        const total = document.querySelector("#total")
        const taxes = document.querySelector("#taxes")
        const checkoutBtn = newDiv.querySelector("#check-out")
        checkoutBtn.addEventListener("click", event => {
            findListOfItems.innerHTML = ""
            subtotals.innerHTML = `Subtotal: $0.00`
            taxes.innerHTML = `Tax: $0.00`
            total.innerHTML = `Total: $0.00`
            alert("Thank you for shopping at OSFA! Hope the clothes fit, no refunds :)");
            fetch("http://localhost:3000/cart_items/", {
                method: "DELETE"
            })
            cartArray = []
        })
    }

    function renderAllProducts(productsArray){
        productsArray.forEach(product => renderOneProduct(product))
    }

    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(productsArray => renderAllProducts(productsArray))

    fetch("http://localhost:3000/cart_items")
    .then(response => response.json())
    .then(cartItemsArray => {
        cartArray = cartItemsArray;
        renderAllCartItems(cartArray)
    })

})