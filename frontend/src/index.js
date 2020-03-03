document.addEventListener("DOMContentLoaded", () => {

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

        const newButton = newElement.querySelector(".add-item")
        newButton.addEventListener("click", event => {
            const newLi = document.createElement("li")
            newLi.innerHTML = `
                <p> ${product.name}: $${product.price}
                <button class="delete">Remove</button>
                </p>
            `
            findListOfItems.append(newLi)

            const removeButton = newLi.querySelector(".delete")
            removeButton.addEventListener("click", event => {
                newLi.remove()
                fetch(`http://localhost:3000/cart_items/${product.id}`, {
                    method: "DELETE"
                })
            })
        })

    }

    function renderAllProducts(productsArray){
        productsArray.forEach(product => renderOneProduct(product))
    }

    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(productsArray => renderAllProducts(productsArray))  
// ---------------------------------------------------------------------
    const shoppingCart = document.querySelector(".sidenav")
    function renderOneCartItem(item) {
        const newOrderDiv = document.createElement("div")
        newOrderDiv.innerHTML = `
            <div class="order">
                <p> ${item.product.name} ${item.product.price} <button class="remove-btn"> remove </button> <p>
        `
        shoppingCart.append(newOrderDiv)

        const removeBtn = newOrderDiv.querySelector(".remove-btn")

        removeBtn.addEventListener("click", event => {
            console.log("stop")

            newOrderDiv.remove()
            fetch(`http://localhost:3000/cart_items/${item.id}`, {
                method: "DELETE"
            })
                
        })

    }

    function renderAllCartItems(ordersArray){
        ordersArray.forEach(orders => renderOneCartItem(orders))
    }

    fetch("http://localhost:3000/cart_items")
    .then(response => response.json())
    .then(ordersArray => renderAllCartItems(ordersArray))
})