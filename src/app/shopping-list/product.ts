export class Product {

    id: number;
    name: string;
    quantity: number;

    constructor(_id: number = 0, _name: string = "", _quantity: number = 0) {
        this.id = _id;
        this.name = _name;
        this.quantity = _quantity;
    }
}