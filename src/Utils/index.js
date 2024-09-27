/**
 * This function calculates total price of a new order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {Number} Total price
 */
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => {
        sum = sum + product.price
    })
    return sum
}