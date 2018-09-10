export class ShoppingCartItem {
    key: string;
    price: number;
    quantity: number;
    title: string;
    imgurl: string;

    constructor(init?: Partial<ShoppingCartItem>) {

        Object.assign(this, init);
    }
    get total() {
        return this.price * this.quantity;
    }
}
