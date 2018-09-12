import { ShoppingCart } from './shoppingCart';

export class Order {
    datePlaced: number;
    items: any[];
    constructor(public userId, public shipping, shoppingCart: ShoppingCart) {
        this.datePlaced = new Date().getTime();

        this.items = shoppingCart.item.map(x => {
            return {
                product: {
                    title: x.title,
                    imgurl: x.imgurl,
                    price: x.price
                },
                quantity: x.quantity,
                totalPrice: x.total
            };
        });
    }
}
