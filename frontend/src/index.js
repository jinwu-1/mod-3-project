document.addEventListener("DOMContentLoaded", () => {
    let cartArray;
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
        newLi.innerHTML = `
            <p> ${cartItem.product.name}: $${cartItem.product.price}
            <button class="delete">Remove</button>
            </p>
        `
        findListOfItems.append(newLi)

        const removeButton = newLi.querySelector(".delete")
        removeButton.addEventListener("click", event => {
            newLi.remove()
            fetch(`http://localhost:3000/cart_items/${cartItem.id}`, {
                method: "DELETE"
            })
        })
    }

    function renderAllCartItems(cartItemsArray){
        cartItemsArray.forEach(cartItem => renderCartItem(cartItem))
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
        renderAllCartItems(cartItemsArray)
    })

})