import { main, totalItems } from "./utils.js"

const addtocart = id => {
    let arr = localStorage.items ? JSON.parse(localStorage.items) : []
    let newArr = arr.filter(e => e.id != id)
    let quantity = arr.find(e => e.id == id) ? arr.find(e => e.id == id).quantity + 1 : 1
    newArr.push({ id, quantity })
    totalItems.innerText = Number(totalItems.innerText) + 1
    localStorage.setItem('items', JSON.stringify(newArr))
    localStorage.setItem('total', totalItems.innerText)
}
window.addtocart = addtocart

window.addEventListener('load', () => main(true))