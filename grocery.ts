class Grocery {
    stats: string;
    constructor(public name: string, public quantity: string, public price: string) {
        this.stats = name + " $" + price + " Qty:" + quantity;
    }
}

interface Item {
    name: string;
    quantity: string;
    price: string;
}

function grocery( item: Item) {
    return "Purchased " + item.quantity + " of " + item.name + " for " + item.price + " each.";
}

let array = [new Grocery("Milk", "3", "1.99"), 
            new Grocery("Bread", "2", "2.19"), 
            new Grocery("Tortillas", "1", "2.49"), 
            new Grocery("Frozen Pizza", "6", "5.99"), 
            new Grocery("Butter", "2", "2.69"), 
            new Grocery("Soda", "4", "3.99")
        ];

for (var i = 0;i<array.length;i++) {document.body.innerHTML += grocery(array[i]) + '<br>'};
