'use strict'

class Storage {
    #items;

    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        return this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        if(this.#items.indexOf(itemToRemove) !== -1) {
            this.#items.splice(this.#items.indexOf(itemToRemove),1)
        }
        return this.#items;
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());

storage.addItem("Droid");
console.log(storage.getItems());

storage.removeItem("Prolonger");
console.log(storage.getItems());