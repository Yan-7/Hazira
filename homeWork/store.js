class Store {
    constructor(id, name, email, password, products=[]) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.products = products;
    }
}

class Product {
    constructor(id, name, price, store) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.Store = store;
    }
}

class AdminService {
    constructor() {
        this.stores = [];
    }
    
    createStore(id, name, email, password) {
        let newStore = new Store(id, name, email, password);
        this.stores.push(newStore);
        return newStore; // Returns the new store object
    }

    listStores() {
        return console.log(this.stores);
    }

    listProducts() {
        return console.log(this.Products);
    }
    renameStore(id, newName) {
        let oldStore = this.stores.find(store => store.id === id);
        if (oldStore) {
            oldStore.name = newName;
            return true;
        }
        return false;
    }
    deleteStore(id) {
        let index = this.stores.findIndex(store => store.id === id);
        if (index) {
            this.stores.splice(index, 1)    ;
        }
        
    }

}

class StoreService {
    
    addProduct(id, product) {
        let store = this.stores.find(store => store.id === id);
        if (store) {
            store.products.push(product);
            console.log("product added to store");
        }
    }
    listProducts(id) {
        let store = this.stores.find(store => store.id === id);
        console.log(store.products);
    }
    updateProductPrice(storeId, productId, newPrice ) {
        let store = this.stores.find(store => store.id === id);
        let product = store.products.find(product => product.id === productId)
        product.price = newPrice;
        console.log(product.price);
    }
    deletProduct(id) {
        const store = this.stores.find(store => store.id === id);
        if (store) {
            const productIndex = store.products.findIndex(product => product.id === id);
            if (productIndex) {
                store.products.splice(productIndex,1);
            }
        }
    }
}

