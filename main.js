
const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    getorders: function () {
        return this.orders
    },
    orders: []
    
};

const chickenComboMeal = {
    sandwich: 'burger',
    drinksize: 'small',
    fries: true

};

const burgerMeal = {
    sandwich: 'fried chicken',
    fries: false,
    drinksize: '5 gallons'
};

const kidsMeal = {
    sandwich: 'kid burger',
    fries: 'kid fries',
    drinksize: 'kid size'
}

// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(burgerMeal);
restaurant.placeOrder(kidsMeal);

// Invoke the function to return the list of all orders
console.table(restaurant.getorders());
// Output all orders to the console using console.table()