document.addEventListener("DOMContentLoaded", () => {

    const findDiv = document.querySelector("#products")

    function renderOneProduct(product){
        const newElement = document.createElement("div")
        newElement.className = "content"
        newElement.innerHTML = `
            <div class="container"> 
                <img src="${product.image_url}" class="image">
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `
        findDiv.append(newElement)
    }

    function renderAllProducts(productsArray){
        productsArray.forEach(product => renderOneProduct(product))
    }

    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(productsArray => renderAllProducts(productsArray))  

})