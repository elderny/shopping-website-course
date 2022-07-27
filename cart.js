import { main } from './utils.js'
const increment = id => {
    let arr = localStorage.items ? JSON.parse(localStorage.items) : []
    let newArr = arr.filter(e => e.id != id)
    let quantity = arr.find(e => e.id == id) ? arr.find(e => e.id == id).quantity + 1 : 1
    newArr.push({ id, quantity })
    totalItems.innerText = Number(totalItems.innerText) + 1
    localStorage.setItem('items', JSON.stringify(newArr))
    localStorage.setItem('total', totalItems.innerText)
    document.getElementById(id).value = quantity
}

const decrement = id => {
    let arr = localStorage.items ? JSON.parse(localStorage.items) : []
    let newArr = arr.filter(e => e.id != id)
    let quantity = arr.find(e => e.id == id) ? arr.find(e => e.id == id).quantity - 1 : 0
    quantity ? newArr.push({ id, quantity }) : window.location.reload()
    totalItems.innerText = Number(totalItems.innerText) - 1
    localStorage.setItem('items', JSON.stringify(newArr))
    localStorage.setItem('total', totalItems.innerText)
    document.getElementById(id).value = quantity
}
window.increment = increment
window.decrement = decrement
window.addEventListener('load', () => main())