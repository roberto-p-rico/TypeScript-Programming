const score = [];
const names = [];

function identityOne(val) {
    return val;
}

function identityTwo(val) {
    return val;
}

function identityThree(val) {
    return val;
}

function identityFour(val) {
    return val;
}

const getSearchProducts = (products) => {
    const myIndex = 3;
    return products[myIndex];
};

const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};

function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}

class Sellable {
    constructor() {
        this.cart = [];
    }

    addToCart(product) {
        this.cart.push(product);
    }
}
