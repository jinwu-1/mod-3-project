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
            <p id="pTag"> ${cartItem.product.name}: $${var1.toFixed(2)} </p>
            <select id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button class="update">Update</button>
            <button class="delete">Remove</button>
        `
        findListOfItems.append(newLi)
        const updateButton = newLi.querySelector(".update")
        updateButton.addEventListener("click", event => {
            const selectElement = newLi.querySelector("#quantity")
            const pTag = newLi.querySelector("#pTag")
            let var2 = cartItem.product.price * selectElement.value
            let var3 = var2.toFixed(2)
            pTag.innerText = `${cartItem.product.name}: $${var3}`
        })

        findListOfItems.append(newLi)

        const removeButton = newLi.querySelector(".delete")
        removeButton.addEventListener("click", event => {
            newLi.remove()
            fetch(`http://localhost:3000/cart_items/${cartItem.id}`, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(results => {
                cartArray = results
                renderAllCartItems(cartArray)
            })
        })
    }

    function renderAllCartItems(cartItemsArray){
        findListOfItems.innerHTML = ""
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
            <p id="subtotal"> Subtotal: $${sum.toFixed(2)} </p>
            <p id="tax"> Tax: $${tax.toFixed(2)}</p>
            <p id="total"> Total: $${((sum + tax).toFixed(2))}</p>
            <button id="check-out">Check Out</button>
            `
        checkOut.append(newDiv)
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