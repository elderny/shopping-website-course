export const
    products = document.getElementById('products'),
    totalItems = document.getElementById('totalItems'),
    cartItems = document.getElementById('items')

export const main = async needProducts => {
    const data = await (await fetch('data.json')).json()
    if (needProducts) {
        data.forEach(e => productHtmlAdd(e))
    } else {
        let arr = localStorage.items ? JSON.parse(localStorage.items) : []
        if (!arr.length) cartItems.innerHTML = '<h4>No items to show</h4>'
        else {
            cartItems.innerHTML = ''
            arr.forEach(e => fetchCartItems(e))
        }
    }
    totalItems.innerText = localStorage.total ? localStorage.total : 0
}

const productHtmlAdd = ({ title, price, id, image }) => {
    products.innerHTML += `<div class="card product mx-2"> <img src="${image}" class="card-img-top" alt="no image"> <div class="card-body"> <h5 class="card-title">${title}</h5> <p class="card-text">Price: $<span>${price}</span></p> <button class="btn btn-primary" onclick="addtocart('${id}')">Add to Cart</button> </div> </div>`
}

const fetchCartItems = async ({ id, quantity }) => {
    const data = await (await fetch('data.json')).json()
    const items = data.filter(e => e.id == id)
    items.forEach(e => cartHtmlAdd({ ...e, quantity }))
}

const cartHtmlAdd = ({ ...e }) => {
    cartItems.innerHTML += `<div class="card mb-3" style="max-width: 540px"> <div class="row g-0"> <div class="col-md-4"> <img src="${e.image}" class="img-fluid rounded-start" alt="no image" style="width:200px"> </div> <div class="col-md-8"> <div class="card-body"> <h5 class="card-title">${e.title}</h5> <p class="card-text">Price: $<span>${e.price}</span></p> <div class="d-flex"> <div onclick="decrement('${e.id}')" style="transform: scale(1.5);margin: auto 0;cursor:pointer"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" /> </svg> </div> <div style="width: 20%;" class="mx-3"> <input type="number" id='${e.id}' class="form-control" value="${e.quantity}"> </div> <div onclick="increment('${e.id}')" style="transform: scale(1.5);margin: auto 0;cursor:pointer"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" /> </svg> </div> </div> </div> </div> </div> </div>`
}