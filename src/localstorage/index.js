const store = {}

store.saveProduct = (id) => localStorage.setItem(id, 1)
store.removeProduct = (id) => localStorage.removeItem(id)
store.getAllProducts = () => ({ ...localStorage })
store.getProduct = (id) => localStorage.getItem(id)
store.updateProduct = (id, quantity) => localStorage.setItem(id, quantity)
store.removeAllProducts = () => localStorage.clear()

module.exports = store
