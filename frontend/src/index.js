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

})