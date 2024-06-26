const EventEmitter = require('events');

class OrderPizza extends EventEmitter{
    constructor(){
        super();
        this.noOfPizza = 0;
    }

    order(){
        this.noOfPizza++;
        this.emit('order-pizza', 'large');
    }

    getNoOfPizza(){
        return this.noOfPizza;
    }
}

module.exports = OrderPizza;